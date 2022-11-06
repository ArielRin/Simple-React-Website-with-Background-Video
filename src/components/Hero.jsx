import React from 'react'
import BgVideo from './Bgvideo.mp4'

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
                  <a class="mylink" href="https://docs.sirenstreasure.tk" color='#fff' target="_blank" rel="noopener noreferrer">Docs</a>
                </li>
                <li>
                  <a class="mylink" href="https://nft.sirenstreasure.tk" target="_blank" rel="noopener noreferrer">NFT's</a>
                </li>
                <li>
                  <a class="mylink" href="https://github.com/ArielRin" target="_blank" rel="noopener noreferrer">Github</a>
                </li>
                <li>
                  <a class="mylink" href="https://twitter.com/SirenTrove_DEX" target="_blank" rel="noopener noreferrer">Twitter</a>
                </li>
            </ul>
        </nav>
        <div className="overlay"></div>
        <video src={BgVideo} autoPlay loop muted />
    </main>
  )
}

export default Hero
