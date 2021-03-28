import React from 'react'

export default function Form() {
    return (
        <div>
            <form>
                <label htmlFor="name">
                    Name:  
                </label>
                <input type ="text" name = "name" id="name" required/>
                <label htmlFor="description">
                    Description: 
                </label>
                <input type ="text" name = "description" id="description" required/>
                <label htmlFor="imageURL">
                    Google Maps Embed Link:   
                </label>
                <input type ="text" name = "imageURL" id="imageURL" required/>
                <label htmlFor="location">
                    Location:  
                </label>
                <input type ="text" name = "location" id="location" required/>
                <label htmlFor="type">
                    Type:  
                </label>
                <input type ="text" name = "type" id="type" required/>

            </form>
        </div>
    )
}
