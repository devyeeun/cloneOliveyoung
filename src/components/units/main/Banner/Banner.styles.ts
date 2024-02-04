import Slider from 'react-slick'
import styled from '@emotion/styled'
import { DEFAULT_COLOR } from '../../../../commons/styles/commonStyles'

/* MainBanner style */
export const StyledMainBanner = styled.div`
  width: 100%;
  height: 450px;
`

export const StyledBannerWrap = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  background: #f5f5f5;
  z-index: 0;
  height: 450px;
  min-width: 1020px;
  overflow: hidden;
`

export const StyledStyledSlider = styled(Slider)`
  .slick-prev,
  .slick-next,
  .slick-arrow {
    display: none;
  }
  width: 100%;
`
export const StyledSlideWrap = styled.div`
  /* width: 1181px;
  position: relative;
  left: 0px;
  top: 0px;
  z-index: 998;
  opacity: 0;
  transition: opacity 500ms ease 0s;
  display: block; */
`

export const StyledBannerLink = styled.a`
  display: block;
  position: relative;
  height: 450px;
  overflow: hidden;
`

export const StyledBannerDesc = styled.p`
  position: absolute;
  top: 52px;
  left: 50%;
  font-size: 18px;
  color: #666;
  z-index: 1;
  margin-left: -290px;
  font-weight: 700;
`

export const StyledTitle = styled.span`
  display: block;
  font-size: 18px;
  color: #000;

  ::after {
    content: '';
    display: block;
    width: 12px;
    height: 1px;
    margin: 20px 0;
    background: #b0afb6;
  }
`

export const StyledSubTitle = styled.strong`
  display: block;
  width: 360px;
  margin-bottom: 10px;
  font-size: 48px;
  color: #1f1f1f;
  line-height: 56px;
  word-break: keep-all;
  font-weight: 400;
`

export const StyledSubDesc = styled.span`
  display: block;
  font-size: 18px;
  color: #666;
`

export const StyledBannerImg = styled.img`
  position: absolute;
  top: 0;
  /* left: 50%; */
  z-index: 0;
`

/* MidBanner style */
export const StyledMidBanner = styled.div`
  display: flex;
  margin-top: 50px;

  a + a {
    margin-left: 4px;
  }
`

/* WeeklyBanner style */
export const StyledWeeklyBanner = styled.div`
  display: flex;
  margin: 0 auto 10px;
  width: 1020px;
`

export const StyledWeeklyBannerList = styled.ul`
  display: flex;

  > li + li {
    overflow: hidden;
    position: relative;
    margin-left: 20px;
    width: 500px;
    height: auto;
    cursor: pointer;
  }
`

/* KeywordBanner style */

export const StyledKeywordBanner = styled.div`
  /* display: flex; */
  margin: 0 auto 10px;
  width: 1020px;
`

export const StyledKeywordBannerList = styled.ul`
  display: flex;

  > li + li {
    margin-left: 20px;
  }
`

export const StyledKeywordTitleWrap = styled.div`
  margin-top: 15px;
  font-size: 20px;
  color: ${DEFAULT_COLOR.black};
`

export const StyledKeywordSubTitle = styled.span`
  display: inline-block;
  margin-top: 11px;
  font-size: 16px;
`

export const StyledKeywordBtn = styled.div`
  margin: 40px 0 55px;
`
