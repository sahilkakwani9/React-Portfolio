import React from 'react'
import './Main.css'
import { TwitterTweetEmbed } from 'react-twitter-embed';
// import TweetEmbed from 'react-tweet-embed'

function Main() {
  return (
    <div className="main-container-wrapper">
      <div className='main-container'>
      <div className='text-container'>
      <div className="bio">
        <div className='data'>
          <h1 className='author'>Sahil Kakwani</h1>
          <div className="subtitle">Deep Thinker and Web Developer</div>
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
            <img className='express' src="./express.png" alt="express" />
          </div>
        </div>
      </div>
        </div>
        
      </div> 
      <div className='headshot-img'>
          <img src="./sahil-headshot-c.jpg" alt="" />
          <div className='img-txt'>I am a Front-end web developer based out of gujarat, India. A keen learner and believer of consistent growth. I aspire to work at small and growing startups where i can employ my skills.</div>
        </div>  
    </div>
    <div className='tweets-container'>
      <h2>Tweets</h2>
      <div className="tweets">
      <TwitterTweetEmbed className='tweet' tweetId={'1545784495798112256'}/>
      <TwitterTweetEmbed className='tweet' tweetId={'1545468748550766595'}/>
      <div className="tweet-disable">
      <TwitterTweetEmbed className='tweet-disable' options={{height: 200}} tweetId={'1542973771723710464'}/>
      </div>
      <div>
      <TwitterTweetEmbed className='tweet' tweetId={'1539522972116914177'}/>
      <div className="tweet-disable">
      <TwitterTweetEmbed className='tweet-disable' tweetId={'1536959990103040001'}/>
      </div>
      </div>
      </div>
    </div>
    <div className='footer'>
      <div className='knowmore'>
        <h2>Want to know more?</h2>
        <div className='then'>
          <h2>Then</h2>
          <a href="mailto:sahkakwani@gmail.com" class="rainbow-button" alt="Button"></a>
        </div>
        
          {/* <button><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" class="icon "><path d="m12 13.595c-.715 0-1.43-.153-2.095-.46l-9.905-4.572v11.437c0 1.105.895 2 2 2h20c1.105 0 2-.895 2-2v-11.437l-9.905 4.572c-.665.307-1.38.46-2.095.46zm10-11.595h-20c-1.105 0-2 .895-2 2v2.36l10.743 4.958c.799.368 1.716.369 2.515 0l10.742-4.958v-2.36c0-1.105-.895-2-2-2z"></path></svg><p>Mail me</p></button> */}
        
      </div>
    </div>
    </div>
    
  )
}

export default Main