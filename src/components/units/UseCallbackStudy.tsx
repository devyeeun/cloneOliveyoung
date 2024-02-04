import React, { useState, useCallback, ChangeEvent } from 'react'

const UseCallbackStudy = () => {
  const [text, setText] = useState('')

  // 입력값을 업데이트하는 함수를 useCallback으로 메모이제이션
  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }, [])

  return (
    <div>
      <input type='text' value={text} onChange={handleChange} />
      <p>Input Value: {text}</p>
    </div>
  )
}

export { UseCallbackStudy }
