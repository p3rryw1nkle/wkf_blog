import React from 'react'
import Grid from '@mui/material/Grid';
import './blogPost.css'
import Video from "../video/Video"
import {Accordion, AccordionSummary, AccordionDetails} from "@mui/material"

const PerformanceVlog4 = () => {
  return (
    <Grid item container xs={10} lg={8}>
      <div className="post">
        <Accordion>
          <AccordionSummary
          id="panel1-header" 
          aria-controls="panel1-content">
            <h1 className="header">
              Performance Vlog #4: Vocals
            </h1>
          </AccordionSummary>
          <AccordionDetails>
            <div className="video">
              <Video vidLink='https://youtu.be/Mfoghtc1VmU'/>
            </div>
            <p>
              In this vlog I talk about how I have purchased an audio interface and wireless microphone in order to sing over my instrumentals + record
              while performing. This process was honestly pretty straightforward and much less complicated than I anticipated, which I go over in my
              how-to guide. For next update, I hope to have more of a "final" setup prepared with everything hooked up together, and to be able to demo 
              part of the performance.
            </p>
          </AccordionDetails>
        </Accordion>
      </div>
    </Grid>
  )
}

export default PerformanceVlog4