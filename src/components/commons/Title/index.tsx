import { StyledTextTitle } from "./Title.styles"

interface ITextProps {
  text: string
}

const TitleText = ({ text }: ITextProps) => {
  return (
      <StyledTextTitle>
        <strong>{text}</strong>
      </StyledTextTitle>
  )
}

export { TitleText }
