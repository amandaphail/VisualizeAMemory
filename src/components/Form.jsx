import axios from 'axios'
import React from 'react'
import {useState} from "react"
import {baseURL, config} from "../services"
import {useHistory} from "react-router-dom"
import "./form.css"
import { Popover } from '@material-ui/core';
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

const[anchorEl, setAnchorEl] = useState(null)

const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
};

const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;


    return (
        
        <div id="form">
            <h2>Share your memories!</h2>
            <p id="p">You too can share your memories with the community!  All you need is access to google maps on your computer, and to fill out this form.  Need help finding the Google Maps embed link?  Check out our User Guide!</p>

            <Button aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
                    Open Popover
            </Button>
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
                <div class="criteria">

                <label htmlFor="name">
                    Name:  
                </label>
                <input class="inputs" type ="text" name = "name" id="name" required onChange={handleChange} value={memory.name}/>
                </div>
                <div class="criteria">
                <label htmlFor="description">
                
                    Description: 
                </label>
                <input class="inputs" type ="text" name = "description" id="description" required onChange={handleChange} value={memory.description}/>
                </div>
                <div class="criteria">
                <label htmlFor="memoryLink">
                    Memory View Embed Link:   
                </label>
                <input class="inputs" type ="text" name = "memoryLink" id="memoryLink" required onChange={handleChange} value={memory.memoryLink}/>
                </div>
                <div class="criteria">
                <label htmlFor="location">
                    Location:  
                </label>
                <input class="inputs" type ="text" name = "location" id="location" required onChange={handleChange} value={memory.location}/>
                </div>
                <div class="criteria">
                <label htmlFor="type">
                    Type:  
                </label>
                <input class="inputs" type ="text" name = "type" id="type" required onChange={handleChange} value={memory.type}/>
                </div>
                <input type="submit"/>

            </form>
        </div>
    )
}
