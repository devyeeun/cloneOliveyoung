import { Link } from 'react-router-dom'
import { StyledLogoImg } from './Logo.styles'

interface ILogoProps {
  src: string
  size: 'small' | 'medium'
}

const Logo = ({ src, size }: ILogoProps) => {
  return (
    <>
      <Link to='/'>
        <StyledLogoImg src={src} size={size} />
      </Link>
    </>
  )
}

export { Logo }
