import React from 'react'

export default function ContactForm() {
  return (
    <div className="float-form">
        <form action="">
            <h1>Get online sonsulation</h1>
            <label htmlFor="input-name">Full name</label>
            <input className="input-name" id="input-name" type="text"/>
            <label htmlFor="input-email">Email</label>
            <input className="input-email" id="input-email" type="text"/>
            <label htmlFor="input-specialist">Specialist</label>
            <input className="input-specialist" id="input-specialist" type="text"/>
            <button className="btn-primary">Make an apointment</button>
        </form>
    </div>
  )
}
