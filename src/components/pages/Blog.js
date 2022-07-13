import React, {useState} from 'react'
import PerformanceVlog1 from "../blogPosts/PerformanceVlog1"
import PerformanceVlog2 from '../blogPosts/PerformanceVlog2';
import PerformanceVlog3 from '../blogPosts/PerformanceVlog3';
import PerformanceVlog4 from '../blogPosts/PerformanceVlog4';
import VocalAnalysis1 from "../blogPosts/VocalAnalysis1"
import VocalAnalysis2 from '../blogPosts/VocalAnalysis2'
import VocalAnalysis3 from '../blogPosts/VocalAnalysis3'
import VocalAnalysis4 from '../blogPosts/VocalAnalysis4'
import SchemaSketch1 from "../blogPosts/SchemaSketch1"
import SchemaSketch2 from "../blogPosts/schemaSketch2"
import InputLabel from '@mui/material/InputLabel';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';

const getFilteredPosts = (sortBy, posts) => {
  let filteredPosts = posts;

  console.log(sortBy)

  switch (sortBy) {
    case "schema":
      filteredPosts = [<SchemaSketch1/>, <SchemaSketch2/>];
      break;
    case "vlog":
      filteredPosts = [<PerformanceVlog1/>, <PerformanceVlog2/>, <PerformanceVlog3/>, <PerformanceVlog4/>];
      break;
    case "vocal":
      filteredPosts = [<VocalAnalysis1/>, <VocalAnalysis2/>, <VocalAnalysis3/>, <VocalAnalysis4/>];
      break;
    default:
      filteredPosts = posts;
  }

  return filteredPosts;
}

export default function Blog() {
  const posts = [<SchemaSketch1/>, <PerformanceVlog1/>, <VocalAnalysis1/>, 
  <PerformanceVlog2/>, <VocalAnalysis2/>, <PerformanceVlog3/>, 
  <VocalAnalysis3/>,  <SchemaSketch2/>, <VocalAnalysis4/>, <PerformanceVlog4/>]

  const [sortBy, setSort] = useState('');
  const filteredPosts = getFilteredPosts(sortBy, posts);

  const renderPosts = filteredPosts.map((post) => {
    return (
        <Grid container item xs={12} justifyContent="center">
            {post}
        </Grid>
    )
  })

  return (
    <div>
        <Grid item container spacing={2} margin={2} justifyContent="center">
          <Grid item xs={4}>
            <FormControl fullWidth>
                <InputLabel id="sort-select-label">Filter Posts</InputLabel>
                <Select
                    labelId="sort-select-label"
                    id="sort-select"
                    value={sortBy}
                    label="Post Type"
                    onChange={(event: SelectChangeEvent) => {
                        setSort(event.target.value)
                    }}
                >
                    <MenuItem value={"schema"}>Schemas</MenuItem>
                    <MenuItem value={"vocal"}>Vocal Analysis</MenuItem>
                    <MenuItem value={"vlog"}>Performance Vlogs</MenuItem>
                    <MenuItem value={""}>All</MenuItem>
                </Select>
            </FormControl>
          </Grid>
          
          {renderPosts}

        </Grid>
    </div>
  )
}
