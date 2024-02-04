// import { StyledModalContainer } from '../../../units/main/Curation/MoreCurationModal.styles'
import { Dimmer } from '../Dimmer'
import { StyledDialog } from './Dialog.styles'

interface IDialogProps {
  title: string
  onCloseModal?: () => void
  children: React.ReactNode
}

const Dialog = ({ title, onCloseModal, children }: IDialogProps) => {
  return (
    <Dimmer>
      <StyledDialog role='dialog' aria-modal='true'>
        <div>{title}</div>
        <div>{children}</div>
      </StyledDialog>
    </Dimmer>
  )
}

export { Dialog }
