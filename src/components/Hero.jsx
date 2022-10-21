import React from 'react'
import BgVideo from './Bgvideo.mp4'

import './Hero.css'

const Hero = () => {
  return (
    <main>
        <nav>
            <ul>
                <li>
                  <a href="https://swap.sirenstreasure.tk" target="_blank" rel="noopener noreferrer">Exchange</a>
                </li>
                <li>
                  <a href="https://docs.sirenstreasure.tk" color='#fff' target="_blank" rel="noopener noreferrer">Documentation</a>
                </li>
                <li>
                  <a href="https://nft.sirenstreasure.tk" target="_blank" rel="noopener noreferrer">Mermaid Friends NFT's</a>
                </li>
            </ul>
        </nav>
        <div className="overlay"></div>
        <video src={BgVideo} autoPlay loop muted />

    </main>
  )
}

export default Hero
