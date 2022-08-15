import React from 'react'
import BgVideo from './Bgvideo.mp4'

import './Hero.css'

const Hero = () => {
  return (
    <main>
        <nav>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>
        </nav>
        <div className="overlay"></div>
        <video src={BgVideo} autoPlay loop muted />
        <div className="content">
            <h1>Hello, I am Dela Ricch</h1>
            <p>A Junior Front End Web Developer based in Tema, Ghana. I am a Computer Science Student at the moment. I'm quietly confident, naturally curious, and perpetually working on improving my skills.</p>
        </div>
       <div className="btn">
        <button className='contact'>Let' Talk</button>
            <button className='resume'>Download Resume</button>
       </div>
    </main>
  )
}

export default Hero