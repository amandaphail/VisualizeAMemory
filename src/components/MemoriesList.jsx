import React from 'react'

import Memories from "./Memories"
export default function MemoriesList(props) {

    
let memories = props.memories
    return (
        <div>
            {memories.map((memory) =>{
                // console.log(memory.fields)
                return <Memories memory={memory} id = {memory.id}/>
            })}
        </div>
    )
}
