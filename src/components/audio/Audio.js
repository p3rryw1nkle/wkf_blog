import AudioPlayer from 'react-audio-player';
import React from 'react'
import saveYourself from './saveYourself1.wav';

const Audio = () => {
  return (
    <AudioPlayer
        src={saveYourself}
        controls
    />
  )
}

export default Audio