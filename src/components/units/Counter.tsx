import { useCallback, useState } from 'react'
import { Button } from '../commons/Button'

const Counter = () => {
  const [number, setNumber] = useState(0)

  const onIncrease = () => {
    setNumber(number + 1)
  }

  const onDecrease = () => {
    setNumber((prev) => prev - 1)
  }

  return (
    <div>
      <h1>{number}</h1> 
      <Button onClick={onIncrease}>올리기</Button>
      <Button onClick={onDecrease}>내리기</Button>
    </div>
  )
}

export { Counter }
