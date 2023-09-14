// import React from 'react'

import { useState } from 'react'

const Form = () => {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [people, setPeople] = useState([])

  // const handleClick = () => {}

  const handleSubmit = (e) => {
    e.preventDefault()
    const person = { id: new Date().getDate().toString(), firstName, email }
    if (firstName && email) {
      setPeople([...people, person])
    } else {
      console.log('empty values')
    }

    setEmail('')
    setEmail('')
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstname">
          Name:
          <input
            type="text"
            name="name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <button type="submit" className="btn">
          Add Person
        </button>
      </form>

      <div className="people">
        {people.map((person) => {
          const { id, firstName, email } = person
          return (
            <div key={id}>
              <h1>{firstName}</h1>
              <span>{email}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Form
