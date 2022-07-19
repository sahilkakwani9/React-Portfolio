import React from 'react'
import './Projects.css'
import projects from "../Projects.json"

function Projects() {
  return (
    <div className='project-container'>
        <div className="project-wrapper">
            <h1>Recent work</h1>
            <div className="card-wrap">
                {projects && projects.map((e,i)=>{
                    return <div className={e.class}>
                    <img src={e.src} alt="" />
                    <div className="card-content">
                        <h3 className="card-title">{e.name}</h3>
                        <span className='card-subtitle'>Preview</span>
                        <p className='card-description'>{e.Description}</p>
                    </div>
                </div>
                })}
            </div>
        </div>
    </div>
  )
}

export default Projects