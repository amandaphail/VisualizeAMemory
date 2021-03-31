import React from 'react'
import {Link} from "react-router-dom"
import "./navbar.css";

export default function Navbar() {

    

    return (
        <div id="navbar"> 
            <div id="title">
                <h1>Experience A Memory</h1>
            </div>
            <div id="links">
            
                <Link to ="/">Home </Link>
                
                <Link to="/new">Share a Memory </Link>
                
                <Link to="/guide">User Guide</Link>
            
            </div>
        </div>
    )
}
