// import React from 'react'

import { useState } from 'react'

const Form = () => {
  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    number: '',
    email: '',
    password: '',
  })
  const handleClick = (e) => {
      setForm( prev => ({
          ...prev,
          e.target.name = e.target.value
      }))
  }
  return (
    <>
      <h1 className="contact">Contact Me</h1>
      <div className="form">
        <input
          type="text"
          onClick={handleClick}
          name="firstname"
          placeholder="firstnamme"
        />
        <input
          type="text"
          onClick={handleClick}
          name="lastname"
          placeholder="lastnamme"
        />
        <input
          type="email"
          onClick={handleClick}
          name="email"
          placeholder="john@doe"
        />
        <input
          type="number"
          onClick={handleClick}
          name="phonenumber"
          placeholder="Phone Number"
        />
        <input
          type="password"
          onClick={handleClick}
          name="password"
          placeholder="password"
        />
        <button className="btn" onClick={handleSubmit}>
          submit
        </button>
      </div>
    </>
  )
}

export default Form
