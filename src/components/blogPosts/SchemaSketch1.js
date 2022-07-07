import React from 'react'
import Grid from '@mui/material/Grid';
import './blogPost.css'
import schema1 from '../images/schema1.jpg'
import {Accordion, AccordionSummary, AccordionDetails} from "@mui/material"

const TextPost1 = () => {
  return (
    <Grid item container xs={10} lg={8}>
      <div className="post">
        <Accordion>
          <AccordionSummary
          id="panel1-header" 
          aria-controls="panel1-content">
            <h1 className="header">
              Schema Sketch #1: the Wizard, the King, and the Fool
            </h1>
          </AccordionSummary>
          <AccordionDetails>
            <img alt="schema1" width="300px" height="300px" src={schema1}/>
            <p>
              This is my initial sketch for the concept of the performance which I plan on calling “the Wizard, the King, and the Fool”. 
              In the diagram, the black circle represents the unconscious, while the triangle/prism contains the archetypes which 
              correspond to each point (wizard, king, fool), each of which the performance will bring light to and make conscious. 
              Furthermore, each archetype has a ‘light’ and a ‘dark’ side, which are relative to each archetype–the dark side of 
              one archetype is also the light side of another–which is shown in the shading of the triangle.
            </p>
            <p>
              I’m planning on grouping the performance into several acts where each act will correspond to a different archetype 
              and several songs. Ideally, each act will flow into the next and follow the spiral on the diagram. For example, the 
              last song of the ‘wizard’ act will embody the negative aspects of the wizard archetype (i.e. manipulation), which will 
              ultimately lead into the positive aspects of the king archetype (i.e. power), which will break down into its negative 
              aspects and fall into the fool archetype, and so on.
            </p>
            <h3>Setlist:</h3>
            <ol>
              <li>the Anomaly</li>
              <li>Alone Time</li>
              <li>the Controller</li>
              <li>New Moon</li>
              <li>Save Yourself</li>
              <li>Becoming No One</li>
              <li>Fool's Song</li>
              <li>Acedia</li>
              <li>WTF</li>
            </ol>
            <p>
              The spiral in the diagram, which starts from the center and moves counter-clockwise, represents movement into the 
              unconscious. In “The Archetypes and the Collective Unconscious”, Jung states ”in general, a leftward (counter clockwise) 
              movement indicates towards the unconscious, while a rightward movement goes towards consciousness” (Jung, 320). The spiral 
              is representative of how the performance seeks to explore/channel the unconscious, and in doing so, integrate it into 
              consciousness. Furthermore, as the performance cycles through each archetype, their subconscious functionalities become 
              more and more exposed and ultimately transcended, which is why the spiral grows outwards and is not just a circle.
            </p>
            <p>
              The symbols that surround the head are meant to represent the motifs that are projected by the archetypes. Additionally, 
              the figure above the head is supposed to be a 3-D perspective of the mind, which is meant to show that the mind is not 
              2-dimensional as the symbol suggests and in fact contains many facets which permeate to deeper levels of the unconscious, 
              out of which ‘the Wizard, the King, & the Fool’ are only several. In future sketches I would like to focus more on the 
              symbolism surrounding the head and perhaps make it more clear that they are being ‘projected’, as if the archetypes were 
              a prism that is reflecting the subconscious contents of the psyche.
            </p>
          </AccordionDetails>
        </Accordion>
      </div>
    </Grid>
  )
}

export default TextPost1