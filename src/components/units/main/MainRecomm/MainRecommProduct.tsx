import { v4 as uuidv4 } from 'uuid'

import { CurationCard } from '../../../commons/Card'
import { useAtomValue } from 'jotai'
import { MainRecommAtom } from '../../../..'

import { MAINRECOMM_ITEMS } from './mainRecommItem'
import { StyledMainRecommList, StyledMainRecommItem } from './MainRecomm.styles'

const MainRecommProduct = () => {
  const mainRecommValue = useAtomValue(MainRecommAtom)
  return (
    <StyledMainRecommList>
      {MAINRECOMM_ITEMS.map((el) => (
        <StyledMainRecommItem key={uuidv4()}>
          {el.map((item) => (
            <CurationCard
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
  )
}

export { MainRecommProduct }
