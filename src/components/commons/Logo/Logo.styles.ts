import { css } from '@emotion/react'
import styled from '@emotion/styled'

interface ILogoSizeProps {
  [key: string]: { width: string; height: string }
}

interface ILogoStylesProps {
  src: string
  size: string
}

const LOGO_SIZE: ILogoSizeProps = {
  small: {
    width: '146',
    height: '24',
  },
  medium: {
    width: '248',
    height: '42',
  },
}

export const StyledLogoImg = styled.img<ILogoStylesProps>`
  src: ${(props) => props.src};

  ${(props) =>
    props.size !== undefined &&
    css`
      width: ${LOGO_SIZE[props.size].width}px;
      height: ${LOGO_SIZE[props.size].height}px;
    `}
`
