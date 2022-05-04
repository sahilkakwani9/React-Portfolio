import React from 'react'
import { motion } from "framer-motion"
import './About.css'

function About() {
  var motionList = [];
  var ll = [30,-30,30,-30];
  for (var i = 0; i < 101; i++){
    if (i % 2 === 0 ){
      motionList[i] = 30
    }
    else{
      motionList[i] = -30
    }
  }

  return (
    <>
    <div className='about-container'>
      <div className="intro">
        <h1>Sahil?</h1>
        <div className='intro-content'>
          <div className='tree'>
            <div className="tree-left">
              <img src="/tree.webp" alt="left-tree" />
            </div>
            <div className="tree-right">
              <img src="/tree2.webp" alt="right-tree" />
            </div>
          </div>
          <div className="intro-right">
          <p>I am a Front-end web developer based out of gujarat, India. A keen learner and believer of consistent growth. I aspire to work at small and growing startups where i can employ my skills and experience. other than programming i love binging on podcasts and reading books.</p>
          </div>
          <div className="intro-left">
          <h2 className='gradient'>Dream -> </h2>
          <h2 className='gradient'>Brainstorm -> </h2>
          <h2 className='gradient'>Build</h2>
          </div>
          
        </div>
      </div>
    </div>
      {/* <div className="about-container">
        <div className="intro">
          <h1>intro.</h1>
          <div className="intro-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing tristique risus nec feugiat in fermentum posuere urna nec. Nisi vitae suscipit tellus mauris a. Orci nulla pellentesque dignissim enim. Ipsum dolor sit amet consectetur. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna. Consectetur adipiscing elit ut aliquam purus sit amet luctus. Tortor id aliquet lectus proin nibh nisl. Iaculis urna id volutpat lacus laoreet non curabitur.</p>
          </div>

        </div>
        <div className="skills">
          <h1>skills.</h1>
          <div className="skills-content">
            <div className="skill">
              <img src="/html5.svg" alt="html5" />
            </div>
            <div className="skill">
              <img src="/css3.svg" alt="html5" />
            </div>
            <div className="skill">
              <img src="/css3.svg" alt="html5" />
            </div>
            <div className="skill">
              <img src="/javascript.svg" alt="html5" />
            </div>
            <div className="skill">
              <img src="/nodejs.svg" alt="html5" />
            </div>
          </div>
        </div>
        <motion.div animate={{ y: [-10,10,-10]}} transition={{ ease: "easeOut", duration: 1, repeat: Infinity }} className='up'>
          <svg stroke="currentColor" fill="#551a8b" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"></path></svg>
          <div className='txt-wrap'>
            <p>Skills</p>
          </div>
        </motion.div>
      </div> */}
    </>
  )
}

export default About