import { TitleText } from '../../../commons/Title'
import { HealthyLifeProduct } from './HealthyLifeProduct'

import { useState } from 'react'
import { HEALTHYLIFE_ITEMS } from './healthyLifeItem'

import { StyledHealthyLifeSlider, StyledHealthyLifeWrap } from './HealthyLife.styles'
import { StyledArrowNextButton, StyledArrowPrevButton } from '../../../commons/Button/Button.styles'

// 기존 이미지 배열의 앞, 뒤에 각각 마지막이미지, 첫번째 이미지를 붙여서 새로운 배열 생성
const slideCardLength = HEALTHYLIFE_ITEMS.length
const beforeSlide = HEALTHYLIFE_ITEMS[slideCardLength - 1]
const afterSlide = HEALTHYLIFE_ITEMS[0]
const newCardSlide = [beforeSlide, ...HEALTHYLIFE_ITEMS, afterSlide]

const HealthyLife = () => {
  const newCardSlideNum = newCardSlide.length
  const [currentCardIndex, setCurrentCardIndex] = useState(1)

  const handleClickPrev = () => {
    if (currentCardIndex === 0) {
      setCurrentCardIndex(slideCardLength)
    } else {
      setCurrentCardIndex((prev) => prev - 1)
    }
  }

  const handleClickNext = () => {
    if (currentCardIndex === newCardSlideNum - 1) {
      setCurrentCardIndex(1)
    } else {
      setCurrentCardIndex((prev) => prev + 1)
    }
  }

  return (
    <StyledHealthyLifeWrap>
      <TitleText text='Healthy Life' />
      <StyledHealthyLifeSlider>
        <StyledArrowPrevButton onClick={handleClickPrev} />
        <HealthyLifeProduct
          currentCardIndex={currentCardIndex}
          newCardSlide={newCardSlide}
          newCardSlideNum={newCardSlideNum}
        />
        <StyledArrowNextButton onClick={handleClickNext} />
      </StyledHealthyLifeSlider>
    </StyledHealthyLifeWrap>
  )
}

export { HealthyLife }
