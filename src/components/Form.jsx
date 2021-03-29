import axios from 'axios'
import React from 'react'
import {useState} from "react"
import {baseURL, config} from "../services"
import {useHistory} from "react-router-dom"

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
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">
                    Name:  
                </label>
                <input type ="text" name = "name" id="name" required onChange={handleChange} value={memory.name}/>
                <label htmlFor="description">
                    Description: 
                </label>
                <input type ="text" name = "description" id="description" required onChange={handleChange} value={memory.description}/>
                <label htmlFor="memoryLink">
                    Google Maps Embed Link:   
                </label>
                <input type ="text" name = "memoryLink" id="memoryLink" required onChange={handleChange} value={memory.memoryLink}/>
                <label htmlFor="location">
                    Location:  
                </label>
                <input type ="text" name = "location" id="location" required onChange={handleChange} value={memory.location}/>
                <label htmlFor="type">
                    Type:  
                </label>
                <input type ="text" name = "type" id="type" required onChange={handleChange} value={memory.type}/>
                <input type="submit"/>

            </form>
        </div>
    )
}
