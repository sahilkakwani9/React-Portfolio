import React, { useState } from 'react'
import './Projects.css'
import projects from "../Projects.json"
import { motion } from 'framer-motion';


function Projects() {
    const [filter, setFilter] = useState("all");
    const [active, setActive] = useState("all");
    
    return (
        <div className='project-container'>
            <div className="project-wrapper">
                <div className='window'>
                    <div className='tab'>
                        <button onClick={() => { setFilter("all"); setActive("all"); }} className={`toggle ${filter?'':'white'}`}>All</button>
                        <button className={`toggle ${filter?'white':''}`} onClick={() => { setFilter("collab"); setActive("collab"); }}>Colloborated</button>
                        <div className={`blue ${active}`}></div>
                    </div>
                </div>
                <motion.div className="card-wrap" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>


                    {projects && projects.map((e, id) => {
                        if (filter === "collab") {
                            if (e.colloborated === true) {
                                return (
                                    <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ transition: {
                                        type: "spring",
                                        bounce: 0.4,
                                        duration: 0.8
                                      }, opacity: 1}} id={id} key={id} className='card-box'>
                                    <div className='card-skeleton'>
                                        <img src={e.src} alt='disney' />
                                        <div className='content'>
                                            <h2>{e.name}</h2>
                                            <p>{e.Description}</p>
                                            <a href={e.href}><button>Watch Live</button></a>
                                        </div>
                                    </div>
                                </motion.div>
                                )
                            }

                        }
                        else {
                            return (
                                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} id={id} key={id} className='card-box'>
                                    <div className='card-skeleton'>
                                        <img src={e.src} alt='disney' />
                                        <div className='content'>
                                            <h2>{e.name}</h2>
                                            <p>{e.Description}</p>
                                            <a href={e.href}><button>Watch Live</button></a>
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        }
                    })}
                </motion.div>
            </div>
        </div>
    )
}

export default Projects