import { OnlyOnePaging } from './OnlyOnePaging'
import { TitleText } from '../../../commons/Title'
import { BannerWithText } from '../../../commons/Banner/BannerWithText'

import { StyledOnlyOneBanner, StyledOnlyOneBannerList, StyledOnlyOneWrap } from './OnlyOne.styles'

const OnlyOneBanner = () => {
  return (
    <StyledOnlyOneWrap>
      <TitleText text='오직 올리브영에서만' />
      <StyledOnlyOneBanner>
        <StyledOnlyOneBannerList>
          <BannerWithText
            url='https://www.oliveyoung.co.kr/store/planshop/getPlanShopDetail.do?dispCatNo=500000102810054&trackingCd=Home_Planshop2_PROD'
            src='/images/onlyone1.jpeg'
            width='334px'
            height='auto'
            title='토모토모PICK,'
            subTitle='수분진정그린티썬'
            tag='#7일특가#최대41%'
          />
          <BannerWithText
            url='https://www.oliveyoung.co.kr/store/planshop/getPlanShopDetail.do?dispCatNo=500000102700078&trackingCd=Home_Planshop2_PROD'
            src='/images/onlyone2.jpeg'
            width='334px'
            height='auto'
            title='웨이크메이크'
            subTitle='핑크한정기획'
            tag='핑크템 본품 증정'
          />
          <BannerWithText
            url='https://www.oliveyoung.co.kr/store/planshop/getPlanShopDetail.do?dispCatNo=500000102700078&trackingCd=Home_Planshop2_PROD'
            src='/images/onlyone3.jpeg'
            width='334px'
            height='auto'
            title='비건간식'
            subTitle='말랭이 특가!'
            tag='#복숭아#망고#군고구마'
          />
        </StyledOnlyOneBannerList>
        <OnlyOnePaging />
      </StyledOnlyOneBanner>
    </StyledOnlyOneWrap>
  )
}

export { OnlyOneBanner }
