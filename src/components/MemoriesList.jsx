import React from 'react'

import Memories from "./Memories"
export default function MemoriesList(props) {

    
let memories = props.memories
    return (
        <div>
            <div id="intro">
                Expand any memory that resonates, and you can see into the world where it happened!
            </div>
            <div>

            {memories.map((memory, index) =>{
                // console.log(memory.fields)
                return <Memories key = {index} memory={memory} id = {memory.id}/>
            })}
            </div>
        </div>
    )
}
