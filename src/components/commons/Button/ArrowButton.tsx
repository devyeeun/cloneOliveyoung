import React from 'react'
import { IButtonProps } from '.'
import { StyledArrowButton } from './Button.styles'

const ArrowButton = ({ type = 'button', onClick }: IButtonProps) => {
  return <StyledArrowButton onClick={() => onClick?.()} />
}

export { ArrowButton }
