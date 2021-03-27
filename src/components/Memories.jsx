import React from 'react'

export default function Memories(props) {

    let mem = props.memory.fields

    let mapInput = props.memory.fields.memoryLink
    
    let splitMap = mapInput.split(`"`)
    let userLink = splitMap[1]

    console.log(mapInput)
    // console.log(mapInput)
    // console.log(mem)

    return (
        <div>
            <br/>
        <div id = "left">
            <p>
                {mem.description}
            </p>
            <p>{mem.name}</p>
        </div>
        <br/>
        <div id ="right">
            {userLink}
        </div>
        <br />
        </div>
        
    )
}
