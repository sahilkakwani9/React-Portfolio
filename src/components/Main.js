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
          <img src="sahil-headshot.JPG" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Main