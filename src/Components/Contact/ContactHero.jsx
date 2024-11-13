import React, { useState } from 'react'
import ContactForm from '../GeneralComponents/ContactForm'
import { NavLink } from 'react-router-dom'


const ContactHero= () => {
    const [isToggled, setIsToggled] = useState(false);
    const handleToggle = () => {
        setIsToggled(prev => !prev)
    }
    
  return (
    <div className="c1-contact">
        <ContactForm isToggled={isToggled} onClose={handleToggle}/>
        <div className="left-group">
            <div className="row-group">
                <img src="src/assets/img/house.svg" alt=""/>
                <NavLink to="/">Homepage</NavLink>
                    <span><i className="fa-solid fa-angles-right"></i></span>
                <NavLink to="/Contact">Contacts</NavLink>
            </div>
            <h1>Contact us</h1>
            <div className={`contact-group ${isToggled ? 'toggled' : ''}`}id="contact-group-1">
                <img className="img-round" src="src/assets/img/envelope.svg" alt="Envelope image"/>
                <h1>Email us</h1>
                <p>Please feel free to drop us a line. We will<br/> respond as soon as possible.</p>
                <a onClick={handleToggle} className='flex-me' href="#">
                    Leave a message
                    <img className='right-arrow' src="src/assets/img/blue-arrow.svg" alt=""/>
                </a>
            </div>
            <div className={`contact-group ${isToggled ? 'toggled' : ''}`}id="contact-group-2">                
                <img className="img-round" src="src/assets/img/add-group.svg" alt="Envelope image"/>
                <h1>Careers</h1>
                <p>Sit ac ipsum leo lorem magna nunc mattis<br/> maecenas non vestibulum.</p>
                <a onClick={handleToggle} className='flex-me' href="#">Send an application 
                    <img className='right-arrow' src="src/assets/img/blue-arrow.svg" alt=""/>
                </a>
            </div>
        </div>
        
    </div>
  )
}
//Toggle formaterat med chatGPT

export default ContactHero