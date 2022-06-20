import ReactPlayer from 'react-player'
import React from 'react'
import "./Video.css"

const Video = () => {
  return (
    <ReactPlayer 
      controls className="video" 
      width='480px' height='300px' 
      url='https://www.youtube.com/watch?v=mDwUJ_3p1TA'
    />
  )
}

export default Video