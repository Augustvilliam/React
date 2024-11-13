import React from 'react'

function InfoBox() {
  return (
    <>
        <div className="info-box" id="info-box1">
        <h1>Medical Center 1 </h1>
            <div className='Contact-grid'>
                <img src="src/assets/img/map-pin.svg" alt=""/>
                <p className='pixels05'>4517 Washington Ave. Manchester, Kentucky 39495</p>
            </div>

            <div className='Contact-grid'>
                <img src="src/assets/img/phone-icon.svg" alt=""/>
                <p className='pixels05' >(406) 555-0120</p>
            </div>
            <div className='Contact-grid'>
                <img src="src/assets/img/clock.svg" alt=""/>
                <span>mon-fri</span>
                <p className='pixels05'>9:00 am - 22:00 pm </p>
            </div>
            <div className='Contact-grid'>
                <span className='nodfix'>mon-fri</span>
                <p className='pixels20'>9:00 am – 20:00 am</p>
            </div>
        </div>
        <div className="info-box" id="info-box2">
            <h1>Medical Center 2 </h1>
            <div className='Contact-grid'>
                <img src="src/assets/img/map-pin.svg" alt=""/>
                <p className='pixels05'>2464 Royal Ln. Mesa,New Jersey 45463</p>
            </div>

            <div className='Contact-grid'>
                <img src="src/assets/img/phone-icon.svg" alt=""/>
                <p className='pixels05' >(406) 544-0123</p>
            </div>
            <div className='Contact-grid'>
                <img src="src/assets/img/clock.svg" alt=""/>
                <span>mon-fri</span>
                <p className='pixels05'>9:00 am - 22:00 pm </p>
            </div>
            <div className='Contact-grid'>
                <span className='nodfix'>mon-fri</span>
                <p className='pixels20'>9:00 am – 20:00 am</p>
            </div>
            
        </div>
    </>
    
  )
}

export default InfoBox