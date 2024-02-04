import { v4 as uuidv4 } from 'uuid'
import { Swiper, SwiperSlide } from 'swiper/react'

import { HealthyLifeCard } from './HealthyLifeCard'
import { HEALTHYLIFE_ITEMS } from './healthyLifeItem'
import {
  StyledHealthyCardItem,
  StyledHealthyCardList,
  StyledHealthyLifeSlide,
} from './HealthyLife.styles'
import { Fragment } from 'react'

interface ICardIndexProps {
  currentCardIndex: number
  newCardSlide: any
  newCardSlideNum: number
}

const HealthyLifeProduct = ({
  currentCardIndex,
  newCardSlide,
  newCardSlideNum,
}: ICardIndexProps) => {
  return (
    <StyledHealthyLifeSlide>
      <StyledHealthyCardList
        currentCardIndex={currentCardIndex}
        newCardSlideNum={newCardSlideNum}
        newCardSlide={newCardSlide}
      >
        {newCardSlide.map((el: any) => (
          <StyledHealthyCardItem key={uuidv4()}>
            <HealthyLifeCard
              src={el.src}
              title={el.title}
              content1={el.content1}
              content2={el.content2}
            />
          </StyledHealthyCardItem>
        ))}
      </StyledHealthyCardList>
    </StyledHealthyLifeSlide>
  )
}

export { HealthyLifeProduct }
