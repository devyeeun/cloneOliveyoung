import React from 'react'
import styled from '@emotion/styled'
import { StyledCommonButton } from '../../../commons/Button/Button.styles'
import { StyledBeginNum, StyledButtonWrap, StyledNum } from './Curation.styles'

interface IIndexProps {
  title: string
  onClick: () => void
  pageNum: number
}

const StyledRecommButton = styled(StyledCommonButton)`
  width: 335px;
  height: 40px;
  border: 1px solid #ddd;
  border-radius: 4px;
  color: #454c53;
`

const NextProduct = ({ title, onClick, pageNum }: IIndexProps) => {
  return (
    <StyledButtonWrap>
      <StyledRecommButton onClick={() => onClick()}>
        {title}
        <StyledNum>
          <StyledBeginNum>{pageNum}</StyledBeginNum>2
        </StyledNum>
      </StyledRecommButton>
    </StyledButtonWrap>
  )
}

export default React.memo(NextProduct)
