// import React from 'react'

import { useState } from 'react'

const Form = () => {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [people, setPeople] = useState([])

  const handleClick = () => {
    people.map((p) => {
      return setPeople(...people, p)
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setEmail('')
    setEmail('')
  }
  return (
    <>
      <form>
        <label>
          Name:
          <input
            type="text"
            name={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <button className="btn" onSubmit={handleSubmit}>
          Add Person
        </button>
      </form>

      <div className="people" onClick={handleClick}>
        {people}
      </div>
    </>
  )
}

export default Form
