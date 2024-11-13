import React from 'react'
import InfoBox from './infoBox'

function C2Contact() {
  return (
<div className="container contact-c2">
    <div className="map-img">
        <a target="_blank" href='https://www.google.se/maps/'>Need directions? Press here!</a>
        <img src="src/assets/img/map.svg" alt=""/>
    </div>
        <InfoBox />
        <div className="flex-me media-row">
            <a target="_blank" className="media-btn" href="https://www.facebook.com">
                <img src="src/assets/img/facebook.svg" alt=""/>
            </a>
            <a target="_blank" className="media-btn" href="https://www.x.com" >
                <img src="src/assets/img/shitter.svg" alt=""/>
            </a>
            <a target="_blank" className="media-btn" href="https://www.instagram.com" >
                <img src="src/assets/img/instagram.svg" alt=""/>
            </a>
            <a target="_blank" className="media-btn" href="https://www.youtube.com" >
                <img src="src/assets/img/youtube.svg" alt=""/>
            </a>
        </div>
</div>
  )
}

export default C2Contact