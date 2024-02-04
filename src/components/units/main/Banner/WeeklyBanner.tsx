import { BannerWithText } from '../../../commons/Banner/BannerWithText'
import { TitleText } from '../../../commons/Title'

import { StyledWeeklyBanner,StyledWeeklyBannerList } from './Banner.styles'

const WeeklyBanner = () => {
  return (
    <div>
      <TitleText text='Weekly Special' />
      <StyledWeeklyBanner>
        <StyledWeeklyBannerList>
          <BannerWithText
            url='https://www.oliveyoung.co.kr/store/planshop/getPlanShopDetail.do?dispCatNo=500000102810054&trackingCd=Home_Planshop2_PROD'
            src='/images/week1.jpeg'
            width='500px'
            height='auto'
            title='문가영 PICK,'
            subTitle='감각적인 머스크향'
            tag='#~34% #샘플 3종 증정'
          />
          <BannerWithText
            url='https://www.oliveyoung.co.kr/store/planshop/getPlanShopDetail.do?dispCatNo=500000102700078&trackingCd=Home_Planshop2_PROD'
            src='/images/week2.jpeg'
            width='500px'
            height='auto'
            title='세럼 맛집 토리든'
            subTitle='효과적인 진정케어'
            tag='#30%할인 #키트증정'
          />
        </StyledWeeklyBannerList>
      </StyledWeeklyBanner>
    </div>
  )
}

export { WeeklyBanner }
