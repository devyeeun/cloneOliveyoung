import { AppDownLink } from './AppDownLink'
import { CustomerArea } from './CustomerArea'
import { StyledCustomerBox } from './CustomerBox.styles'
import { NoticeArea } from './Notice'

const CustomerBox = () => {
  return (
    <StyledCustomerBox>
      <NoticeArea />
      <CustomerArea />
      <AppDownLink />
    </StyledCustomerBox>
  )
}

export { CustomerBox }
