import {
  StyledHealthyCardImg,
  StyledHealthyCardImgWrap,
  StyledHealthyCardText,
  StyledHealthyCardTitle,
  StyleHealthyCardContent,
} from './HealthyLife.styles'

interface IHealthyLifeProps {
  src: string
  title: string
  content1: string
  content2: string
}

const HealthyLifeCard = ({ src, title, content1, content2 }: IHealthyLifeProps) => {
  return (
    <a>
      <StyledHealthyCardImgWrap>
        <StyledHealthyCardImg src={src} />
      </StyledHealthyCardImgWrap>
      <StyledHealthyCardText>
        <StyledHealthyCardTitle>{title}</StyledHealthyCardTitle>
        <StyleHealthyCardContent>
          {content1} <br /> {content2}
        </StyleHealthyCardContent>
      </StyledHealthyCardText>
    </a>
  )
}

export { HealthyLifeCard }
