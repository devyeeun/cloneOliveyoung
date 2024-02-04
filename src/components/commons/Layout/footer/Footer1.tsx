import { v4 as uuidv4 } from 'uuid'
import { FamilyGroup } from './FamilyGroup'

import {
  StyledFooter1Wrap,
  StyledFooter1Content,
  StyledListMenu,
  StyledListMenuItem,
} from './Footer.styles'

const LIST_MENU_ITEMS = [
  '회사소개',
  '채용안내',
  '가맹점 개설문의',
  '상품입점 및 제휴문의',
  '사이버 감사실',
  '고객센터',
] as const

const Footer1 = () => {
  return (
    <StyledFooter1Wrap>
      <StyledFooter1Content>
        <StyledListMenu>
          {LIST_MENU_ITEMS.map((text) => (
            <StyledListMenuItem key={uuidv4()}>
              <a>{text}</a>
            </StyledListMenuItem>
          ))}
        </StyledListMenu>
        <FamilyGroup />
      </StyledFooter1Content>
    </StyledFooter1Wrap>
  )
}

export { Footer1 }
