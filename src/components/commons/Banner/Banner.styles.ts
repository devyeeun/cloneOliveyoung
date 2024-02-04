import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { DEFAULT_COLOR } from '../../../commons/styles/commonStyles'

export const StyledBanner = styled(Link)`
  position: relative;
  display: block;
`
export const StyledTextWrap = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* z-index: 1; */
`

export const StyledTextList = styled.dl`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  margin-left: 28px;
  height: 100%;
  color: ${DEFAULT_COLOR.black};
  margin-left: 28px;

  > dt {
    overflow: hidden;
    max-width: 222px;
    font-size: 21px;
    line-height: 1.35;
    letter-spacing: -0.67px;
    font-weight: 700;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  > dd {
    overflow: hidden;
    margin-top: 15px;
    max-width: 215px;
    font-size: 16px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`
