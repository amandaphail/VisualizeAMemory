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



    const Accordion = withStyles({
        root: {
          width: '90%',
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
                        <p className="memory"> {mem.description}</p>
                        <p className="memory">{mem.name}</p>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <div id ="right">
                        <iframe title={mem.name} src={`${userLink}`} allowfullscreen="" loading="lazy"></iframe>
                        <p className="instruction">  *To become even more immersed, go ahead and switch to full screen view in the Google Map</p>
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
        
    )
}
// https://www.freakyjolly.com/react-material-ui-accordion-tabs-tutorial-with-example/#Using_Accordion_Component
// https://stackoverflow.com/questions/63359031/react-material-ui-accordion-how-to-center-header-and-expand-icon