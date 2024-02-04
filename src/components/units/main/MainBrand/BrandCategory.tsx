import { MouseEvent, MutableRefObject, useCallback, useState } from 'react'
import { useAtom } from 'jotai'
import { SwiperRef } from 'swiper/react'
import { v4 as uuidv4 } from 'uuid'

import {
  StyledBrandCategoryItem,
  StyledBrandCategoryList,
  StyledBrandCategoryWrap,
  StyledCategoryLink,
} from './BrandCategory.styles'
import { BRAND_NAME } from './brandname'
import { MainBrandSelectedBrandAtom } from '../../../..'

interface IBrandProps {
  brandBannerRef: MutableRefObject<SwiperRef | null>
}

const BrandCategory = ({ brandBannerRef }: IBrandProps) => {
  const [selectedBrand, setSelectedBrand] = useAtom(MainBrandSelectedBrandAtom)

  const handleClickBrand = useCallback(
    (event: MouseEvent<HTMLAnchorElement>) => {
      const brandIndex = parseInt(event.currentTarget.id)
      setSelectedBrand(brandIndex)
      brandBannerRef.current?.swiper.slideTo(brandIndex - 1)
    },
    [selectedBrand]
  )

  return (
    <StyledBrandCategoryWrap>
      <StyledBrandCategoryList>
        {BRAND_NAME.map((item) => (
          <StyledBrandCategoryItem key={uuidv4()}>
            <StyledCategoryLink
              id={item.num}
              onClick={handleClickBrand}
              isActive={selectedBrand === parseInt(item.num)}
            >
              {item.brandName}
            </StyledCategoryLink>
          </StyledBrandCategoryItem>
        ))}
      </StyledBrandCategoryList>
    </StyledBrandCategoryWrap>
  )
}

export { BrandCategory }
