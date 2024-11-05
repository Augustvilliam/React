import React from 'react'
import EmailForm from './EmailForm'

function C6() {
  return (
    <>
            <div className="c6 container">
            <div className="subkort">
            <img className="notispic" src="src/assets/img/Bg/notisbtn.svg" alt="bild på kolcka"></img>
            <p className="label-phone">Subscribe to our <br></br> newsletter</p>
            <p className="label-desk h4">Subscribe to our newsletter to stay informed about latest updates</p>
            </div>
            <div className="textbox-sub">
            <EmailForm />
            </div>
        </div>
    </>
  )
}

export default C6