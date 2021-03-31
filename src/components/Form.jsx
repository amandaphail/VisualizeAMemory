import axios from 'axios'
import React from 'react'
import {useState} from "react"
import {baseURL, config} from "../services"
import {useHistory} from "react-router-dom"
import "./form.css"
import { Popover } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Guide from "./Guide"


export default function Form(props) {

let [memory, setMemory]= useState({
    name: "",
    description: "",
    memoryLink: "",
    location: "",
    type: "",
})

const history = useHistory()

function handleChange(event){
    let {name, value} = event.target
    setMemory((prevState)=>({...prevState,[name]:value}))
}

async function handleSubmit(event){
    event.preventDefault()
    await axios.post(baseURL,{fields:memory}, config)
    props.setToggle((prevState) => !prevState )
    history.push('/')
    
}

//popover button
const[anchorEl, setAnchorEl] = useState(null)

const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
};

const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

//button styling
const StyledButton = withStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: 48,
      padding: '0 30px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      fontSize: '18px',
    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);

    return (
        
        <div id="form">
            <h2>Share your memories!</h2>
            <p id="p">You too can share your memories with the community!  All you need is access to google maps on your computer, and to fill out this form.  Need help finding the Google Maps embed link?  Check out our User Guide!</p>

            <StyledButton aria-describedby={id} variant="outlined" color="primary" onClick={handleClick}>
                    User Guide
            </StyledButton>
            <Popover 
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
            >
                <Guide />
            </Popover>

            <form onSubmit={handleSubmit}>
                <div className="criteria">

                <label htmlFor="name">
                    Name:  
                </label>
                <input className="inputs" type ="text" name = "name" id="name" required onChange={handleChange} value={memory.name}/>
                </div>
                <div className="criteria">
                <label htmlFor="description">
                
                    Description: 
                </label>
                <input className="inputs" type ="text" name = "description" id="description" required onChange={handleChange} value={memory.description}/>
                </div>
                <div className="criteria">
                <label htmlFor="memoryLink">
                    Memory View Embed Link:   
                </label>
                <input className="inputs" type ="text" name = "memoryLink" id="memoryLink" required onChange={handleChange} value={memory.memoryLink}/>
                <p className="instruction">*Refer to our User Guide to get the right link!</p>
                </div>
                <div className="criteria">
                <label htmlFor="location">
                    Location:  
                </label>
                <input className="inputs" type ="text" name = "location" id="location" required onChange={handleChange} value={memory.location}/>
                </div>
                <div className="criteria">
                <label htmlFor="type">
                    Location Type:  
                </label>
                <input className="inputs" type ="text" name = "type" id="type" required onChange={handleChange} value={memory.type}/>
                <p className="instruction">*Ex: mountains, city, beach, field, small town, desert, etc.</p>
                </div>
                <input type="submit"/>

            </form>
        </div>
    )
}
