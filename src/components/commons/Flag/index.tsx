import { StyledFlagIcon } from './Flag.styles'

interface IFlagProps {
  name: string
}

const Flag = ({ name }: IFlagProps) => {
  return <StyledFlagIcon name={name}>{name}</StyledFlagIcon>
}

export { Flag }
