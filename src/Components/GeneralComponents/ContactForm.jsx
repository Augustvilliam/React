import React, { useState } from 'react'

 function ContactForm() {
  
  const [formData, setFormData] = useState({fullName:'', email:'', specialist:''})
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState ({})
  
  const validateField = (name, value) => {
    let error = ''
    if (name === 'name' && !/^[A-Za-z]+(?:[ -][A-Za-z]+)*$/.test(value)){
      error = "You must ender a valid name (eg. user@example.com)"
    }

    setErrors(prevErrors=> ({...prevErrors, [name]: error}))
  }

  const validateForm = () => {
    const newErrors = {}

    if (!/^^[A-Za-z]+(?:[ -][A-Za-z]+)*$/.test(formData.fullName)) {
      newErrors.fullName = "You must enter a valid name"
    }

    if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(formData.email)) {
      newErrors.email = "You must ender a valid email (eg. user@example.com)"
    }


    setErrors(newErrors)
    return Object.keys(newErrors).length === 0;
  }
  
  const handleChange =(e) => {
    const { name, value} = e.target
    setFormData({...formData, [name]: value})

    validateField(name, value)

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
    if (validateForm()) {
      console.log('form valid')
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
        <form noValidate onSubmit={handleSubmit}>
            <h1>Get online Consulation</h1>
            
            <div className="form-container">
              <label htmlFor="input-name">Full name</label>
              <input name="fullName" value={formData.name} onChange={handleChange} className="input-name" id="input-name" type="text"/>
              <p className="error-text">{errors.fullName && errors.fullName}</p>
            </div>

            <div className="form-container">
              
              <label htmlFor="input-email">Email</label>
              <input name="email" value={formData.email} onChange={handleChange}  className="input-email" id="input-email" type="email"/>
              <p className="error-text">{errors.email && errors.email}</p>
            </div>


            <div className="form-container">
              <label htmlFor="input-specialist">Specialist</label>
              <input name="specialist" value={formData.specialist} onChange={handleChange}  className="input-specialist" id="input-specialist" type=""/>
              <p className="error-text">{errors.specialist && errors.specialist}</p>
            </div>

          
           
            <button className="btn-primary">Make an apointment</button>
        </form>
    </div>
  )
}

export default ContactForm