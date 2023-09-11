// import React from 'react'

import { useEffect } from 'react'
import { useState } from 'react'

let itemPrice = 50

export const AppNew = () => {
  const [count, setcount] = useState(0)
  const totalPrice = count * itemPrice

  const handleClick = () => {
    setcount(count + 1)
  }
  useEffect(() => {}, [count])

  return (
    <div>
      <button onClick={handleClick}>Add item {count}</button>
      <p>Total Price: {totalPrice}</p>
    </div>
  )
}
