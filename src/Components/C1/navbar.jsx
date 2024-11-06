import React from 'react'

function navbar() {
  return (
    <div>        
        <nav className="feat">
            <a href="#">Features</a>
        </nav>
        <a className="contact-link" href="/contact.html">Contact</a>
        <Darkmode />
        <a className="btn-sign-in" href="#">
            <img src="src/assets/img/Bg/signin.svg" alt="gubbe"></img>
            sign in / up
        </a>
        <button aria-label="Open menu" className="btn-menu">
            <i className="fa-solid fa-bars"></i>
        </button>
    </div>
  )
}

export default navbar