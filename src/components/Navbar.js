import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";



function Navbar() {
  return (
    <div className='nav-wrap'>
          <nav>
          <li><Link to="/">Home</Link></li>
            <li><a href="/Resume-Sahil-Kakwani.pdf" download>Resume</a></li>
            <li><Link to="/projects">Projects</Link></li>
            {/* <li><Link to="/contact" class="phone-none">Contact</Link></li> */}
          </nav>
    </div>
  )
}

export default Navbar