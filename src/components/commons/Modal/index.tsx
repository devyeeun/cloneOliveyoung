import { MoreCurationModal } from '../../units/main/Curation/MoreCurationModal'
import { StyledModalOverlay, StyledModalWrap } from './Modal.styles'

interface IModalProps {
  children: React.ReactNode
}

// 기본 모달 : FullScreen
const Modal = ({ children }: IModalProps) => {
  return (
    <StyledModalOverlay>
      <StyledModalWrap>{children}</StyledModalWrap>
    </StyledModalOverlay>
  )
}

// 하단에서 올라오는 모달
const BottomModal = () => {
    return(
        <></>
    )
}

Modal.BottomModal = BottomModal;

export { Modal }
