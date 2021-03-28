import React from 'react'
import axios from 'axios'
import {useState, useEffect} from "react"
import {baseURL, config} from "../services"
import Memories from "./Memories"
export default function MemoriesList() {

    const [memories,setMemories] = useState([])

    useEffect(()=> { 
        getMemories()
    },[])

    async function getMemories(){
        let response = await axios.get(baseURL, config)
        
        setMemories(response.data.records)
    }
     console.log(memories)

    return (
        <div>
            {memories.map((memory) =>{
                // console.log(memory.fields)
                return <Memories memory={memory} id = {memory.id}/>
            })}
        </div>
    )
}
