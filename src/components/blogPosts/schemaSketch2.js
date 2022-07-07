import React from 'react'
import Grid from '@mui/material/Grid';
import './blogPost.css'
import schema2 from '../images/schema2.jpg'
import {Accordion, AccordionSummary, AccordionDetails} from "@mui/material"

const schemaSketch2 = () => {
  return (
    <Grid item container xs={10} lg={8}>
      <div className="post">
        <Accordion>
          <AccordionSummary
          id="panel1-header" 
          aria-controls="panel1-content">
            <h1 className="header">
              Schema Sketch #2: Medieval Medley
            </h1>
          </AccordionSummary>
          <AccordionDetails>
            <img alt="schema1" width="300px" height="300px" src={schema2}/>
            <p>
              This is my second concept sketch of the so-called "map" of the performance. In terms of my previous sketch, in this one I added pictures of 
              various archetypes I took from medieval manuscripts as well as lines emitting from the 'archetypal prism' on top to demonstrate that the 
              characters are being projected by the subconscious mind. 
            </p>
            <p>
              I changed the archetypes from symbols in the last sketch to actual characters because I think it's more representative of how the archetypes 
              show up within the performance–as aspects of my character, rather than random symbols, that are displayed through different songs. I also thought 
              it was fitting to take the characters from medieval manuscripts, because the evidence of certain types of characters repeating themselves 
              throughout medieval texts, folklore, and fairytales is in itself a display of the archetypes.
            </p>
            <p>
              The characters are meant to follow the story arc of the performance, meaning each character is supposed to morph into and become the next, moving 
              counter-clockwise. Maybe this isn’t very clear based off the images I chose, however that’s the idea that I’m working towards and what I plan on 
              improving upon in my next sketch. Starting with the wizard (top left), which represents a psyche that is cloaked and cut off from itself, it morphs and 
              integrates personality aspects of the other archetypes, and ultimately arrives at the syzygy (top right), which represents the unification of the psyche.
              The story arc of the performance aligns with the concept of individuation where more and more parts of the psyche are channeled and integrated.
            </p>
            <p>
              The sun and the moon are also representative of this unification of the psyche. In the words of Jung, the personality “must be extended both upwards 
              and downwards”. The idea is that in order to become more psychically whole, it’s necessary to bring the unconscious into the consciousness, as 
              opposed to just reenforcing what’s already conscious, which would in turn strengthen the force and hold of the unconscious.
            </p>
            <p>
              I feel pretty satisfied with this sketch. It definitely feels like I've made some strides in the right direction, but it's still
              not complete. In terms of my next sketch I would like to:
            </p>
            <ol>
              <li>Make the transition between characters more apparent by finding images that are more similiar to one another</li>
              <li>
                Try to incorportate the idea of spiritual alchemy within the diagram (which Jung paralleled with individuation). I am thinking 
                of adding more moth-related imagery (i.e. the stages of larvae, caterpillar, coccoon, moth) to further accentuate the metamorphosis 
                that is undergone during the process of individuation.
              </li>
              <li>
                Redesign the spiral and 'projection' lines–make spiral more in the background and projection lines more in the foreground.
                Also add movement to the spiral to make it clear that it is moving counter clockwise and outwards, which represents the growth
                into the unconscious.
              </li>
            </ol>
          </AccordionDetails>
        </Accordion>
      </div>
    </Grid>
  )
}

export default schemaSketch2