import styled from '@emotion/styled'

export const StyledCommonButton = styled.button`
  background: 0;
`

export const StyledArrowButton = styled.button`
  position: absolute;
  z-index: 10;
`

export const StyledArrowPrevButton = styled(StyledArrowButton)`
  left: -60px;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  background: url('/images/ico_arrow.png') no-repeat;
  text-indent: -9999px;
`

export const StyledArrowNextButton = styled(StyledArrowPrevButton)`
  left: inherit;
  right: -60px;
  background-position: -40px 0;
`
