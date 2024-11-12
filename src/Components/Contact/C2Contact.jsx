import React from 'react'

function C2Contact() {
  return (
<div className="container contact-c2">
    <div className="map-img">
        <a target="_blank" href='https://www.google.se/maps/'>Need directions? Press here!</a>
        <img src="src/assets/img/map.svg" alt=""/>
    </div>
    <div className="info-box" id="info-box1">
        <h1>Medical Center 1</h1>
        <p className='pixels05'><img src="src/assets/img/map-pin.svg" alt=""/>4517 Washington Ave. Manchester,Kentucky 39495</p>
        <p className='pixels05'><img src="src/assets/img/phone-icon.svg" alt=""/>(406) 555-0120</p>
        <p className='pixels05'> <img src="src/assets/img/clock.svg" alt=""/>mon-fri:9:00 am - 22:00 pm </p>
        <p className='pixels20'>mon-fri:9:00 am – 20:00 am</p>
    </div>
    <div className="info-box" id="info-box2">
        <h1>Medical Center 2 </h1>
        <p className='pixels05'><img src="src/assets/img/map-pin.svg" alt=""/>2464 Royal Ln. Mesa,New Jersey 45463</p>
        <p className='pixels05' ><img src="src/assets/img/phone-icon.svg" alt=""/>(406) 544-0123</p>
        <p className='pixels05'><img src="src/assets/img/clock.svg" alt=""/>mon-fri:9:00 am - 22:00 pm </p>
        <p className='pixels20'>mon-fri:9:00 am – 20:00 am</p>
    </div>
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