import { css } from '@emotion/react'
import styled from '@emotion/styled'

interface IButtonProps {
  pageClick: 'true' | undefined
}

export const StyledPagingList = styled.ul`
  display: flex;
`

export const StyledPagingButton = styled.button<IButtonProps>`
  width: 24px;
  height: 24px;
  font-size: 14px;
  line-height: 24px;
  color: #888;
  background: 0 0;

  ${(props) =>
    props.pageClick &&
    css`
      color: #fff;
      background: #2f3030;
      border-radius: 12px;
    `}
`
