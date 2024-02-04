import styled from '@emotion/styled'

import {
  StyledFooter3Content,
  StyledContentList,
  StyledIsmsLogo,
  StyledBar,
  StyledNcsiLogo,
} from './Footer.styles'
const Footer3 = () => {
  const Content = styled.div``
  return (
    <StyledFooter3Content>
      <StyledContentList>
        <StyledIsmsLogo>정보보호 관리체계 ISMS 인증획득</StyledIsmsLogo>
        <StyledBar>인증범위 : 온라인 쇼핑몰 운영(CJ올리브영)</StyledBar>
        <StyledBar>유효기간 : 2020.12.02 - 2023.12.01</StyledBar>
      </StyledContentList>
      <StyledContentList>
        <StyledNcsiLogo>
          2017~2022 국가고객만족도(NCSI) 헬스앤뷰티전문점 업계 최초 6년 연속 1위​
        </StyledNcsiLogo>
      </StyledContentList>
    </StyledFooter3Content>
  )
}

export { Footer3 }
