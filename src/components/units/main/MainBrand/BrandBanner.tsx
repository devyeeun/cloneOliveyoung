import { useAtom } from 'jotai'
import { useCallback, useRef } from 'react'
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react'

import { BRAND_NAME } from './brandname'
import { BrandCategory } from './BrandCategory'
import { MainBrandSelectedBrandAtom } from '../../../..'

import {
  StyledBannerNextButton,
  StyledBannerPrevButton,
  StyledBrandBannerDesc,
  StyledBrandBannerInfo,
  StyledBrandBannerLink,
  StyledBrandBannerThumb,
  StyledBrandBannerWrap,
  StyledBrandLikeIcon,
  StyledBrandName,
} from './MainBrand.styles'
import { BrandCuration } from './BrandCuration'

const BrandBanner = () => {
  const [selectedBrand, setSelectedBrand] = useAtom(MainBrandSelectedBrandAtom)

  const brandBannerRef = useRef<SwiperRef | null>(null)

  const handleClickPrev = useCallback(() => {
    setSelectedBrand((prev) => {
      if (prev === 1) return 1
      return prev - 1
    })
    brandBannerRef.current?.swiper.slidePrev()
  }, [selectedBrand])

  const handleClickNext = useCallback(() => {
    setSelectedBrand((prev) => {
      if (prev === 3) return 3
      return prev + 1
    })
    brandBannerRef.current?.swiper.slideNext()
  }, [selectedBrand])

  const swiperOption = {
    loop: false,
    autoHeight: true,
  }

  return (
    <>
      <BrandCategory brandBannerRef={brandBannerRef} />
      <Swiper {...swiperOption} ref={brandBannerRef}>
        <StyledBannerPrevButton onClick={handleClickPrev} />
        {BRAND_NAME.map((brandInfo, index) => {
          return (
            <SwiperSlide key={index}>
              <StyledBrandBannerWrap>
                <StyledBrandBannerLink>
                  <StyledBrandBannerInfo>
                    <StyledBrandName>{brandInfo.brandName}</StyledBrandName>
                    <StyledBrandBannerDesc>
                      <StyledBrandLikeIcon />
                      {brandInfo.likeCount}명이 좋아합니다.
                    </StyledBrandBannerDesc>
                  </StyledBrandBannerInfo>
                  <StyledBrandBannerThumb src={brandInfo.src} />
                </StyledBrandBannerLink>
              </StyledBrandBannerWrap>
              <BrandCuration />
            </SwiperSlide>
          )
        })}
        <StyledBannerNextButton onClick={handleClickNext} />
      </Swiper>
    </>
  )
}

export { BrandBanner }
