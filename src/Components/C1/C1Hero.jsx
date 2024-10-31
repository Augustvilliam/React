import React from 'react'

function C1Hero() {
  return (
        <div className="c1b">
            <h1 className="header">Manage All Your Money in One App</h1>
            <p className="general-text">We offer you a new generation of the mobile banking. Save, spend & manage money in your pocket</p>
            <div className="storerek">
                <a className="btn-store lightmode-only" target="_blank" href="https://www.apple.com/se/app-store/">
                <img src="src/assets/img/Bg/appstore.svg" alt="Appstore"></img>
                </a>
                <a className="btn-store lightmode-only" target="_blank" href="https://play.google.com/store/games?device=windows">
                <img src="src/assets/img/Bg/playstore.svg" alt="Play butik"></img>
                </a>
                <a className="btn-store-dark darkmode-only-flex" target="_blank" href="https://www.apple.com/se/app-store/">
                <img src="src/assets/img/Bg/appstore-dark.svg" alt="Appstore"></img>
                </a>
                <a className="btn-store-dark darkmode-only-flex" target="_blank" href="https://play.google.com/store/games?device=windows">
                <img src="src/assets/img/Bg/playstore-dark.svg" alt="Play butik"></img>
                </a>
            </div>
            <div className="pilcont">
                <a  id="discover-more" className="btn-round box-sdw">
                <i className="fa-solid fa-chevron-up"></i>
                </a>
                <span className="s-text" htmlFor="discover-more">Discover more</span>
            </div>
            <img id="phone-tablet" className="phone2" src="src/assets/img/Bg/tabletphone.svg" alt="img of phone"></img>
            <img id="phone-desktop" className="phone1" src="src/assets/img/Bg/phone-desk.svg" alt="img of phone"></img>
        </div>
  )
}

export default C1Hero