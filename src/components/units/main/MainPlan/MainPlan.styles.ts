import Slider from 'react-slick'

import styled from '@emotion/styled'

export const StyledMainPlanWrap = styled.div`
  position: relative;
  height: 100%;
`

export const StyledMainPlanProductWrap = styled.ul`
  position: relative;
  margin: -41px auto 0 12px;
  padding: 15px 15px 0;
  width: 475px;
  height: 408px;
  font-size: 0;
  background-color: #fff;
  border-bottom: 0;
  z-index: 1;
  display: flex;
`

export const StyledMainProductList = styled.li`
  margin-left: 15px;

  :first-of-type {
    margin-left: 0;
  }
`

export const StyledMainBannerList = styled(Slider)`
  display: flex;
  height: 675px;
  width: 1020px;

  .slick-list {
    width: 100%;
  }
`

export const StyledMainPlanItem = styled.div`
  display: flex !important;
  flex-direction: row;
  height: 620px;
`

export const StyledMainPlanDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 0 10px;
`

/* MainPlan Paging style */
export const StyledMainPlanPaging = styled.div`
  position: absolute;
  top: 10px;
  right: 0;
`
