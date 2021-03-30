import React from 'react'
import "./memories.css"
import { Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core'
import { ExpandMore } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';


export default function Memories(props) {

    let mem = props.memory.fields

    let mapInput = props.memory.fields.memoryLink
    
    let splitMap = mapInput.split(`"`)
    let userLink = splitMap[1]

    // console.log(splitMap)
    // console.log(mapInput)
    // console.log(mem)

    const Accordion = withStyles({
        root: {
          border: '1px solid #AFD0BF',
          boxShadow: 'none',
          borderRadius: '30px',
          '&:not(:last-child)': {
            
          },
          '&:before': {
            display: 'none',
          },
          '&$expanded': {
            margin: 'auto',
          },
        },
        expanded: {},
      })(MuiAccordion);

      const AccordionSummary = withStyles({
        content: {
          flexGrow: 0
        }
      })(MuiAccordionSummary);


    return (
        <div id = "memories">
            <br/>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMore />}>
                    <div id = "left">
                        <p> {mem.description}</p>
                        <p>{mem.name}</p>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <div id ="right">
                        <iframe src={`${userLink}`} allowfullscreen="" loading="lazy"></iframe>
                        <p> To become even more immersed, go ahead and switch to full screen view in the Google Map</p>
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
        
    )
}
// https://www.freakyjolly.com/react-material-ui-accordion-tabs-tutorial-with-example/#Using_Accordion_Component