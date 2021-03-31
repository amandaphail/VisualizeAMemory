import React from 'react'
import step1 from "../UserGuideImages/streetView.png"
import step2 from "../UserGuideImages/dotsEdited.png"
import step3 from "../UserGuideImages/embedEdited.png"
//https://stackoverflow.com/questions/39999367/how-do-i-reference-a-local-image-in-react
import "./guide.css"

export default function Guide() {

    return (
        <div id="center">
           <h2>
               This is how you can share your own memories!
            </h2> 
            <h4 id="warning">
                Please be advised, you can only create a post on a computer, not on a mobile device
            </h4>
            <p>Step 1:</p>
            <p class ="instructions">
                Go to Google Maps and find the exact spot where your memory took place.  Take the person icon in the bottom right and place them to get the street view.
            </p>
            <img src={step1} alt = "step 1"/>
            <p>Step 2:</p>
            <img src={step2} alt = "step 2"/>
            <p>Step 3:</p>
            <img src={step3} alt = "step 3"/>
        </div>
    )
}
