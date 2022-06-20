import React from 'react'
import Grid from '@mui/material/Grid';
import './textPost.css'
import Video from "../../components/video/Video"

const TextPost2 = () => {
  return (
    <Grid item container lg={6}>
      <div className="post">
        <h1>
          Performance Vlog #1: Compiling the Final Set
        </h1>
        <Video/>
        <p>
          In this vlog I go over how I have taken each song and moved it into a final Ableton project as well as my reasons for doing so.
          I also talk about how I have added a 'stopper' to make the set stop playing automatically if needed, how I am dragging in and 
          planning out the visuals, as well as what I plan to accomplish for my next update. Below I have linked some videos that helped me 
          figure these things out:
        </p>
        <Grid container item xs={10} justifyContent="center">
        <a href="https://www.youtube.com/watch?v=T2bKa_WnnJA">How to build an Ableton Live Set with multiple songs</a>
        <a href="https://www.youtube.com/watch?v=MkWZ4rtRybQ">Using the IAC Driver with Ableton Live</a>
        <a href="https://www.youtube.com/watch?v=D3R3uwodUfw">Creating a stop track in Ableton Live</a>
        </Grid>
      </div>
    </Grid>
  )
}

export default TextPost2