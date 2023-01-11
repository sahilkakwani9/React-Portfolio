import React from 'react'
import './Navbar.css'
import { Link, useLocation } from "react-router-dom";



function Navbar() {
  const page = useLocation();
  return (
    <div className='nav-wrap'>
          <nav>
          <li aria-label={`${page.pathname == "/"? "page":undefined}`}><Link to="/">Home</Link></li>
            <li aria-label={`${page.pathname == "/resume"? "page":undefined}`}><Link to="/resume">Resume</Link></li>
            <li aria-label={`${page.pathname == "/projects"? "page":undefined}`}><Link to="/projects">Projects</Link></li>
            {/* <li><Link to="/contact" class="phone-none">Contact</Link></li> */}
          </nav>
    </div>
  )
}

export default Navbar