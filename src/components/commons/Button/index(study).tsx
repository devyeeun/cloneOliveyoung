import React, { ReactNode } from 'react'
import * as S from '../../units/join/JoinForm.styles'

interface IButtonProps {
  type: 'submit' | 'button' | 'reset'
  variant?: string
  disabled?: boolean
  children: ReactNode
  onClick?(event: React.MouseEvent): void
}

const ButtonStudy = ({ type, variant, disabled, children }: IButtonProps) => {
  return (
    <>
      {type === 'submit' ? (
        <S.JoinButton type={type} disabled={disabled}>
          {children}
        </S.JoinButton>
      ) : (
        <S.ResetButton type={type}>{children}</S.ResetButton>
      )}
    </>
  )
}

export { ButtonStudy }
