import React from 'react'
import Acordion from './AcordionList'

function C5() {
  return (
    <>
              <div className="c5 container">
            <h1>Any Questions? Check out the FAQs</h1>
            <p>Still have unanswered questions and need to get in touch?</p>
            <Acordion />
            
            <div className="container-cont-box">
                <button aria-label="Contact us via Phone!" className="contact-box"><img src="src/assets/img/Bg/phonebox1.svg" alt=""></img></button>
                <button aria-label="Contact us via Chat!" className="contact-box"><img src="src/assets/img/Bg/chatbox.svg" alt=""></img></button>
            </div>
            <a aria-label="Contact us!" className="btn-primary">Contact us now</a>
        </div>
    </>
  )
}

export default C5