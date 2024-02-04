import { Flag } from '../Flag'
import {
  StyledThumbImg,
  StyledImg,
  StyledProductName,
  StyledBrandName,
  StyledName,
  StyledProductPrice,
  StyledOrgPriceWrap,
  StyledCurPriceWrap,
  StyledProductFlag,
  StyledCurationCard,
} from './Card.styles'

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

const CurationCard = ({
  src,
  width,
  height,
  brandName,
  name,
  OriginPrice,
  CurPrice,
  flagStatus,
}: ICurationProps) => {
  return (
    <StyledCurationCard>
      <div>
        <StyledThumbImg width={width} height={height}>
          <StyledImg src={src} />
        </StyledThumbImg>
      </div>
      <div>
        <StyledProductName>
          <StyledBrandName>{brandName}</StyledBrandName>
          <StyledName>{name}</StyledName>
        </StyledProductName>
        <StyledProductPrice>
          {OriginPrice && (
            <StyledOrgPriceWrap>
              <span>{OriginPrice}</span>원
            </StyledOrgPriceWrap>
          )}
          <StyledCurPriceWrap>
            <span>{CurPrice}</span>원
          </StyledCurPriceWrap>
        </StyledProductPrice>
        <StyledProductFlag>
          {flagStatus?.map((el) => (
            <Flag key={el} name={el} />
          ))}
        </StyledProductFlag>
      </div>
    </StyledCurationCard>
  )
}

export { CurationCard }
