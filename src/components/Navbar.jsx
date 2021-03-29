import React from 'react'
import {Link} from "react-router-dom"

export default function Navbar() {
    return (
        <div id="navbar">
            
            <Link to ="/">Home </Link>
            <Link to="/new">Share a Memory </Link>
            <Link to="/guide">User Guide</Link>
        </div>
    )
}
