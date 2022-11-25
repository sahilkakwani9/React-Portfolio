import React, { useState } from 'react'
import './Projects.css'
import projects from "../Projects.json"
import { useEffect } from 'react';

function Projects() {
    const [filter, setFilter] = useState(true);
    const [active, setActive] = useState("all");
    return (
        <div className='project-container'>
            <div className="project-wrapper">
                <div className='window'>
                    <div className='tab'>
                        <button onClick={() => { setFilter(false); setActive("all"); }} className={`toggle ${filter?'':'white'}`}>All</button>
                        <button className={`toggle ${filter?'white':''}`} onClick={() => { setFilter(true); setActive("collab"); }}>Colloborated</button>
                        <div className={`blue ${active}`}></div>
                    </div>
                </div>
                <div className="card-wrap">


                    {projects && projects.map((e, i) => {
                        if (filter === "collab") {
                            if (e.colloborated === true) {
                                return (
                                    // <div className={e.class}>
                                    //     <img src={e.src} alt="project" />
                                    //     <div className="body">
                                    //         <h3 className="project-name">{e.name}</h3>
                                    //         <p>{e.Description}</p>
                                    //         <p className='won'>{e.won}</p>
                                    //         <div className="btn-wrap">
                                    //             <button><a className='btn-txt' href={e.href}>Watch Live</a></button>
                                    //         </div>
                                    //     </div>
                                    // </div>
                                    <div className='card-box'>
                                    <div className='card-skeleton'>
                                        <img src={e.src} alt='disney' />
                                        <div className='content'>
                                            <h2>{e.name}</h2>
                                            <p>{e.Description}</p>
                                            <a href={e.href}><button>Watch Live</button></a>
                                        </div>
                                    </div>
                                </div>
                                )
                            }

                        }
                        else {
                            return (
                                <div className='card-box'>
                                    <div className='card-skeleton'>
                                        <img src={e.src} alt='disney' />
                                        <div className='content'>
                                            <h2>{e.name}</h2>
                                            <p>{e.Description}</p>
                                            <a href={e.href}><button>Watch Live</button></a>
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