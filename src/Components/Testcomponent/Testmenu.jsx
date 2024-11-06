import React, { useState} from 'react'
import Darkmode from '../C1/darkmode';
import { Link, NavLink } from 'react-router-dom';
function Testmenu() {
    const [selected, setSelected] = useState(false)
    const toggle = () => {
        setSelected(prevSelected => !prevSelected);
    }
  return (


<div className="c1a"> 
    <Link className="logo" to='/'>
        <img src="src/assets/img/silicon.svg" alt="sili logo"></img>
        <p>Silicon</p>
    </Link> 
    <nav className="feat">
        <a href="#">Features</a>
    </nav>
    <NavLink className="contact-link" to='/contact'>Contact</NavLink>
    <Darkmode />
    <a className="btn-sign-in" href="#">
        <img src="src/assets/img/Bg/signin.svg" alt="gubbe"></img>
        sign in / up
    </a>
    
    <button onClick={toggle} aria-label="Open menu" className="btn-menu">
        <i className="fa-solid fa-bars"></i>
    </button>
    <div className={selected ? "Phone-menu-open" : "Phone-menu"}>
        <button className='btn-round' onClick={toggle}>X</button>
        <p>Please Choose which Page <br/> You Want To Visit</p>
        <ul>
            <li><NavLink to="/">Features</NavLink></li>
            <li><NavLink to="/Contact">Contacts</NavLink></li>
        </ul>
        <button className='btn-sign-in-menu'>Sign in</button>
    </div>
</div>
      
    )

}

export default Testmenu