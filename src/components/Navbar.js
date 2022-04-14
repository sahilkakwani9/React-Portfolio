import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <div className='nav-wrap'>
          <nav>
            <li><a><Link to="/">Home</Link></a></li>
            <li><a href=""><Link to="/projects">Projects</Link></a></li>
            <li><a href=""><Link to="/about">About</Link></a></li>
            <li><a href=""><Link to="/contact">Contact</Link></a></li>
          </nav>
    </div>
  )
}

export default Navbar