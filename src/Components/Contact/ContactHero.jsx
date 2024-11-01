import React from 'react'
import ContactForm from '../GeneralComponents/ContactForm'

function ContactHero() {
  return (
    <div className="c1-contact">
        <div className="left-group">
            <div className="row-group">
                <img src="img/house.svg" alt=""/>
                <a href="">Homepage</a>
                <span><i className="fa-solid fa-angles-right"></i></span>
                <a href="">Contacts</a>
            </div>
            <h1>Contact us</h1>
            <div className="contact-group" id="contact-group-1">
                <img className="img-round" src="src/assets/img/envelope.svg" alt="Envelope image"/>
                <h1>Email us</h1>
                <p>Please feel free to drop us a line. We will<br/> respond as soon as possible.</p>
                <a href="">Leave a message<img src="src/assets/img/blue-arrow.svg" alt=""/></a>
            </div>
            <div id="contact-group-2" className="contact-group">
                <img className="img-round" src="src/assets/img/add-group.svg" alt="Envelope image"/>
                <h1>Careers</h1>
                <p>Sit ac ipsum leo lorem magna nunc mattis<br/> maecenas non vestibulum.</p>
                <a href="">Send an application <img src="src/assets/img/blue-arrow.svg" alt=""/></a>
            </div>
        </div>
        <ContactForm />
    </div>
  )
}

export default ContactHero