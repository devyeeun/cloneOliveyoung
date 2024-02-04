import React, { useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { MAIN_CATEGORY_LIST } from './categoryList'

import {
  StyledCategoryItem,
  StyledCategoryList,
  StyledCategoryMenu,
  StyledMainCategoryWrap,
  StyledSubCategoryItem,
  StyledSubCategoryList,
  StyledSubMenu,
  StyledSubMenuName,
} from './MainCategory.styles'

const MainCategory = () => {
  const [hoveredCategory, setHoveredCategory] = useState('')

  const handleCategoryHover = (event: any) => {
    const mainCategory = event.currentTarget.textContent
    setHoveredCategory(mainCategory)
  }

  const handleCategoryMenuLeave = () => {
    setHoveredCategory('')
  }

  return (
    <StyledMainCategoryWrap>
      <StyledCategoryList>
        {MAIN_CATEGORY_LIST.map((item) => (
          <StyledCategoryItem
            key={item.key}
            onMouseEnter={handleCategoryHover}
            onMouseLeave={handleCategoryMenuLeave}
          >
            <StyledCategoryMenu>{item.main}</StyledCategoryMenu>
            {hoveredCategory === item.main && item.sub && (
              <StyledSubCategoryList>
                {item.sub.map((subItem) => (
                  <StyledSubCategoryItem key={uuidv4()}>
                    <StyledSubMenu>
                      <StyledSubMenuName>{subItem}</StyledSubMenuName>
                    </StyledSubMenu>
                  </StyledSubCategoryItem>
                ))}
              </StyledSubCategoryList>
            )}
          </StyledCategoryItem>
        ))}
      </StyledCategoryList>
    </StyledMainCategoryWrap>
  )
}
export { MainCategory }
