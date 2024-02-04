import { MainContent } from './MainContent'
import { GnBLayout } from '../../commons/Layout/navi/Navi.index'
import { HeaderLayout } from '../../commons/Layout/header/Header.index'
import { FooterLayout } from '../../commons/Layout/footer/Footer.index'

import { StyledContainer, StyledContent } from './main.styles'
import { CustomerBox } from './CustomerBox'

const MainPage = () => {
  return (
    <>
      <HeaderLayout />
      <GnBLayout />
      <StyledContainer>
        <StyledContent>
          <MainContent />
          <CustomerBox />
        </StyledContent>
      </StyledContainer>
      <FooterLayout />
    </>
  )
}
export { MainPage }
