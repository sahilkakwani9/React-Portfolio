import React from 'react'
import './Main.css'
import { TwitterTweetEmbed } from 'react-twitter-embed';
import Lottie from "react-lottie";
import animationData from "../lottie/loader.json";
import { useState } from 'react';
// import TweetEmbed from 'react-tweet-embed'

function Main() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    margin: 0,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "slice",
    },
  };
  const [load, setLoad] = useState(true);
  const timestamp = new Date();
  const year = timestamp.getFullYear();
  return (
    <div className="main-container-wrapper">
      <div className='main-container'>
      <div className='text-container'>
      <div className="bio">
        <div className='data'>
          <h1 className='author'>Sahil Kakwani</h1>
          <div className="subtitle"><span className='wavy'>Passionate</span> Learner, <span className='wavy'>Deep</span> Thinker and <span className='wavy'>Web</span> Developer</div>
        </div>
        <div className="skills-container">
        <h3>Skills</h3> 
        <div className='skills-slider'>
          <div className='list'>
            <img src="./html5.svg" alt="html" />
            {/* <p>HTML</p> */}
          </div>
          <div className='list'>
            <img src="./css3.svg" alt="css" />
          </div>
          <div className='list'>
            <img src="./javascript.svg" alt="js" />
          </div>
          <div className='list'>
            <img src="./nodejs.svg" alt="node" />
          </div>
          <div className='list'>
            <img src="./react.svg" alt="react" />
          </div>
          <div className='list'>
            <img src="./python.svg" alt="python" />
          </div>
          <div className='list'>
            <img src="./git.svg" alt="git" />
          </div>
          <div className='list'>
            <img className='express' src="./Next.png" alt="express" />
          </div>
          <div className='list'>
            <img className='express' src="./express.png" alt="express" />
          </div>
          <div className='list'>
            <img className='express' src="./mongo.svg" alt="express" />
          </div>
          <div className='list'>
            <img className='express' src="./tailwind.svg" alt="express" />
          </div>
        </div>
      </div>
        </div>
        
      </div> 
      <div className='headshot-img'>
          <img src="./headshot.png" alt="" />
          <div className='img-txt'>I am a Front-end web developer based out of gujarat, India. A keen learner and believer of consistent growth. I aspire to work at small and growing startups where i can employ my skills. Currently, I am Exploring Blockchain Space and Looking forward to be a web3 developer</div>
        </div>  
    </div>
    <div className='tweets-container'>
      <h2>Tweets</h2>
      {
        load?(<div className="lottie">
        <Lottie options={defaultOptions} height={400} width={400} margin={0} className='lottie' />
        {/* <img src="./loader.gif" alt="do" /> */}
      </div>):(null)
      }
      <div className="tweets">
        <div className="tweet">
        <TwitterTweetEmbed className='tweet' tweetId={'1574713505172840450'} onLoad={()=>setLoad(false)} />
        </div>
      
      <TwitterTweetEmbed className='tweet' tweetId={'1545468748550766595'}/>
      <div className="tweet-disable">
      <TwitterTweetEmbed className='tweet-disable' options={{height: 200}} tweetId={'1574396695164907522'}/>
      </div>
      <div>
      <TwitterTweetEmbed className='tweet' tweetId={'1583081977846312960'}/>
      {/* <div className="tweet-disable">
      <TwitterTweetEmbed className='tweet-disable' tweetId={'1536959990103040001'}/>
      </div> */}
      </div>
      </div>
    </div>
    <div className='footer'>
      <div className='knowmore'>
        <h2>Want to know more?</h2>
        <div className='then'>
          <h2>Then</h2>
          <a href="mailto:sahkakwani@gmail.com" className="rainbow-button" alt="Button"></a>
        </div>
        
      </div>
      <div className='end'>
        <div className='line'>
          <hr />
          <a href="https://github.com/sahilkakwani9"><svg stroke="currentColor" fill="#3B82F6" strokeWidth="0" viewBox="0 0 1024 1024" height="60px" width="60px" xmlns="http://www.w3.org/2000/svg"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path></svg></a>
          <hr />
        </div>
        <div className='text'>
          <p>&copy; {year},&nbsp;<a href="https://github.com/sahilkakwani9">Sahil Kakwani</a></p>
        </div>
      </div>
    </div>
    </div>
    
  )
}

export default Main