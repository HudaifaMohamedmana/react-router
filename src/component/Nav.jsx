import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <>
    <div className="navbar">    
    <Link to="/Home">Home</Link>
        
    <Link to="/profile">
        Profile
    </Link>

    <Link to="/about">
        About
    </Link>

    <Link to="/contact">
        Contact
    </Link>

    <Link to="/settings">
        Settings
    </Link>

    </div>


    </>
)
}

export default Nav