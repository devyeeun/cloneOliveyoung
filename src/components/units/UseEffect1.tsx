import { useEffect, useState } from 'react'

const UseEffect1 = () => {
  const [age, setAge] = useState(0)
  const [name, setName] = useState('')

  useEffect(() => {
    setAge(25)
    setName('예은')
  }, [])

  return (
    <>
      <div className='App'>{`그의 이름은 ${name} 이며, 나이는 ${age}살 입니다.`}</div>
    </>
  )
}

export { UseEffect1 }
