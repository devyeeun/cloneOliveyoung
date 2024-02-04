import {
  StyledModalInfo,
  StyledInfoTitleWrap,
  StyledInfoTitle,
  StyledInfoSubTitle,
  StyledRecommendBox,
  StyledRecommendTagList,
  StyledSubTitleWrap,
  StyledRecommendSubTitle,
} from './MoreCurationModal.styles'

const ModalInfo = () => {
  return (
    <StyledModalInfo>
      <StyledInfoTitleWrap>
        <StyledInfoTitle>큐레이션</StyledInfoTitle>
        <StyledInfoSubTitle>김예은님을 위한 추천</StyledInfoSubTitle>
      </StyledInfoTitleWrap>
      <StyledRecommendBox>
        <StyledSubTitleWrap>
          <StyledRecommendSubTitle>
            프로필 관리로 더 정확한 상품 추천을 받으세요
          </StyledRecommendSubTitle>
          <a>수정</a>
        </StyledSubTitleWrap>
        <StyledRecommendTagList>
          <li>#건성</li>
          <li>#쿨톤</li>
          <li>#블랙헤드</li>
          <li>#홍조</li>
        </StyledRecommendTagList>
      </StyledRecommendBox>
    </StyledModalInfo>
  )
}

export { ModalInfo }
