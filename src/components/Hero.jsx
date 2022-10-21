import React from 'react'
import BgVideo from './Bgvideo.mp4'

import './Hero.css'

const Hero = () => {
  return (
    <main>
        <nav>
            <ul>
                <li>
                  <ul href="https://swap.sirenstreasure.tk" target="_blank" rel="noopener noreferrer">Exchange</ul>
                </li>
                <li>
                  <ul href="https://docs.sirenstreasure.tk" color='#fff' target="_blank" rel="noopener noreferrer">Documentation</ul>
                </li>
                <li>
                  <ul href="https://nft.sirenstreasure.tk" target="_blank" rel="noopener noreferrer">Mermaid Friends NFT's</ul>
                </li>
            </ul>
        </nav>
        <nav src="/images/logo.gif" alt="LP Treasures" width={850} height={230} />
        <div className="overlay"></div>
        <video src={BgVideo} autoPlay loop muted />

    </main>
  )
}

export default Hero
