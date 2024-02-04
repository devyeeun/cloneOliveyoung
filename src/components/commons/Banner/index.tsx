import { StyledBanner } from './Banner.styles'

interface IBannerProps {
  url?: string
  src: string
  width: string
  height: string
  children?: any
}

const Banner = ({ url = '/', src, width, height, children }: IBannerProps) => {
  return (
    <StyledBanner to={url}>
      <img src={src} width={width} height={height} />
      {children}
    </StyledBanner>
  )
}

export { Banner }
