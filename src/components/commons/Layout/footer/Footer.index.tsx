import { Footer1 } from './Footer1'
import { Footer2 } from './Footer2'
import { Footer3 } from './Footer3'
import { Footer4 } from './Footer4'

import { StyledFooterWrapper } from './Footer.styles'

const FooterLayout = () => {
  return (
    <StyledFooterWrapper>
      <Footer1 />
      <Footer2 />
      <Footer3 />
      <Footer4 />
    </StyledFooterWrapper>
  )
}
export { FooterLayout }
