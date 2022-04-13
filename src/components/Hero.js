import React, { useState } from 'react'
import './Hero.css'



function Hero() {
  const [wave, setwave] = useState({
    transform: "none",
    width: "100%",
    // display: "none",
  })
  setInterval(function(){
    if (wave.transform === "none"){
      setwave({
        transform: "rotate(-5.42178deg)",
      })
      setTimeout(function(){
        setwave({
          transform: "rotate(5.42178deg)",
        })
    },1000);
    }
  },2000)
  
  return (
    <>
      <div className='hero-container'>
        <div className="bg">
          <img src="/hello_bg(opace).png" alt="bg-img" />
        </div>
        <div className='content-wrapper'>
          <div className='content'>
            <h3 className='s-head'>I'm Sahil <span className='wave' style={{transform: "rotate(4.42178deg)",}}>👋</span>!</h3>
            <h1 className='m-head' style={wave}>A Freelance <br /> Web Developer.</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero