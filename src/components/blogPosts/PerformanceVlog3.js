import React from 'react'
import Grid from '@mui/material/Grid';
import './blogPost.css'
import Video from "../video/Video"
import {Accordion, AccordionSummary, AccordionDetails} from "@mui/material"

const PerformanceVlog3 = () => {
  return (
    <Grid item container xs={10} lg={8}>
      <div className="post">
        <Accordion>
          <AccordionSummary
          id="panel1-header" 
          aria-controls="panel1-content">
            <h1 className="header">
              Performance Vlog #3: Visuals
            </h1>
          </AccordionSummary>
          <AccordionDetails>
            <div className="video">
              <Video vidLink='https://youtu.be/xGjv6YSvc7U'/>
            </div>
            <p>
              In this vlog I go over how I have hooked up my computer to a projector to display visuals while I'm also playing music.
              In doing this process I discovered several potential concerns, including how I am going to get power to all the devices, chords/stage setup,
              the resolution of the projector, as well as the lagging processor on my computer, which I also discuss in this vlog. Below I have linked some 
              videos that helped me along the way, as well as the sections in my 'how to create a performance' guide that cover these areas:
            </p>
            <Grid container item xs={10} justifyContent="center">
            <ul>
              <li><a href="https://www.youtube.com/watch?v=XaBqvxWy8k0&ab_channel=PracticalWorship">How to include and display a video using Ableton Live</a></li>
            </ul>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </div>
    </Grid>
  )
}

export default PerformanceVlog3