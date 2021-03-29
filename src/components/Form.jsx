import axios from 'axios'
import React from 'react'
import {useState} from "react"
import {baseURL, config} from "../services"
import {useHistory} from "react-router-dom"
import "./form.css"

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
    return (
        <div id="form">
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
