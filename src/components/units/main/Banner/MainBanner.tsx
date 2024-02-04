import {
  StyledMainBanner,
  StyledBannerWrap,
  StyledStyledSlider,
  StyledSlideWrap,
  StyledBannerLink,
  StyledBannerDesc,
  StyledTitle,
  StyledSubTitle,
  StyledBannerImg,
  StyledSubDesc,
} from './Banner.styles'

const MainBanner = () => {
  const settings = {
    dots: false,
    infinite: true,
    // loop: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    // autoplaySpeed: 1500,
  }
  return (
    <StyledMainBanner>
      <StyledBannerWrap>
        <StyledStyledSlider {...settings}>
          <StyledSlideWrap>
            <StyledBannerLink>
              <StyledBannerDesc>
                <StyledTitle>올영 p!ck</StyledTitle>
                <StyledSubTitle>
                  올리브영이
                  <br />
                  p!ck한
                  <br />이 달의 브랜드
                </StyledSubTitle>
              </StyledBannerDesc>
              <StyledBannerImg src='/images/mb1.jpeg' />
            </StyledBannerLink>
          </StyledSlideWrap>
          <StyledSlideWrap>
            <StyledBannerLink>
              <StyledBannerDesc>
                <StyledTitle>LUXE EDIT</StyledTitle>
                <StyledSubTitle>
                  매일
                  <br />
                  업데이트되는
                  <br />
                  럭스에디트 특가
                  <StyledSubDesc>오늘의 특가아이템 확인하기</StyledSubDesc>
                </StyledSubTitle>
              </StyledBannerDesc>
              <StyledBannerImg src='/images/mb2.jpeg' />
            </StyledBannerLink>
          </StyledSlideWrap>
        </StyledStyledSlider>
      </StyledBannerWrap>
    </StyledMainBanner>
  )
}

export { MainBanner }
