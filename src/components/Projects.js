import React from 'react'
import './Projects.css'
import projects from "../Projects.json"

function Projects() {
  return (
    <div className='project-container'>
        <div className="project-wrapper">
            <h1>Work</h1>
            <div className="card-wrap">
                {projects && projects.map((e,i)=>{
                    return <div className={e.class}>
                        <img src={e.src} alt="project" />
                        <div className="body">
                            <h3 className="project-name">{e.name}</h3>
                            <p>{e.Description}</p>
                            <p className='won'>{e.won}</p>
                            {/* <p>More</p> */}
                            <div className="btn-wrap">
                            <button>Watch Live</button>
                            </div>
                        </div>
                    {/* <img src={e.src} alt="" />
                    <div className="card-content">
                        <h3 className="card-title">{e.name}</h3>
                        <span className='card-subtitle'>Preview</span>
                        <p className='card-description'>{e.Description}</p>
                    </div> */}
                </div>
                })}
            </div>
        </div>
    </div>
  )
}

export default Projects