import React from 'react'
import './Projects.css'

function Projects() {
  return (
    <div className='project-container'>
        <div className="project-wrapper">
            <h1>Recent work</h1>
            <div className="card-wrap">
                <div className="card">
                    <div className="card-content">
                        <h3 className="card-title">Disney+</h3>
                        <span className='card-subtitle'>Preview</span>
                        <p className='card-description'>Made a Disney+ Clone Using React,Styled Components and Firebase</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects