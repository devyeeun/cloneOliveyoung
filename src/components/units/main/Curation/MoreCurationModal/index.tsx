import { v4 as uuidv4 } from 'uuid'
import { ModalInfo } from './ModalInfo'
import { MoreCurationCard } from './MoreCurationCard'
import { MORE_CURATION_ITEMS } from './moreCurationItem'

import { StyledModalContent } from '../../../../commons/Modal/Modal.styles'
import {
  StyledTitle,
  StyledCurationListWrap,
  StyledCurationItemList,
  StyledCurationItem,
  StyledEscButton,
} from './MoreCurationModal.styles'

interface IMoreCurationProps {
  title: string
  onCloseModal?: () => void
}

const MoreCurationModal = ({ title, onCloseModal }: IMoreCurationProps) => {
  return (
    <>
      <StyledEscButton onClick={onCloseModal} />
      <StyledModalContent>
        <StyledTitle>{title}</StyledTitle>
        <ModalInfo />
        <StyledCurationListWrap>
          <ul>
            <StyledCurationItemList>
              {MORE_CURATION_ITEMS.map((el) => (
                <StyledCurationItem key={uuidv4()}>
                  <MoreCurationCard
                    src={el.src}
                    width={el.width}
                    height={el.height}
                    name={el.name}
                    OriginPrice={el.OriginPrice}
                    CurPrice={el.CurPrice}
                    flagStatus={el.flagStatus}
                  />
                </StyledCurationItem>
              ))}
            </StyledCurationItemList>
          </ul>
        </StyledCurationListWrap>
      </StyledModalContent>
    </>
  )
}

export { MoreCurationModal }
