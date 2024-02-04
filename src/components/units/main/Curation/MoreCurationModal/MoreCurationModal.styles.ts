import styled from '@emotion/styled'
import { DEFAULT_COLOR } from '../../../../../commons/styles/commonStyles'
import { StyledCommonButton } from '../../../../commons/Button/Button.styles'

export const StyledEscButton = styled(StyledCommonButton)`
  position: absolute;
  top: 28px;
  right: 30px;
  width: 25px;
  height: 25px;
  cursor: pointer;
  background: url('/images/ico_close_black.png') 0 0/25px auto no-repeat;
`

export const StyledTitle = styled.h1`
  font-size: 21px;
  font-weight: 600;
  color: ${DEFAULT_COLOR.black};
  padding-bottom: 13px;
  border-bottom: 2px solid #000;
`

export const StyledModalInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px auto 0;
`

export const StyledInfoTitleWrap = styled.div`
  display: flex;
  align-items: baseline;
  color: ${DEFAULT_COLOR.black};
`

export const StyledInfoTitle = styled.h2`
  font-size: 26px;
  font-weight: 700;
  padding-right: 18px;
`

export const StyledInfoSubTitle = styled.span`
  font-size: 18px;
  font-weight: 700;
`

export const StyledRecommendBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0 0;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 6px;
`

export const StyledSubTitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  > a {
    padding-right: 12px;
    font-size: 15px;
    color: #333;
    background: url('/images/ico_more.png') center right 0/5px auto no-repeat;
  }
`

export const StyledRecommendSubTitle = styled.h3`
  font-size: 18px;
  color: #666;
  padding-bottom: 8px;
`

export const StyledRecommendTagList = styled.ul`
  display: flex;
  font-size: 15px;
  color: #888;
  position: relative;

  > li {
    padding: 0 11px;

    :first-of-type {
      padding-left: 0;
    }

    :last-child {
      ::after {
        display: none;
      }
    }

    ::after {
      content: '';
      position: absolute;
      top: 4px;
      width: 1px;
      height: 14px;
      border-right: 1px solid #bbb;
      padding-left: 11px;
    }
  }
`

export const StyledCurationItemList = styled.li`
  display: flex;
  flex-wrap: wrap;
  max-width: 789px;
  height: 50vh;
  overflow-x: hidden;

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: red;
  }
`

export const StyledCurationItem = styled.div`
  width: 160px;
  margin-left: 30px;
  margin-bottom: 30px;
`

export const StyledCurationListWrap = styled.div`
  margin-top: 30px;
  max-height: 505px;
`
