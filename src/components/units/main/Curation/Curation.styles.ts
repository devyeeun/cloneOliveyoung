import styled from '@emotion/styled'
import { DEFAULT_COLOR } from '../../../../commons/styles/commonStyles'
import { StyledCommonButton } from '../../../commons/Button/Button.styles'

export const StyledCurationWrap = styled.div`
  display: flex;

  > div {
    width: 50%;
  }
`

export const StyledCartButton = styled(StyledCommonButton)`
  position: absolute;
  z-index: 10;
  top: 315px;
  right: 30px;
  width: 16px;
  height: 18px;
  margin: 0;
  background: url('/images/icon_bag.png') 0 no-repeat;
  color: transparent;
`

export const StyledTitleWrap = styled.div`
  height: 62px;
  margin: 60px 30px 0;

  position: relative;
  line-height: 1.3;
  letter-spacing: 0;
`

export const StyledTitle = styled.h2`
  white-space: pre-line;
  font-weight: 700;
  font-size: 24px;
  color: ${DEFAULT_COLOR.black};
`

export const StyledButton = styled.button`
  position: absolute;
  bottom: 3px;
  right: 0;
  background-color: #fff;

  > span {
    font-size: 15px;
    font-weight: 500;
    color: #aaa;
  }
`

export const StyledCurationCardWrap = styled.ul`
  display: flex;
  margin-top: 39px;
  margin-bottom: 27px;

  > li {
    display: inline-block;
    position: relative;
    width: 255px;
    padding: 0 10px;
    vertical-align: top;
  }
`

export const StyledButtonWrap = styled.div`
  margin-top: 40px;
  margin: 0;
  text-align: center;
`

export const StyledNum = styled.span`
  margin-left: 10px;
  font-weight: 400;
  color: #b2b8be;
  line-height: 17px;
`

export const StyledBeginNum = styled.span`
  display: inline-block;
  position: relative;
  min-width: 25px;
  padding-right: 16px;
  color: #454c53;

  ::after {
    position: absolute;
    top: 3px;
    right: 8px;
    width: 1px;
    height: 12px;
    background: #dadde0;
    content: '';
  }
`
