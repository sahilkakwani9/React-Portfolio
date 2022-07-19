import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";



function Navbar() {
  return (
    <div className='nav-wrap'>
          <nav>
            <li><a href="/Resume-Sahil-Kakwani.pdf" download>Resume</a></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><a href="https://www.linkedin.com/in/sahil-kakwani/">LinkedIn</a></li>
            {/* <li><Link to="/contact" class="phone-none">Contact</Link></li> */}
          </nav>
    </div>
  )
}

export default Navbar