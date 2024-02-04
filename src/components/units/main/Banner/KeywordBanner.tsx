import { Banner } from '../../../commons/Banner'
import { useClickNextBtn } from '../../../commons/hooks/useClickNextBtn'
import { TitleText } from '../../../commons/Title'
import NextProduct from '../Curation/NextProduct'

import {
  StyledKeywordBanner,
  StyledKeywordBannerList,
  StyledKeywordBtn,
  StyledKeywordSubTitle,
  StyledKeywordTitleWrap,
} from './Banner.styles'

const KeywordBanner = () => {
  const { pageNum, handleClickBtn } = useClickNextBtn()

  return (
    <div>
      <TitleText text='Catch Keyword' />
      <StyledKeywordBanner>
        <StyledKeywordBannerList>
          <li>
            <Banner
              url='https://www.oliveyoung.co.kr/store/planshop/getPlanShopDetail.do?dispCatNo=500000102250079&trackingCd=Home_Catchkeyword'
              src='/images/keyword1.jpeg'
              width='500px'
              height='260px'
            />
            <StyledKeywordTitleWrap>
              <h3>
                <strong>검색량 3배 증가, 누브라</strong>
              </h3>
              <StyledKeywordSubTitle>안 입은 듯 가벼운 여름나기</StyledKeywordSubTitle>
            </StyledKeywordTitleWrap>
          </li>
          <li>
            <Banner
              url='https://www.oliveyoung.co.kr/store/planshop/getPlanShopDetail.do?dispCatNo=500000102250078&trackingCd=Home_Catchkeyword'
              src='/images/keyword2.jpeg'
              width='500px'
              height='260px'
            />
            <StyledKeywordTitleWrap>
              <h3>
                <strong>검색량 40% 증가, 워터프루프 </strong>
              </h3>
              <StyledKeywordSubTitle>여름 바캉스 떠나기 전에 준비해요</StyledKeywordSubTitle>
            </StyledKeywordTitleWrap>
          </li>
        </StyledKeywordBannerList>
      </StyledKeywordBanner>
      <StyledKeywordBtn>
        <NextProduct title='다른 키워드 더보기' onClick={handleClickBtn} pageNum={pageNum} />
      </StyledKeywordBtn>
    </div>
  )
}

export { KeywordBanner }
