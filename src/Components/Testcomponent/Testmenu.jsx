import React from 'react'

function Testmenu() {
  return (
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
                <a className="contact-link" href="/contact.html">Contact</a>
                <a className="btn-sign-in" href="#">
                    <img src="src/assets/img/Bg/signin.svg" alt="gubbe"></img>
                    sign in / up
                </a>
                <button aria-label="Open menu" className="btn-menu">
                    <i className="fa-solid fa-bars"></i>
                </button>
            </div>
             <div className="Phone-menu">
                    <button className='btn-round'>X</button>
                    <p>Please Choose which Page <br/> You Want To Visit</p>
                    <ul>
                        <li><a href="">Features</a></li>
                        <li><a href="">Contacts</a></li>
                    </ul>
                    <button className='btn-sign-in-menu'>Sign in</button>
                    
            </div>
        </div>
    </div>  )
}

export default Testmenu