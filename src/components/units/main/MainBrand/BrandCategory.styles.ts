import { css } from '@emotion/react'
import styled from '@emotion/styled'

interface IStyledCategoryLinkProps {
  isActive: boolean
}

export const StyledBrandCategoryWrap = styled.div`
  padding: 20px 0;
`

export const StyledBrandCategoryList = styled.ul`
  display: flex;
  justify-content: center;
`

export const StyledBrandCategoryItem = styled.li`
  margin-right: 8px;
`

export const StyledCategoryLink = styled.a<IStyledCategoryLinkProps>`
  display: block;
  padding: 5px 16px 6px;
  background: #fff;
  border: 1px solid #dadde0;
  border-radius: 20px;
  font-size: 14px;
  line-height: 21px;
  color: #757d86;

  ${(props) =>
    props.isActive &&
    css`
      background: #000;
      border: 1px solid #000;
      color: #fff;
    `}
`
