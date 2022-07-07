import React from 'react'
import Grid from '@mui/material/Grid';
import './blogPost.css'
import Audio from "../audio/Audio"
import {Accordion, AccordionSummary, AccordionDetails} from "@mui/material"
import saveYourself from '../audio/firstPost/saveYourself1.wav';
import zReplacement from '../audio/firstPost/z_replacement.wav';
import guhs from '../audio/firstPost/guhs.m4a';

const VocalAnalysis1= () => {
  return (
    <Grid item container xs={10} lg={8}>
      <div className="post">
        <Accordion>
          <AccordionSummary
          id="panel1-header" 
          aria-controls="panel1-content">
            <h1 className="header">
              Vocal Analysis #1: Save Yourself
            </h1>
          </AccordionSummary>
          <AccordionDetails>
            <p>
                I’m really humbling myself here by putting these clips out so be nice to me.
            </p>
            <Audio audioFile={saveYourself}/>
            <p>
                This is audio of me singing my song “Save Yourself” on 12/2/2021, which was over 6
                months ago. I thought it would be a good place to begin since there’s a good distance
                between now and then and I can listen to it with a fresh perspective, now that I’ve done
                some research on vocal theory.
            </p>
            <p>
                First of all, there are some things I thought I did okay, which I think are a good direction
                and something to move towards. In some instances, when I get off on the wrong note, I’m
                able to readjust the pitch to the correct one before the notes ends. I’m also able to sustain
                some phrases that are drawn out, have considerable jumps between notes, and are generally
                difficult to sing. When I sing “falling for another God” (@ 0:10), for example, even though
                I am pitchy, I am able to maintain a fullness and stability in the sound.
            </p>
            <p>
                However, I also consistently fall flat on a lot of the notes–in the verse which goes
                “spiritual falacies, haunt me endlessly….” (@ 0:47) especially.  There are a couple ways I
                think I can correct this. Firstly, I think simply practicing more and getting comfortable singing
                the song with just the instrumental will help curb some nervousness and commit the notes to
                muscle memory (when I was initially recording/writing these songs I would have a melody
                playing in my ear as I sung them, so I’m still getting used to singing without the training
                wheels, so to speak). Secondly, I suspect that excercising my upper register (the cricothyroid muscles),
                and approaching the notes with an ‘airier’ feeling will help to balance out the flatness.
                You can tell from the recording that I’m very much anchored in my chest voice as it sounds
                full and heavy. Good exercises for combatting this would include those that work out the head
                and the mixed range of the voice.
            </p>
            <p>
              Additionally, in some places the delivery is very monotonic and it sounds like there’s no real
              emotional connection to what’s being sung. It’s like I’m singing the notes but I’m not really
              experiencing them. In my head the song is supposed to sound more creepy and eery, as if I were
              casting a curse or something. However, the way I’m singing it in this clip sounds like I’m reading
              sheet music without having heard the song before. My timing is also off in some places, and I end
              up running out of breath at the end of the last chorus. I think this goes back to continuously
              rehearsing the song and getting as familiar as I can with it. This will help me to come in at the
              right times, find good places to take breaths, and add in more emotion once I’m more comfortable.
              Additionally, breath control exercises such as a sustained “z”  can help me maintain power
              throughout the longer phrases.
            </p>
            <p>
              Below are some clips of me doing the exercises that I mentioned above:
            </p>
            <Audio audioFile={guhs}/>
            <p>
              This is me exercising my upper register by singing "guh" using octave and a half scales. The purpose of
              this exercise is to train my vocal cords to coordinate notes throughout my mixed range, which the 
              glottal stop in the 'g' onset stimulates. As you can hear, a lot of the notes are weak and sound raspy 
              because the vocal chords are not coming together cleanly, indicating that more practice needs to be done.
            </p>
            <Audio audioFile={zReplacement}/>
            <p>
              This is me doing the "z" replacement exercise. Basically, all I'm doing is singing the melody but
              through a 'z' consonant. This is because the 'z' consonant in particular stimulates abdominal muscles
              that are necessary for good breath control.
            </p>
          </AccordionDetails>
        </Accordion>
      </div>
    </Grid>
  )
}

VocalAnalysis1.displayName = "vocal";

export default function Vocal1() {
  return <VocalAnalysis1/>;
}