import React from 'react'
import "./memories.css"
import { Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core'
import { ExpandMore } from '@material-ui/icons';

export default function Memories(props) {

    let mem = props.memory.fields

    let mapInput = props.memory.fields.memoryLink
    
    let splitMap = mapInput.split(`"`)
    let userLink = splitMap[1]

    // console.log(splitMap)
    // console.log(mapInput)
    // console.log(mem)

    return (
        <div id = "memories">
            <br/>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMore />}>

            <div id = "left">
            <p>
                {mem.description}
            </p>
            <p>{mem.name}</p>
            </div>
                </AccordionSummary>
        
<AccordionDetails>
    
        <div id ="right">
            <br/>
            <iframe
    src={`${userLink}`}
    width="600"
    height="450"
    // style="border:0;"
    allowfullscreen=""
    loading="lazy"
  ></iframe>
        </div>
</AccordionDetails>
        </Accordion>
        <br />
        </div>
        
    )
}
// https://www.freakyjolly.com/react-material-ui-accordion-tabs-tutorial-with-example/#Using_Accordion_Component