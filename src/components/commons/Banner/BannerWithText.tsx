import { Banner } from '.'
import { StyledTextList, StyledTextWrap } from './Banner.styles'

interface IBannerTextProps {
  url: string
  src: string
  width: string
  height: string
  title: string
  subTitle: string
  tag: string
}

const BannerWithText = ({ url, src, width, height, title, subTitle, tag }: IBannerTextProps) => {
  return (
    <StyledTextWrap>
      <Banner url={url} src={src} width={width} height={height}>
        <StyledTextList>
          <dt>{title}</dt>
          <dt>{subTitle}</dt>
          <dd>{tag}</dd>
        </StyledTextList>
      </Banner>
    </StyledTextWrap>
  )
}

export { BannerWithText }
