import { StyledNavItem } from './Navi.styles'

interface INavItemProps {
  text: string
}

const NavItem = ({ text }: INavItemProps) => {
  return (
    <StyledNavItem>
      <a>{text}</a>
    </StyledNavItem>
  )
}

export { NavItem }
