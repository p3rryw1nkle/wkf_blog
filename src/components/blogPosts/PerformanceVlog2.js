import React from 'react'
import Grid from '@mui/material/Grid';
import './blogPost.css'
import Video from "../video/Video"
import {Accordion, AccordionSummary, AccordionDetails} from "@mui/material"

const PerformanceVlog2 = () => {
  return (
    <Grid item container xs={10} lg={8}>
      <div className="post">
        <Accordion>
          <AccordionSummary
          id="panel1-header" 
          aria-controls="panel1-content">
            <h1>
              Performance Vlog #2: MIDI mapping
            </h1>
          </AccordionSummary>
          <AccordionDetails>
            <div className="video">
              <Video vidLink='https://www.youtube.com/watch?v=xHETAdKnuhk'/>
            </div>
            <p>
              In this vlog I go over how I have begun mapping effects to specific knobs on my MIDI controllers using Ableton's MIDI mapping feature.
              I also talk about how I have added an instrument 'switcher' using my computer's IAC driver to automatically swap sounds on my keyboard 
              in between songs, as well as my goals to accomplish before next update. Below I have linked some videos that helped me along the way, 
              as well as the sections in my 'how to create a performance' guide that cover these areas:
            </p>
            <Grid container item xs={10} justifyContent="center">
            <ul>
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

export default PerformanceVlog2