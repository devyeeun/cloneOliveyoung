import { useCallback, useRef } from 'react'
import { useSetAtom } from 'jotai'
import { v4 as uuidv4 } from 'uuid'

import { TitleText } from '../../../commons/Title'
import { MainRecommPaging } from './MainRecommPaging'
import { MAINRECOMM_ITEMS } from './mainRecommItem'
import { CurationCard } from '../../../commons/Card'
import { MainRecommSelectedPageAtom } from '../../../..'

import {
  StyledMainRecommItem,
  StyledMainRecommList,
  StyledMainRecommWrap,
} from './MainRecomm.styles'
import { StyledArrowNextButton, StyledArrowPrevButton } from '../../../commons/Button/Button.styles'

const MainRecomm = () => {
  const mainRecommRef = useRef<React.ElementRef<typeof StyledMainRecommList>>(null)
  const setSelectedPageAtom = useSetAtom(MainRecommSelectedPageAtom)

  const handleClickPrev = useCallback(() => {
    mainRecommRef.current?.slickPrev()
  }, [])

  const handleClickNext = useCallback(() => {
    mainRecommRef.current?.slickNext()
  }, [])

  const handleSlideChange = useCallback((swiper: number) => {
    setSelectedPageAtom(swiper + 1)
  }, [])

  const settings = {
    infinite: true,
    afterChange: handleSlideChange,
  }

  return (
    <StyledMainRecommWrap>
      <TitleText text='이 상품 어때요?' />
      <StyledArrowPrevButton onClick={handleClickPrev} />
      <StyledMainRecommList ref={mainRecommRef} {...settings}>
        {MAINRECOMM_ITEMS.map((el) => (
          <StyledMainRecommItem key={uuidv4()}>
            {el.map((item) => (
              <CurationCard
                key={uuidv4()}
                src={item.src}
                width={item.width}
                height={item.height}
                brandName={item.brandName}
                name={item.name}
                OriginPrice={item.OriginPrice}
                CurPrice={item.CurPrice}
                flagStatus={item.flagStatus}
              />
            ))}
          </StyledMainRecommItem>
        ))}
      </StyledMainRecommList>
      <StyledArrowNextButton onClick={handleClickNext} />
      <MainRecommPaging mainRecommRef={mainRecommRef} />
    </StyledMainRecommWrap>
  )
}

export { MainRecomm }
