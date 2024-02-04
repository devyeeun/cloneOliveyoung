import styled from '@emotion/styled'
import { StyledArrowButton } from '../../../commons/Button/Button.styles'
import { StyledCurationCard, StyledProductFlag } from '../../../commons/Card/Card.styles'

interface IThumbProps {
  src: string
}

export const StyledMainBrandWrap = styled.div`
  height: 100%;
`

export const StyledMainBrandSwiper = styled.div`
  margin-top: 10px;
  position: relative;
`

export const StyledBannerPrevButton = styled(StyledArrowButton)`
  z-index: 999;
  width: 32px;
  height: 55px;
  top: 172px;
  left: 20px;
  background-color: transparent;

  ::before {
    display: block;
    width: 100%;
    height: 100%;
    background: url('/images/icon_brand_slide_button.png') 0 0/100% auto no-repeat;
    content: '';
  }
`

export const StyledBannerNextButton = styled(StyledBannerPrevButton)`
  left: unset !important;
  right: 20px !important;

  ::before {
    transform: rotate(180deg);
  }
`

/* BrandBanner style */
export const StyledBrandBannerWrap = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  height: 400px;

  ::before {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background-image: linear-gradient(180deg, rgba(19, 21, 24, 0) 0, rgba(19, 21, 24, 0.4) 100%);
    content: '';
  }
`

export const StyledBrandBannerLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 160px;
  min-height: 100px;
  text-align: center;
  letter-spacing: -0.01em;
`

export const StyledBrandBannerInfo = styled.div`
  position: relative;
  z-index: 10;
`

export const StyledBrandName = styled.strong`
  font-size: 28px;
  font-weight: 700;
  line-height: 40px;
  color: #fff;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.25);
`

export const StyledBrandBannerDesc = styled.span`
  display: block;
  margin: 9px 0 0 -1px;
  font-size: 14px;
  line-height: 20px;
  color: #fff;
  text-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
`

export const StyledBrandLikeIcon = styled.i`
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-right: 5px;
  background: url('/images/icon_like_brand.png') 0 0/100% auto no-repeat;
  vertical-align: -4px;
`

export const StyledBrandBannerThumb = styled.img<IThumbProps>`
  background-image: ${(props) => props.src};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-position: center;
`

/* BrandCuration style */
export const StyledBrandCurationWrap = styled.ul`
  display: flex;
  justify-content: center;
  padding: 0 30px;
`

export const StyledBrandCurationList = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 30px;

  :not(:first-of-type) {
    margin-left: 60px;
  }
`

/* BrandCurationCard style */

export const StyledBrandCuratinImgWrap = styled.div`
  width: 100px;
`

export const StyledBrandCurationCard = styled(StyledCurationCard)`
  flex-direction: row;
`

export const StyledBrandCurationInfo = styled.div`
  width: 100%;
  margin-left: 15px;
`

export const StyledBrandCurationPrdName = styled.div`
  margin: 0;
`

export const StyledBrandCurationName = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  line-height: 18px;
  max-height: 36px;
  color: #000;
`

export const StyledBrandCurationPriceWrap = styled.div`
  margin-top: 2px;
`

export const StyledBrandCurationOrigin = styled.span`
  padding-right: 2px;
  color: #b5b5b5;
  font-size: 12px;
  text-decoration: line-through;
`

export const StyledBrandCurationCurrent = styled.span`
  font-size: 14px;
  color: #e02020;
  font-weight: 500;
`

export const StyledBrandCurationFlag = styled(StyledProductFlag)`
  margin: 5px 0;
`
