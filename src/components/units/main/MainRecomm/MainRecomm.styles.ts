import styled from '@emotion/styled'
import Slider from 'react-slick'

export const StyledMainRecommWrap = styled.div`
  position: relative;
  height: 100%;
`

export const StyledMainRecommProductWrap = styled(Slider)`
  border-top: 1px solid #ddd;
`

export const StyledMainRecommList = styled(Slider)`
  display: flex;
  flex-direction: row;
  position: relative;
  margin: 0;
  padding: 0;
  border-top: 1px solid #ddd;
`

export const StyledMainRecommItem = styled.div`
  display: flex !important;
  justify-content: space-between;
  padding-top: 30px;
`

export const StyledMainRecommPaging = styled.div`
  position: absolute;
  top: 10px;
  right: 0;
`
