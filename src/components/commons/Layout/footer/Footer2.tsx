import { Logo } from '../../Logo/Logo.index'

import {
  StyledFooter2Content,
  StyledInfo,
  StyledInfoList,
  StyledCheckLink,
  StyledNoti,
} from './Footer.styles'

const Footer2 = () => {
  return (
    <StyledFooter2Content>
      <Logo src='/images/logo.png' size={'small'} />
      <StyledInfo>
        <StyledInfoList>
          <li>
            <h2>씨제이올리브영 주식회사</h2>
            <p>대표이사 : 이선정 | 사업자등록번호 : 809-81-01574</p>
            <p>
              주소 : (04323) 서울특별시 용산구 한강대로 372, 24층 <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(동자동,
              KDB타워)
            </p>
            <p>호스팅사업자 : CJ 올리브네트웍스</p>
            <p>통신판매업신고번호 : 2019-서울용산-1428</p>
            <p>
              <a href='mailto:oliveweb@cj.net'>이메일 : oliveweb@cj.net</a>
            </p>
            <p>
              <StyledCheckLink>사업자 정보확인 {'>'}</StyledCheckLink>
            </p>
          </li>
          <li>
            <p>
              <a>이용약관 </a> ∙ <a> 법적고지</a>
            </p>
            <p>
              <a style={{ fontWeight: '700', color: '#333' }}>개인정보처리방침</a>
            </p>
            <p>
              <a>청소년보호방침</a>
            </p>
            <p>
              <a>영상정보처리기기 운영/관리 방침</a>
            </p>
            <p>
              <a>이메일무단수집거부</a>
            </p>
          </li>
          <li>
            <h2>하나은행 구매안전 서비스</h2>
            <p>
              올리브영은 현금 결제한 금액에 대해
              <br />
              하나은행과 채무지급보증 계약을체결
              <br />
              하여 안전한 거래를 보장하고 있습니다
            </p>
            <p>
              <StyledCheckLink>서비스 가입사실 확인 {'>'}</StyledCheckLink>
            </p>
          </li>
        </StyledInfoList>
        <StyledNoti>
          올리브영 홈페이지에서 판매되는 상품 중에는 올리브영에 입점한 개별 판매자가 판매하는 상품이
          포함되어 있습니다. 개별 판매자의 판매 상품의 경우, 올리브영은 통신판매중개자로서
          통신판매의 당사자가 아니며 판매자가 등록한 상품정보 및 거래 정보 등에 대하여 책임을
          부담하지 않습니다.
        </StyledNoti>
      </StyledInfo>
    </StyledFooter2Content>
  )
}

export { Footer2 }
