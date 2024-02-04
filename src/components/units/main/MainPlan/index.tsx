import React, { useCallback, useRef } from 'react'
import { useSetAtom } from 'jotai'
import { v4 as uuidv4 } from 'uuid'

import { MainPlanSelectedPageAtom } from '../../../..'
import { TitleText } from '../../../commons/Title'
import { MainPlanPaging } from './MainPlanPaging'
import { MAIN_PLAN_BANNER } from './mainPlanBanner'
import { MainPlanProduct } from './MainPlanProduct'
import { BannerWithText } from '../../../commons/Banner/BannerWithText'

import {
  StyledMainBannerList,
  StyledMainPlanDiv,
  StyledMainPlanItem,
  StyledMainPlanWrap,
} from './MainPlan.styles'
import { StyledArrowNextButton, StyledArrowPrevButton } from '../../../commons/Button/Button.styles'

const MainPlan = () => {
  const sliderRef = useRef<React.ElementRef<typeof StyledMainBannerList>>(null)
  const setSelectedPageAtom = useSetAtom(MainPlanSelectedPageAtom)

  const handleClickPrev = useCallback(() => {
    sliderRef.current?.slickPrev()
  }, [])

  const handleClickNext = useCallback(() => {
    sliderRef.current?.slickNext()
  }, [])

  const handleSlideChange = useCallback((swiper: number) => {
    setSelectedPageAtom(swiper + 1)
  }, [])

  const settings = {
    infinite: true,
    afterChange: handleSlideChange,
  }

  return (
    <StyledMainPlanWrap>
      <TitleText text='인기 행사만 모았어요!' />
      <StyledArrowPrevButton onClick={handleClickPrev} />
      <StyledMainBannerList ref={sliderRef} {...settings}>
        {MAIN_PLAN_BANNER.map((el) => (
          <StyledMainPlanItem key={uuidv4()}>
            {el.map((item) => (
              <StyledMainPlanDiv key={uuidv4()}>
                <BannerWithText
                  url={item.url}
                  src={item.src}
                  width={item.width}
                  height={item.height}
                  title={item.title}
                  subTitle={item.subTitle}
                  tag={item.tag}
                />
                <MainPlanProduct bannerKey={item.bannerKey} />
              </StyledMainPlanDiv>
            ))}
          </StyledMainPlanItem>
        ))}
      </StyledMainBannerList>
      <StyledArrowNextButton onClick={handleClickNext} />
      <MainPlanPaging sliderRef={sliderRef} />
    </StyledMainPlanWrap>
  )
}

export { MainPlan }
