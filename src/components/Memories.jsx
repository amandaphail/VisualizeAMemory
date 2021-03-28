import React from 'react'

export default function Memories(props) {

    let mem = props.memory.fields

    let mapInput = props.memory.fields.memoryLink
    
    let splitMap = mapInput.split(`"`)
    let userLink = splitMap[1]

    console.log(splitMap)
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
            {/* {userLink} */}
            <br/>
            <iframe
    src={`${userLink}`}
    width="600"
    height="450"
    // style="border:0;"
    allowfullscreen=""
    loading="lazy"
  ></iframe>;
        </div>
        <br />
        </div>
        
    )
}
