import ReactPlayer from 'react-player'
import React from 'react'
import "./Video.css"

const Video = ({vidLink}) => {
  return (
    <ReactPlayer 
      controls className="video" 
      width='480px' height='300px' 
      url={vidLink}
    />
  )
}

export default Video