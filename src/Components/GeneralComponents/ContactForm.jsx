import React, { useState } from 'react'

 function ContactForm() {
  
  const [formData, setFormData] = useState({fullName:'', email:'', specialist:''})
  const [submitted, setSubmitted] = useState(false)
  
  const handleChange =(e) => {
    const { name, value} = e.target
    setFormData({...formData, [name]: value})
  }

  const handleOk = () => {
    setSubmitted(false)
  }

  const handleSubmit = async (e)  => {
    e.preventDefault()
    const res = await fetch('https://win24-assignment.azurewebsites.net/api/forms/contact', {
      method: 'post',
      headers:{
      'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
      
    })

    if (res.ok) {
      setSubmitted(true)
      setFormData({fullName:'', email:'', specialist:''})
    } 
   
  }


  if (submitted) {
    return (
      <div className="float-form">
      <form onSubmit={handleSubmit}>
        <h1>Tack för din bokning!</h1>
        <p>Vi återkommer så snart vi kan</p>
        <button onClick={handleOk} className="btn-primary">OK</button>
      </form>
  </div>

    )
  }
 
 
 
  return (
    <div className="float-form">
        <form onSubmit={handleSubmit}>
            <h1>Get online Consulation</h1>
            
            <label htmlFor="input-name">Full name</label>
            <input name="fullName" value={formData.name} onChange={handleChange} className="input-name" id="input-name" type="text"/>
            
            <label htmlFor="input-email">Email</label>
            <input name="email" value={formData.email} onChange={handleChange}  className="input-email" id="input-email" type="email"/>
            
            <label htmlFor="input-specialist">Specialist</label>
            <input name="specialist" value={formData.specialist} onChange={handleChange}  className="input-specialist" id="input-specialist" type=""/>
           
            <button className="btn-primary">Make an apointment</button>
        </form>
    </div>
  )
}

export default ContactForm