import React from 'react'
import BgVideo from './Bgvideo.mp4'
import Logo from './logo.gif';

import './Hero.css'

const Hero = () => {
  return (
    <main>
        <nav>
            <ul>
                <li>
                  <a class="mylink" href="https://swap.sirenstreasure.tk" target="_blank" rel="noopener noreferrer">Exchange</a>
                </li>
                <li>
                  <a class="mylink" href="https://docs.sirenstreasure.tk" color='#fff' target="_blank" rel="noopener noreferrer">Documentation</a>
                </li>
                <li>
                  <a class="mylink" href="https://nft.sirenstreasure.tk" target="_blank" rel="noopener noreferrer">Mermaid Friends NFT's</a>
                </li>
            </ul>
        </nav>
        <div className="overlay"></div>
        <video src={BgVideo} autoPlay loop muted />
        <div className="content">
        <img style={{ width: 930, height: 225 }} src={Logo} alt="Sirens Treasure" />
        </div>
    </main>
  )
}

export default Hero
