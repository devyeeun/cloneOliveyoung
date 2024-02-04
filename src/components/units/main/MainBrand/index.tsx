import { BrandBanner } from './BrandBanner'
import { TitleText } from '../../../commons/Title'
import { StyledMainBrandSwiper, StyledMainBrandWrap } from './MainBrand.styles'

const MainBrand = () => {
  return (
    <StyledMainBrandWrap>
      <TitleText text='주목해야 할 브랜드' />
      <StyledMainBrandSwiper>
        <BrandBanner />
      </StyledMainBrandSwiper>
    </StyledMainBrandWrap>
  )
}

export { MainBrand }
