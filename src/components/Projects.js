import React, {useState} from 'react'
import './Projects.css'
import projects from "../Projects.json"
import { useEffect } from 'react';

function Projects() {
    const [filter, setFilter] = useState("all");
    const [allActive, setAllActive] = useState("blue");
    const [collabActive, setCollabActive] = useState("white")
  return (
    <div className='project-container'>
        <div className="project-wrapper">
            {/* <h1>Work</h1> */}
            <div className='window'>
                <button  onClick={()=>{setFilter("all");setAllActive("blue");setCollabActive("white")}} className={`all toggle ${allActive}`}>All</button>
                {/* <button  onClick={() => { alert("hello world")}} >Sahil</button> */}
                <button className={`collab toggle ${collabActive}`} onClick={()=>{setFilter("collab");setAllActive("white");setCollabActive("blue")}}>Colloborated</button>
            </div>
            <div className="card-wrap">
                {projects && projects.map((e,i)=>{
                    if ( filter === "collab" ){
                        if (e.colloborated === true) {
                            return (
                                <div className={e.class}>
                                    <img src={e.src} alt="project" />
                                    <div className="body">
                                        <h3 className="project-name">{e.name}</h3>
                                        <p>{e.Description}</p>
                                        <p className='won'>{e.won}</p>
                                        <div className="btn-wrap">
                                            <button><a className='btn-txt' href={e.href}>Watch Live</a></button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        
                    }
                    else {
                        return (
                            <div className={e.class}>
                                <img src={e.src} alt="project" />
                                <div className="body">
                                    <h3 className="project-name">{e.name}</h3>
                                    <p>{e.Description}</p>
                                    <p className='won'>{e.won}</p>
                                    <div className="btn-wrap">
                                        <button><a className='btn-txt' href={e.href}>Watch Live</a></button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    </div>
  )
}

export default Projects