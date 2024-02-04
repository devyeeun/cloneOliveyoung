import React, { ForwardedRef, forwardRef } from 'react'

interface IInputProps {
  type?: 'text' | 'textarea'
  placeholder?: string
  value?: string
  defaultValue?: string
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void
}

// 초기화 문법 type="text"로 명시해주면, undefined일 때는 default로 text로 인식 => props로 안보내줘도 된다.
// reset버튼 클릭 시, input에 focus를 주기 위해 forwardRef를 사용
const Input = forwardRef(
  (
    { type = 'text', placeholder, value, onChange }: IInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange && onChange(event) // if문 대신 &&로 간결하게 사용할 수 있음.
    }
    console.log('bb')
    return (
      <div>
        <input
          type={type}
          ref={ref}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
        <Test />
      </div>
    )
  }
)

const Test = () => {
  console.log('aa')
  return <p>안녕</p>
}
export { Input }
