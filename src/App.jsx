import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'

const url = 'https://api.github.com/users'
function App() {
  const [users, setUsers] = useState([])

  const fetchUsers = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((data) => setUsers(data))
  }

  useEffect(() => {
    fetchUsers()
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

export default App
