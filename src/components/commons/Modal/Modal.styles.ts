import Modal from 'react-modal'
import styled from '@emotion/styled'

export const StyledModalOverlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 9999;
`

export const StyledModalWrap = styled.div`
  width: 849px;
  height: fit-content;
  border-radius: 15px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const StyledModalContent = styled.div`
  padding: 30px 30px 0;
`
