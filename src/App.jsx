import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [size, setSize] = useState(window.innerWidth)

  const changeSize = () => {
    setSize(window.innerWidth)
  }

  useEffect(() => {
    console.log('Hi, render!')
    window.addEventListener('resize', changeSize)
  }, [])

  return (
    <>
      <h1>Hello World!</h1>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
      <h3>Window Current Width</h3>
      <h1>{size} PX</h1>
    </>
  )
}

export default App