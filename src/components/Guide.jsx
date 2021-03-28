import React from 'react'
import step1 from "../UserGuideImages/streetView.png"
import step2 from "../UserGuideImages/dotsEdited.png"
import step3 from "../UserGuideImages/embedEdited.png"
//https://stackoverflow.com/questions/39999367/how-do-i-reference-a-local-image-in-react

export default function Guide() {

    return (
        <div>
           <h1>
               This is how you can share your own memories!
               </h1> 
               <h4 id="warning">Please be advised, you can only create a post on a computer, not on a mobile device</h4>
            <p>Step 1:</p>
            <img src={step1}/>
            <p>Step 2:</p>
            <img src={step2}/>
            <p>Step 3:</p>
            <img src={step3}/>
        </div>
    )
}
