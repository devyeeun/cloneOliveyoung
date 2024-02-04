import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const StyledMainCategoryWrap = styled.div`
  position: absolute;
  top: 46px;
  left: 50%;
  height: 450px;
  margin-left: -510px;
  background: rgba(51, 51, 51, 0.5);
  z-index: 10;
`

export const StyledCategoryList = styled.ul`
  position: relative;
  display: inline-block;
  width: 170px;
  padding-top: 15px;
`

export const StyledCategoryItem = styled.li`
  :hover {
    background-color: #2f3030;
  }
`

export const StyledCategoryMenu = styled.a`
  display: block;
  width: 170px;
  height: 28.5px;
  line-height: 28.5px;
  padding: 0 23px;
  font-size: 14px;
  color: #fff;
  font-weight: 700;
`

export const StyledSubCategoryList = styled.ul`
  display: block;
  position: absolute;
  z-index: 5;
  top: 0;
  left: 170px;
  width: 170px;
  height: 450px;
  background: #fff;
  border-right: 1px solid #f4f5f7;
  border-bottom: 1px solid #f4f5f7;
  padding: 22px 0 0 24px;
`

export const StyledSubCategoryItem = styled.li`
  display: block;
  text-decoration: none;
  color: #333;
`

export const StyledSubMenu = styled.a`
  display: block;
  height: 27px;
  padding-left: 12px;
  line-height: 18px;
  font-size: 12px;
  color: #757d86;
  font-weight: 400;
`

export const StyledSubMenuName = styled.span`
  :hover {
    border-bottom: 1px solid #757d86;
  }
`
