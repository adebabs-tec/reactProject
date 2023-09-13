// import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const FetchData = () => {
  const url = 'https://api.github.com/users'
  const [users, setUsers] = useState([])

  const FetchUsers = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((data) => setUsers(data))
  }

  useEffect(() => {
    FetchUsers()
  }, [])

  return (
    <>
      <ul>
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div className="profile">
                <span>{login}</span>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default FetchData
