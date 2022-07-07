import React from 'react'
import Grid from '@mui/material/Grid';
import TextPost1 from "../blogPosts/SchemaSketch1"
import SchemaSketch2 from "../blogPosts/schemaSketch2"
import TextPost2 from "../blogPosts/PerformanceVlog1"
import TextPost3 from "../blogPosts/VocalAnalysis1"
import PerformanceVlog2 from '../blogPosts/PerformanceVlog2';
import PerformanceVlog3 from '../blogPosts/PerformanceVlog3';
import VocalAnalysis2 from '../blogPosts/VocalAnalysis2'
import VocalAnalysis3 from '../blogPosts/VocalAnalysis3'

export default function Blog() {
  return (
    <div>
        <Grid item container spacing={2} margin={2}>
          <Grid container item xs={12} justifyContent="center">
            <TextPost1/>
          </Grid>
          <Grid container item xs={12} justifyContent="center">
            <TextPost2/>
          </Grid>
          <Grid container item xs={12} justifyContent="center">
            <TextPost3/>
          </Grid>
          <Grid container item xs={12} justifyContent="center">
            <PerformanceVlog2/>
          </Grid>
          <Grid container item xs={12} justifyContent="center">
            <VocalAnalysis2/>
          </Grid>
          <Grid container item xs={12} justifyContent="center">
            <PerformanceVlog3/>
          </Grid>
          <Grid container item xs={12} justifyContent="center">
            <VocalAnalysis3/>
          </Grid>
          <Grid container item xs={12} justifyContent="center">
            <SchemaSketch2/>
          </Grid>
        </Grid>
    </div>
  )
}
