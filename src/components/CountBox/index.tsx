import React, { useState } from 'react'

import style from './style.module.css'

export const CountBox: React.FC = () => {
  const [count, setCount] = useState(0)

  return (
    <div className={style['flex-box']}>
      <span>{count}</span>
      <button onClick={() => setCount(oldState => oldState + 1)}>AddCount</button>
    </div>
  )
}
