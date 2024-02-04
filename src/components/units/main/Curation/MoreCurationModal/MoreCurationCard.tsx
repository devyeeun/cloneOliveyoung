import { Flag } from '../../../../commons/Flag'
import {
  StyledThumbImg,
  StyledImg,
  StyledName,
  StyledProductPrice,
  StyledOrgPriceWrap,
  StyledCurPriceWrap,
  StyledProductFlag,
  StyledCurationCard,
} from './MoreCurationCard.styles'

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

const MoreCurationCard = ({
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
      <StyledThumbImg width={width} height={height}>
        <StyledImg src={src} />
      </StyledThumbImg>
      <StyledName>{name}</StyledName>
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
    </StyledCurationCard>
  )
}

export { MoreCurationCard }
