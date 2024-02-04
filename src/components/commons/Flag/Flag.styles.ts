import { css } from '@emotion/react'
import styled from '@emotion/styled'
interface IFlagIconProps {
  name: string
}

export const StyledFlagIcon = styled.span<IFlagIconProps>`
  display: inline-block;
  width: auto;
  padding: 1px 11px;
  border-radius: 9px;
  line-height: 17px !important;
  color: #fff !important;
  font-size: 12px !important;
  text-align: center;
  
  ${(props) =>
    props.name === '세일' &&
    css`
      background-color: #f65c60;
    `}
  ${(props) =>
    props.name === '증정' &&
    css`
      background-color: #6fcff7;
    `}
    
  ${(props) =>
    props.name === '오늘드림' &&
    css`
      background-color: #f374b7;
    `}
    ${(props) =>
    props.name === '쿠폰' &&
    css`
      background-color: #9bce26;
    `}
`
7
