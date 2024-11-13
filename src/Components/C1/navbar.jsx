import React from 'react'
import SignInBtn from '../buttons/SignInBtn'

function navbar() {
  return (
    <div>        
        <nav className="feat">
            <a href="#">Features</a>
        </nav>
        <a className="contact-link" href="/contact.html">Contact</a>
        <Darkmode />
        <SignInBtn />
        <button aria-label="Open menu" className="btn-menu">
            <i className="fa-solid fa-bars"></i>
        </button>
    </div>
  )
}

export default navbar