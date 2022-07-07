import React from 'react'
import Grid from '@mui/material/Grid';
import './blogPost.css'
import Video from "../video/Video"
import {Accordion, AccordionSummary, AccordionDetails} from "@mui/material"

const PerformanceVlog1 = () => {
  return (
    <Grid item container xs={10} lg={8}>
      <div className="post">
        <Accordion>
          <AccordionSummary
          id="panel1-header" 
          aria-controls="panel1-content">
            <h1 className="header">
              Performance Vlog #1: Compiling the Final Set
            </h1>
          </AccordionSummary>
          <AccordionDetails>
            <div className="video">
              <Video vidLink='https://www.youtube.com/watch?v=mDwUJ_3p1TA'/>
            </div>
            <p>
              In this vlog I go over how I have taken each song and moved it into a final Ableton project as well as my reasons for doing so.
              I also talk about how I have added a 'stopper' to make the set stop playing automatically if needed, how I am dragging in and
              planning out the visuals, as well as what I plan to accomplish for my next update. Below I have linked some videos that helped me
              figure these things out:
            </p>
            <Grid container item xs={10} justifyContent="center">
            <ul>
              <li><a href="https://www.youtube.com/watch?v=T2bKa_WnnJA">How to build an Ableton Live Set with multiple songs</a></li>
              <li><a href="https://www.youtube.com/watch?v=MkWZ4rtRybQ">Using the IAC Driver with Ableton Live</a></li>
              <li><a href="https://www.youtube.com/watch?v=D3R3uwodUfw">Creating a stop track in Ableton Live</a></li>
            </ul>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </div>
    </Grid>
  )
}

PerformanceVlog1.displayName = "vlog";

export default function Vlog1() {
  return <PerformanceVlog1/>;
}