import { css } from '@emotion/react'
import styled from '@emotion/styled'

interface ISearchProps {
  openHidden: boolean
}
export const StyledHeaderWrapper = styled.header`
  width: 1020px;
  margin: 0 auto;
`
// export const StyledHeader = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   margin: 0 auto;
//   max-width: 1020px;
//   height: 120px;
// `

export const StyledTopUtil = styled.div`
  position: relative;
  width: 100%;
  height: 30px;
  letter-spacing: -0.005em;
`

export const StyledItemWrap = styled.ul`
  overflow: hidden;
  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  flex-direction: row;

  > li {
    padding: 0 9px 0 10px;
    line-height: 30px;
    white-space: nowrap;
  }

  > li * {
    font-size: 12px;
    color: #333;
    white-space: nowrap;
  }

  > li + li {
    background: url('/images/bar.gif') 0 50% no-repeat;
  }
`

export const StyledHeaderInner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 90px;
  width: 1020px;
  justify-content: space-between;
`

export const StyledSearchBox = styled.div`
  position: relative;
  width: 340px;
  height: 40px;
  margin: 0 0 0 90px;
  padding: 0 45px 0 20px;
  border: 2px solid #9bce26;
  background: #fff;
  border-radius: 20px;
`

export const StyledInputArea = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`

export const StyledSearchLabel = styled.label<ISearchProps>`
  top: 0 !important;
  left: 0 !important;
  max-width: 95%;
  min-width: 95%;
  height: 36px;
  line-height: 37px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12px !important;

  ${(props) =>
    props.openHidden &&
    css`
      display: none;
    `}
`

export const StyledSearchInput = styled.input`
  /* position: absolute;
  left: 0; */
  height: 36px;
  border: 0;
  padding: 11px 10px 8px 0;
  font-size: 12px;
  background-color: transparent;
  font-size: 14px;
  line-height: 20px;
  color: #888;
  width: 100%;
  outline: none;
`
export const StyledSearchButton = styled.button`
  position: absolute;
  top: 7px;
  right: 18px;
  width: 21px;
  height: 21px;
  background: url('/images/ico_search.png') 50% 50% no-repeat;
  border: none;
`

export const StyledMenuItemWrap = styled.ul`
  display: flex;
  flex-direction: row;
  padding: 0 9px 0 10px;
  color: #000;
  line-height: 20px;

  > li {
    padding: 0 15px 0 16px;
  }

  > li + li {
    background: url('/images/bar.gif') 0 50% no-repeat;
  }
`

export const StyledMenuWrap = styled.div`
  display: flex;
  align-items: center;
`
