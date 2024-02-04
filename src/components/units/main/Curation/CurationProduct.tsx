import { v4 as uuidv4 } from 'uuid'

import NextProduct from './NextProduct'
import { CurationTitle } from './CurationTitle'
import { CurationCard } from '../../../commons/Card'
import { useClickNextBtn } from '../../../commons/hooks/useClickNextBtn'

import { StyledCartButton, StyledCurationCardWrap } from './Curation.styles'

interface CurationItem {
  key: string
  src: string
  width: string
  height: string
  name: string
  OriginPrice?: string
  CurPrice: string
  flagStatus: string[]
}
interface ICurationProps {
  title?: string
  items: CurationItem[]
  variant: string
}

export const CurationProduct = ({ title = '', items, variant }: ICurationProps) => {
  const { pageNum, handleClickBtn } = useClickNextBtn()

  // 현재 아이템 가져오기
  const getCurrentItems = () => {
    return items.filter((item) => item.key === String(pageNum))
  }

  const handleClickCart = () => {
    alert('카트에 담았다!')
  }

  return (
    <div>
      <CurationTitle variant={variant}>{title}</CurationTitle>
      <StyledCurationCardWrap>
        {getCurrentItems().map((el) => (
          <li key={uuidv4()}>
            <CurationCard
              src={el.src}
              width={el.width}
              height={el.height}
              name={el.name}
              OriginPrice={el.OriginPrice}
              CurPrice={el.CurPrice}
              flagStatus={el.flagStatus}
            />
            <StyledCartButton onClick={handleClickCart} />
          </li>
        ))}
      </StyledCurationCardWrap>
      <NextProduct title='다른상품 추천해드릴게요' onClick={handleClickBtn} pageNum={pageNum} />
    </div>
  )
}
