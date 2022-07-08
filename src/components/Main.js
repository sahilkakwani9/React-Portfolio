import React from 'react'
import './Main.css'

function Main() {
  return (
    <div className='main-container'>
      <div className="bio">
        <div className='data'>
          <h1 className='author'>Sahil Kakwani</h1>
          <div className="subtitle">Deep Thinker and Web Developer</div>
        </div>
        <div className='headshot-img'>
          <img src="sahil-headshot-c.JPG" alt="" />
          <div className='img-txt'>I am a Front-end web developer based out of gujarat, India. A keen learner and believer of consistent growth. I aspire to work at small and growing startups where i can employ my skills.</div>
        </div>
      </div>
    </div>
  )
}

export default Main