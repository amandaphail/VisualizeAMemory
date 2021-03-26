import React from 'react'
import axios from 'axios'
import {useState, useEffect} from "react"
import {baseURL, config} from "../services"
export default function MemoriesList() {

    const [memories,setMemories] = useState([])

    useEffect(()=> { 
        getMemories()
    },[])

    async function getMemories(){
        let response = await axios.get(baseURL, config)
        console.log (response)
    }
    

    return (
        <div>
            MemsList
        </div>
    )
}
