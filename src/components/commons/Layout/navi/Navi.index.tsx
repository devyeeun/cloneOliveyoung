import { v4 as uuidv4 } from 'uuid'
import { NavItem } from './NavItem'

import {
  StyledNaviWrapper,
  StyledNavItemWrap,
  StyledCategory,
  StyledNavItemList,
} from './Navi.styles'
import { MainCategory } from '../../../units/main/MainCategory'

const NAV_MENU_LIST = [
  '오특',
  '신상',
  '랭킹',
  '프리미엄관',
  '기획전',
  '세일',
  '기프트카드',
  '멤버십/쿠폰',
  '이벤트',
] as const

const GnBLayout = () => {
  return (
    <StyledNaviWrapper>
      <MainCategory />
      <StyledNavItemWrap>
        <StyledCategory>카테고리</StyledCategory>
        <StyledNavItemList>
          {NAV_MENU_LIST.map((text) => (
            <NavItem key={uuidv4()} text={text} />
          ))}
        </StyledNavItemList>
      </StyledNavItemWrap>
    </StyledNaviWrapper>
  )
}

export { GnBLayout }
