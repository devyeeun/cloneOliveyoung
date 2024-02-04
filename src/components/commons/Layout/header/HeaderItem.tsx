import { StyledDelivery, StyledMyMenuDetail } from './HeaderItem.styles'
interface HeaderItemProps {
  text: string
}

const TopUtilItem = ({ text }: HeaderItemProps) => {
  return (
    <li>
      <a>{text}</a>
    </li>
  )
}

const MyMenuItem = ({ text }: HeaderItemProps) => {
  return (
    <li>
      <a>{text}</a>
      {text === '오늘드림' ? <StyledDelivery /> : <StyledMyMenuDetail />}
    </li>
  )
}

export { TopUtilItem, MyMenuItem }
