import { PropsWithChildren, useState } from 'react'
import { Modal } from '../../../commons/Modal'
import ReactPortal from '../../../commons/Modal/ModalContainer'

import { StyledTitleWrap, StyledTitle, StyledButton } from './Curation.styles'
import { MoreCurationModal } from './MoreCurationModal'

interface ICurationTitleProps {
  variant: string
  children: React.ReactNode
}

const CurationTitle = ({ variant, children }: ICurationTitleProps) => {
  const [openMoreCuration, setOpenMoreCuration] = useState(false)

  // const customModalStyles = {
  //   overlay: {
  //     position: 'absolute',
  //     backgroundColor: ' rgb(0 0 0 / 70%)',
  //     top: '1%',
  //     width: '849px',
  //     left: '50%',
  //     marginLeft: '-424.5px',
  //     marginTop: '211px',
  //   },
  //   content: {
  //     width: '100%',
  //     height: '100%',
  //     top: 0,
  //     left: 0,
  //     right: 0,
  //     bottom: 0,
  //     border: '0px',
  //     borderRadius: '5px',
  //     outline: 'none',
  //     padding: '0px',
  //     backgroundColor: 'white',
  //   },
  // }

  return (
    <>
      <ReactPortal wrapperId='modal-wrapper'>
        {openMoreCuration && (
          <Modal>
            <MoreCurationModal
              title={
                variant === '1' ? '고객님에게 추천드리는 상품' : '최근 본 상품과 연관 추천 상품'
              }
              onCloseModal={() => setOpenMoreCuration(false)}
            />
          </Modal>
        )}
      </ReactPortal>
      <StyledTitleWrap>
        <StyledTitle>{children}</StyledTitle>
        <StyledButton onClick={() => setOpenMoreCuration(true)}>
          <span>더보기 {'>'}</span>
        </StyledButton>
      </StyledTitleWrap>
    </>
  )
}

export { CurationTitle }
