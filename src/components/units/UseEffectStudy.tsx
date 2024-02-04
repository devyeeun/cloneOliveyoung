import React, { useEffect, useState } from 'react'

const UseEffectStudy = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('김예은')

//   useEffect(() => {
//     console.log('한번만 실행!')
//     console.log('useEffect!!', count)
//   }, [])

//   useEffect(() => {
//     console.log('렌더링 될 때 마다 계속 실행!')
//     console.log('useEffect!!', count)
//   })

  useEffect(() => {
    console.log('업데이트 될 때 실행!')
    console.log('useEffect!!', count)
  }, [count])

  const countUp = () => {
    setCount(count + 1)
  }

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }
  return (
    <div>
      <p>안녕하세요. {name} 입니다.</p>
      <input onChange={handleChangeName} />
      <p>{count}번 클릭했어요!</p>
      <button onClick={countUp}>클릭!</button>
    </div>
  )
}

export { UseEffectStudy }
