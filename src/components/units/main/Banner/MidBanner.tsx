import { Banner } from '../../../commons/Banner'
import { StyledMidBanner } from './Banner.styles'

const MidBanner = () => {
  return (
    <StyledMidBanner>
      <Banner url={''} src={'/images/banner1.jpeg'} width={'508px'} height={'102px'} />
      <Banner url={''} src={'/images/banner2.jpeg'} width={'508px'} height={'102px'} />
    </StyledMidBanner>
  )
}

export { MidBanner }
