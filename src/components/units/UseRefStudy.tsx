import { useRef } from 'react'

const UseRefStudy = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.value = 'Hello, useRef!'
    }
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleClick}>Value셋팅!</button>
    </>
  )
}

export { UseRefStudy }
