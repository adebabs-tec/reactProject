// import React from 'react'

import { useState } from 'react'

const Form = () => {
  const [person, setPerson] = useState({
    firstName: '',
    email: '',
    age: '',
  })
  const [people, setPeople] = useState([])

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setPerson({ ...person, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (person.firstName && person.email && person.age) {
      const newPerson = { ...person, id: new Date().getDate().toString }
      setPeople([...people, newPerson])
      setPerson({
        firstName: '',
        email: '',
        age: '',
      })
    }
  }

  return (
    <>
      <form onClick={handleSubmit}>
        <label htmlFor="firstName">
          Name:
          <input
            type="text"
            name="firstName"
            value={person.firstName}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            name="email"
            value={person.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="age">
          Age:
          <input
            type="text"
            name="age"
            value={person.age}
            onChange={handleChange}
          />
        </label>
        <button type="submit" className="btn">
          Add Person
        </button>
      </form>
      <div>
        {people.map((person) => {
          const { id, firstName, email, age } = person
          return (
            <div key={id} className="person">
              <h2>{firstName}</h2>
              <span>{age}</span>
              <h4>{email}</h4>
              <button
                className="btn"
                // onClick={() => {
                //   setPeople(people.filter((a) => a.id !== person.id))
                // }}
              >
                delete
              </button>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Form
