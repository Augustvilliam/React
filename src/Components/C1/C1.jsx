import React from 'react'
import Darkmode from './darkmode'

const C1 = () => {
  return (
    <>
    <div>
         <div className="c1 bg-gradient">
            <div className="container">
                <div className="c1a"> 
                    <a className="logo" href="index.html">
                        <img src="src/assets/img/silicon.svg" alt="sili logo"></img>
                        <p>Silicon</p>
                        </a> 
                    <nav className="feat">
                        <a href="#">Features</a>
                    </nav>
                    <a className="contact-link" href="contact.html">Contact</a>
                    <Darkmode />
                    <a className="btn-sign-in" href="#">
                        <img src="src/assets/img/Bg/signin.svg" alt="gubbe"></img>
                        sign in / up
                    </a>
                    <button aria-label="Open menu" className="btn-menu">
                        <i className="fa-solid fa-bars"></i>
                    </button>
                    </div>
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
            </div>
        </div>
    </div>
    </>
  )
}

export default C1