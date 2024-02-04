import { useAtomValue } from 'jotai'
import { v4 as uuidv4 } from 'uuid'

import { MainBrandSelectedBrandAtom } from '../../../..'
import { CurationCard } from '../../../commons/Card'
import { BrandCurationCard } from './BrandCurationCard'
import { BRAND_PRODUCT } from './brandProduct'
import { StyledBrandCurationList, StyledBrandCurationWrap } from './MainBrand.styles'

const BrandCuration = () => {
  const selectedBrand = useAtomValue(MainBrandSelectedBrandAtom)

  const getCurrentItems = () => {
    return BRAND_PRODUCT.filter((item) => item.key === String(selectedBrand))
  }
  return (
    <StyledBrandCurationWrap>
      {getCurrentItems().map((el) => (
        <StyledBrandCurationList key={uuidv4()}>
          <BrandCurationCard
            src={el.src}
            width={el.width}
            height={el.height}
            name={el.name}
            OriginPrice={el.OriginPrice}
            CurPrice={el.CurPrice}
            flagStatus={el.flagStatus}
          />
        </StyledBrandCurationList>
      ))}
    </StyledBrandCurationWrap>
  )
}

export { BrandCuration }
