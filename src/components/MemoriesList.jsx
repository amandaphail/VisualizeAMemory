import React from 'react'
import Memories from "./Memories"
import "./memorieslist.css"

export default function MemoriesList(props) {
let memories = props.memories
    return (
        <div id="memoriesStyle">
            <div id="intro">
                <h3>
                    Expand any memory that resonates, and you can see into the world where it happened!
                    </h3>
            </div>
            <div>

            {memories.map((memory, index) =>{
                return <Memories 
                key = {index} memory={memory} id = {memory.id}/>
            })}
            </div>
        </div>
    )
}
