import React from 'react'

function C2Contact() {
  return (
<div className="container contact-c2">
    <div className="map-img">
        <img src="src/assets/img/map.svg" alt=""/>
    </div>
    <div className="info-box" id="info-box1">
        <h1>Medical Center 1</h1>
        <p><img src="src/assets/img/map-pin.svg" alt=""/>4517 Washington Ave. Manchester, Kentucky 39495</p>
        <p><img src="src/assets/img/phone-icon.svg" alt=""/>(406) 555-0120</p>
        <div className="flex-me m-left-0">
            <p className="m-left-0"> <img src="src/assets/img/clock.svg" alt=""/>mon-fri:9:00 am - 22:00 pm
            </p>
        </div>
        <div className="flex-me">
            <p className="m-left-1">mon-fri:9:00 am - 22:00 pm</p>
        </div> 
    </div>
    <div className="info-box" id="info-box2">
        <h1>Medical Center 1</h1>
        <p><img src="src/assets/img/map-pin.svg" alt=""/>4517 Washington Ave. Manchester, Kentucky 39495</p>
        <p><img src="src/assets/img/phone-icon.svg" alt=""/>(406) 555-0120</p>
        <div className="flex-me">
            <p><img src="src/assets/img/clock.svg" alt=""/>mon-fri:9:00 am - 22:00 pm </p>
        </div>
        <div className="flex-me">
            <p>mon-fri:9:00 am - 22:00 pm</p>
        </div> 
        <div className="flex-me">
            <a className="media-btn" href="">
                <img src="src/assets/img/facebook.svg" alt=""/>
            </a>
            <a className="media-btn" href="">
                <img src="src/assets/img/shitter.svg" alt=""/>
            </a>
            <a className="media-btn" href="">
                <img src="src/assets/img/instagram.svg" alt=""/>
            </a>
            <a className="media-btn" href="">
                <img src="src/assets/img/youtube.svg" alt=""/>
            </a>
        </div>
    </div>
</div>
  )
}

export default C2Contact