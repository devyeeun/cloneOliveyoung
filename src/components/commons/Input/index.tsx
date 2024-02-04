import { UseFormRegisterReturn } from 'react-hook-form'
import * as S from '../../units/join/JoinForm.styles'

interface IInputProps {
  type?: 'text' | 'textarea' | 'password'
  placeholder?: string
  errorMsg?: string
  register?: UseFormRegisterReturn
}

const Input = ({ type = 'text', placeholder, errorMsg, register }: IInputProps) => {
  return (
    <S.InputWrap>
      <input type={type} {...register} placeholder={placeholder} />
      <S.ErrorMsg>{errorMsg}</S.ErrorMsg>
    </S.InputWrap>
  )
}

export { Input }
