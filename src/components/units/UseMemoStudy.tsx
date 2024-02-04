import { useMemo, useState } from 'react'

const UseMemoStudy = () => {
  const [count, setCount] = useState(0)

  const memoizedResult = useMemo(() => {
    console.log('useMemo중!')
    return count * 2
  }, [count])

  return (
    <>
      <p>count : {count}</p>
      <p>결과 : {memoizedResult}</p>
      <button onClick={() => setCount(count + 1)}>눌러보자!</button>
    </>
  )
}

export { UseMemoStudy }
