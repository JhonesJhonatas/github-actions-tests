import React, { useState } from 'react'

export const CountBox: React.FC = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <span>{count}</span>
      <button onClick={() => setCount(oldState => oldState + 1)}>AddCount</button>
    </div>
  )
}
