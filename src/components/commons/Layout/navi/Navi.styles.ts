import styled from '@emotion/styled'

export const StyledNaviWrapper = styled.div`
  position: relative;
  width: 100%;
  min-width: 1020px;
  height: 47px;
  background: #fff;
  border-top: 1px solid #ddd;
  border-bottom: 2px solid #555;
  z-index: 10;
`

export const StyledNavItemWrap = styled.div`
  position: relative;
  width: 1020px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  line-height: 44px;
  color: #000;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.04em;
`

export const StyledCategory = styled.div`
  width: 170px;
  height: 44px;
  padding-left: 27px;
  border-right: 1px solid #ddd;
  border-left: 1px solid #ddd;
  line-height: 44px;
  font-size: 15px;
  text-align: left;

  ::before {
    content: '';
    display: inline-block;
    margin: 0 8px 0 0;
    background: url('/images/ico_menu_off.png') 0 14px no-repeat;
    width: 24px;
    height: 44px;
    vertical-align: middle;
  }
`

export const StyledNavItemList = styled.div`
  display: flex;
  flex-direction: row;
`

export const StyledNavItem = styled.span`
  margin-left: 50px;
`
