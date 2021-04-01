import React from 'react'
import step1 from "./UserGuideImages/streetViewInstructions.png"
import step2 from "./UserGuideImages/dotsInstructions.png"
import step3 from "./UserGuideImages/embedInstructions.png"
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
            <p className ="instructions">
                Go to Google Maps and find the exact spot where your memory took place.  Take the person icon in the bottom right and place them to get the street view.
            </p>
            <img src={step1} alt = "step 1"/>
            <p>Step 2:</p>
            <p className ="instructions">
                Once you have found the perfect spot and view of your memory, click the three dots in the upper left corner.  Then click the "Share or embed image" in the drop down.
            </p>
            <img src={step2} alt = "step 2"/>
            <p>Step 3:</p>
            <p className ="instructions">
                Make sure to click the Embed a map tab, and then click the "COPY HTML" link.  This it the link you will paste into the "Memory View Embed Link:" field in the Share a Memory form.
            </p>
            <img src={step3} alt = "step 3"/>
        </div>
    )
}
