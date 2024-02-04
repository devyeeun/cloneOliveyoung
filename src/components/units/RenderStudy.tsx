// import React, { useRef, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { Button } from '../commons/Button'
// import { Input } from '../commons/Input'

// const RenderStudy = () => {
//   const [inputValue, setInputValue] = useState('')
//   const navigate = useNavigate()
//   const inputRef = useRef<HTMLInputElement>(null)

//   const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setInputValue(e.target.value)
//   }

//   const handleClickReset = () => {
//     setInputValue('')
//     inputRef.current?.focus()
//   }

//   const handleClickSend = () => {
//     navigate('/RenderPage', { state: { inputValue } })
//   }

//   return (
//     <>
//       <Input
//         placeholder='내용을 입력해 주세요.'
//         value={inputValue}
//         onChange={handleChangeInput}
//         ref={inputRef}
//       />
//       <br />
//       <br />
//       <Button onClick={handleClickReset}>Reset</Button>
//       <Button onClick={handleClickSend}>Send</Button>
//     </>
//   )
// }

// export { RenderStudy }
