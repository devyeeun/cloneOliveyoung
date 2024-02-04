import { REC_ITEMS, SIMILAR_ITEMS } from './CurationItem'
import { CurationProduct } from './CurationProduct'

import { StyledCurationWrap } from './Curation.styles'

const Curation = () => {
  return (
    <StyledCurationWrap>
      <CurationProduct title={'유사한 고객님이 \n 많이 구매했어요'} items={SIMILAR_ITEMS} variant='1'/>
      <CurationProduct title='고객님을 위한 추천 상품' items={REC_ITEMS} variant='2'/>
    </StyledCurationWrap>
  )
}

export { Curation }
