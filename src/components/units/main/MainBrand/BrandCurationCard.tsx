import { Flag } from '../../../commons/Flag'

import { StyledThumbImg, StyledImg } from '../../../commons/Card/Card.styles'
import {
  StyledBrandCuratinImgWrap,
  StyledBrandCurationCurrent,
  StyledBrandCurationFlag,
  StyledBrandCurationInfo,
  StyledBrandCurationName,
  StyledBrandCurationOrigin,
  StyledBrandCurationPrdName,
  StyledBrandCurationPriceWrap,
} from './MainBrand.styles'

interface ICurationProps {
  key?: string
  src: string
  width: string
  height: string
  brandName?: string
  name: string
  OriginPrice?: string
  CurPrice: string
  flagStatus?: string[]
}

const BrandCurationCard = ({
  src,
  width,
  height,
  name,
  OriginPrice,
  CurPrice,
  flagStatus,
}: ICurationProps) => {
  return (
    <>
      <StyledBrandCuratinImgWrap>
        <StyledThumbImg width={width} height={height}>
          <StyledImg src={src} />
        </StyledThumbImg>
      </StyledBrandCuratinImgWrap>
      <StyledBrandCurationInfo>
        <StyledBrandCurationPrdName>
          <StyledBrandCurationName>{name}</StyledBrandCurationName>
        </StyledBrandCurationPrdName>
        <StyledBrandCurationPriceWrap>
          {OriginPrice && <StyledBrandCurationOrigin>{OriginPrice}원</StyledBrandCurationOrigin>}
          <StyledBrandCurationCurrent>{CurPrice}원</StyledBrandCurationCurrent>
        </StyledBrandCurationPriceWrap>
        <StyledBrandCurationFlag>
          {flagStatus?.map((el) => (
            <Flag key={el} name={el} />
          ))}
        </StyledBrandCurationFlag>
      </StyledBrandCurationInfo>
    </>
  )
}

export { BrandCurationCard }
