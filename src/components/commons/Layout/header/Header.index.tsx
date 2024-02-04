import { v4 as uuidv4 } from 'uuid'
import { Logo } from '../../Logo/Logo.index'
import { MyMenuItem, TopUtilItem } from './HeaderItem'

import {
  StyledHeaderWrapper,
  StyledTopUtil,
  StyledItemWrap,
  StyledHeaderInner,
  StyledMenuItemWrap,
  StyledMenuWrap,
} from './Header.styles'
import { SearchLayer } from './SearchLayer'
import { useRef, useState } from 'react'
import { SearchBox } from './SearchBox'

// 상수는 대문자, snake case
const TOP_UTIL_ITEMS = [
  '로그아웃',
  '마이페이지',
  '장바구니',
  '주문배송',
  '고객센터',
  '매장안내',
  'Global',
] as const

const MY_MENU_ITEMS = ['오늘드림', '관심 매장소식', '최근 본 상품'] as const

const HeaderLayout = () => {
  return (
    <StyledHeaderWrapper>
      <StyledTopUtil>
        <StyledItemWrap>
          <li>
            <strong>GOLD OLIVE 김예은</strong>
          </li>
          {TOP_UTIL_ITEMS.map((text) => (
            <TopUtilItem key={uuidv4()} text={text} />
          ))}
        </StyledItemWrap>
      </StyledTopUtil>
      <StyledHeaderInner>
        <h1>
          <Logo src='/images/logo.png' size={'medium'} />
        </h1>
        <SearchBox />
        <StyledMenuWrap>
          <StyledMenuItemWrap>
            {MY_MENU_ITEMS.map((text) => (
              <MyMenuItem key={uuidv4()} text={text} />
            ))}
          </StyledMenuItemWrap>
        </StyledMenuWrap>
      </StyledHeaderInner>
    </StyledHeaderWrapper>
  )
}
export { HeaderLayout }
