import { css } from '@emotion/react'
import styled from '@emotion/styled'

interface ICardProps {
  currentCardIndex: number
  newCardSlideNum: number
  newCardSlide: any
}

export const StyledHealthyLifeWrap = styled.div`
  height: 100%;
`

export const StyledHealthyLifeSlider = styled.div`
  padding: 0 8px;
  position: relative;
`

export const StyledHealthyLifeSlide = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
  margin: 0;
  padding: 0;
`

export const StyledHealthyCardList = styled.ul<ICardProps>`
  display: flex;
  width: ${(props) =>
    css`
      width: 600vw;
      transform: translateX(${-16.7 * props.currentCardIndex}%);
      transition: all 1s ease-in-out 0s;
    `};
`

export const StyledHealthyCardItem = styled.div`
  position: relative;
  margin: 0 13px 0 12px;
  width: 310px;
`

/* HealthyLife Card style */
export const StyledHealthyCardImgWrap = styled.p`
  overflow: hidden;
  position: relative;
  display: block;
  height: 420px;
  border-radius: 25px;
`

export const StyledHealthyCardImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const StyledHealthyCardText = styled.div`
  position: absolute;
  top: 310px;
  left: 20px;
  right: 20px;
  color: #fff;
  text-align: left;
`

export const StyledHealthyCardTitle = styled.h3`
  overflow: hidden;
  display: block;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: -0.45px;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
`

export const StyleHealthyCardContent = styled.span`
  max-height: 40px;
  letter-spacing: -0.21px;
  word-break: keep-all;
  display: block;
  margin-top: 5px;
  font-size: 15px;
  line-height: 20px;
  font-weight: 400;
  letter-spacing: -0.21px;
  word-break: keep-all;
  padding-right: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
`
