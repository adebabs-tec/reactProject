// import React from 'react'

import { useState } from 'react'

const Form = () => {
  const [person, setPerson] = useState({
    firstName: '',
    email: '',
    age: '',
  })
  const [people, setPeople] = useState()

  const handleChange = () => {
    setPerson((person) => {
        [...person],
        [e.target.name] : e.target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
   if(person.firstName && person.email && person.age) {
     const newPerson = {...person, id: new Date().getDate().toString}
     setPeople({...people, newPerson})
   }
  }

  return (
    <>
      <form onClick={handleSubmit}>
        <label htmlFor="firstName">
          <input
            type="text"
            name={name}
            value={firstName}
            onChange={handleChange}
          />
          <input
            type="email"
            name={email}
            value={email}
            onChange={handleChange}
          />
          <input type="text" name={age} value={age} onChange={handleChange} />
          <button type="submit">Add Person</button>
        </label>
      </form>
      <div>
        {person.map((p) => {
          return (
            <div>
              <p>{person.firstName}</p>
              <p>{person.email}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Form
