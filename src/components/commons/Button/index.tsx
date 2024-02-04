import React, { ReactNode } from 'react'
import { StyledCommonButton } from './Button.styles'

export interface IButtonProps {
  type?: 'submit' | 'button' | 'reset'
  children?: ReactNode
  onClick?: () => void
}

const Button = ({ type = 'button', onClick, children }: IButtonProps) => {
  return (
    <StyledCommonButton onClick={() => onClick?.()}>
      {children}
    </StyledCommonButton>
  )
}

export { Button }
