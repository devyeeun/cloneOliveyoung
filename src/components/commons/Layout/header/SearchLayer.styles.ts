import styled from '@emotion/styled'

export const StyledSearchLayer = styled.div`
  /* display: none; */
  position: absolute;
  top: 36px;
  left: -2px;
  width: 340px;
  background: #fff;
  border-left: 2px solid #9bce26;
  border-right: 2px solid #9bce26;
  border-bottom: 2px solid #9bce26;
  border-top: 1px solid #ddd;
  border-radius: 0 0 20px 20px;
  z-index: 12;
`

export const StyledInnerLayer = styled.div`
  position: relative;
  width: 100%;

  ::before {
    content: '';
    position: absolute;
    top: -19px;
    left: -2px;
    width: 18px;
    height: 18px;
    border-left: 2px solid #9bce26;
    background: #fff;
  }

  ::after {
    content: '';
    position: absolute;
    top: -19px;
    right: -2px;
    width: 18px;
    height: 18px;
    border-right: 2px solid #9bce26;
    background: #fff;
  }
`

export const StyledSearchTabLeft = styled.a`
  position: absolute;
  width: 50%;
  color: #888;
  line-height: 48px;
  text-align: center;
  border-bottom: 2px solid #ddd;
  font-weight: 700;
  left: 0;
  top: 0;
`

export const StyledSearchTabRight = styled(StyledSearchTabLeft)`
  left: 50%;
  top: 0;
`

export const StyledTabContent = styled.div`
  display: block;
  padding-top: 50px;
`

export const StyledTabContentList = styled.ul`
  padding: 10px 20px;
`

export const StyledTabContentItem = styled.li`
  position: relative;
  width: 100%;

  > a {
    display: block;
    max-width: 90%;
    line-height: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 12px;
    color: #777;
  }
`
export const StyledSearchResultEsc = styled.button`
  position: absolute;
  top: 10px;
  right: 0;
  width: 9px;
  height: 9px;
  text-indent: -9999px;
  background: url('/images/ico_close9x9.png') no-repeat;
`

export const StyledTabContentNodata = styled(StyledTabContentItem)`
  text-align: center;
  padding-top: 150px;
  height: 330px;
  color: #888;
`
