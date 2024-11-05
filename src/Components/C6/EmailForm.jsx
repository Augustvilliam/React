import React, { useState } from 'react'

function EmailForm() {
    const [formData, setFormData] = useState({email:''})
    const [submitted, setSubmitted] = useState(false)
    const [errors, setErrors] = useState ({})
    
    const handleChange =(e) => {
      const { name, value} = e.target
      setFormData({...formData, [name]: value})
  
      if (value.trim() === '') {
        setErrors (prevErrors => ({...prevErrors, [name]: 'This field is requierd!'}))
      } else {
        setErrors (prevErrors => ({...prevErrors, [name]: ''}))
      }
  
    }
  
    const handleOk = () => {
      setSubmitted(false)
    }
  
    const handleSubmit = async (e)  => {
      e.preventDefault()
  
      const newErrors = {}
      Object.keys(formData).forEach(field => {
        if (formData[field].trim() === '') {
          newErrors[field] = 'This field is required!'
        }
      })
  
      if(Object.keys(newErrors).length > 0) {
        setErrors(newErrors)
        return
      } 
  
  
      const res = await fetch('https://win24-assignment.azurewebsites.net/api/forms/subscribe', {
        method: 'post',
        headers:{
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
        
      })
  
      if (res.ok) {
        setSubmitted(true)
        setFormData({email:''})
      } 
     
    }
  
  
    if (submitted) {
      return (
    <div >
        <form className="textbox-complet" onSubmit={handleSubmit}>
          <h1>Thank you for subscribing to our newletter</h1>
          <button className="btn-primary" onClick={handleOk} >OK</button>
          
        </form>
    </div>
  
      )
    }


  return (
    <div>
        <form onSubmit={handleSubmit} className="textbox">
            <input onChange={handleChange} type="email" className="form-input" id="email" name="email" placeholder="Your email"></input>
            <button aria-label="Subscribe for email newsletter!" className="btn-subscribe">Subscirbe</button>
        </form>
        <p className="error-text">{errors.email && errors.email}</p>
    </div>
  )
}

export default EmailForm