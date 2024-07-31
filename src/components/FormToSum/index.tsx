import React, { useState } from 'react'
import style from './style.module.css'

export const FormToSum: React.FC = () => {
  const [firstValue, setFirstValue] = useState(0)
  const [secondValue, setSecondValue] = useState(0)
  const [result, setResult] = useState(0)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const sum = firstValue + secondValue
    setResult(sum)
  }

  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit} className={style.form}>
        <input
          type="number"
          name="firstValue"
          value={firstValue}
          onChange={(e) => setFirstValue(Number(e.target.value))}
        />
        <input
          type="number"
          name="secondValue"
          value={secondValue}
          onChange={(e) => setSecondValue(Number(e.target.value))}
        />
        <button type="submit">Somar</button>
      </form>
      <div className={style['box-result']}>
        <span>{result}</span>
      </div>
    </div>
  )
}
