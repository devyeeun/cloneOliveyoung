import styled from '@emotion/styled'
import { DEFAULT_COLOR } from '../../../../commons/styles/commonStyles'

export const StyledFooterWrapper = styled.footer`
  width: 100%;
  min-width: 1020px;
  margin: 40px 0 0;
  border-top: 2px solid #aaa;
  letter-spacing: 0;
`

/* Footer1 style*/
export const StyledFooter1Wrap = styled.div`
  background: ${DEFAULT_COLOR.lightGray};
  border-bottom: 1px solid #e5e5e5;
`

export const StyledFooter1Content = styled.div`
  height: 52px;
  width: 1020px;
  margin: 0 auto;
  position: relative;
`

export const StyledListMenu = styled.ul`
  overflow: hidden;
  display: flex;
`

export const StyledListMenuItem = styled.li`
  height: 52px;
  padding-top: 18px;
  background: url('/images/bar.gif') 0 50% no-repeat;
  :first-of-type {
    background: 0 0;
  }

  // li 요소 중 첫번째 a태그에만 스타일 적용
  :first-of-type > a {
    padding-left: 0;
  }

  > a {
    display: block;
    padding: 0 20px 0 21px;
    color: #000;
    font-size: 12px;
    line-height: 16px;
  }
`

/* Footer2 style*/
export const StyledFooter2Content = styled.div`
  width: 1020px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  margin-top: 25px;
  overflow: hidden;
`

export const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 70px;
`

export const StyledInfoList = styled.div`
  display: flex;
  justify-content: space-between;

  h2 {
    margin-bottom: 7px;
    color: #000;
    font-size: 12px;
    line-height: 20px;
  }

  p,
  a {
    color: #777;
    font-size: 12px;
    line-height: 20px;
  }
`

export const StyledCheckLink = styled.a`
  display: inline-block;
  margin-top: 10px;
  color: #000;
  border-bottom: 1px solid #333;
  line-height: 16px;
`

export const StyledNoti = styled.div`
  color: #777;
  font-size: 11px;
  line-height: 15px;
  margin: 20px 0 30px;
`

/* Footer3 style*/
export const StyledFooter3Content = styled.div`
  width: 1020px;
  margin: 0 auto;
  border-top: 1px solid #ddd;
  display: flex;
  justify-content: space-around;
`

export const StyledContentList = styled.li`
  color: #777;
  font-size: 11px;
  line-height: 53px;

  :first-of-type {
    margin-right: 28px;
  }
`

export const StyledBar = styled.span`
  ::before {
    content: '|';
    display: inline-block;
    margin: 0 5px;
    color: #777;
    font-size: 11px;
  }
`

export const StyledIsmsLogo = styled.span`
  ::before {
    content: '';
    display: inline-block;
    vertical-align: middle;
    width: 26px;
    height: 26px;
    background: url('/images/foot_isms.png') no-repeat;
    margin: 0 7px 1px 0;
  }
`

export const StyledNcsiLogo = styled.span`
  ::before {
    content: '';
    display: inline-block;
    vertical-align: middle;
    width: 30px;
    height: 20px;
    background: url('images/foot_ncsi.png') no-repeat;
    margin: 0 7px 2px 0;
  }
`

/* Footer4 style*/

export const StyledFooter4Wrap = styled.div`
  background: ${DEFAULT_COLOR.lightGray};
  border-top: 1px solid #e5e5e5;
`

export const StyledFooter4Content = styled.div`
  width: 1020px;
  height: 40px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`

export const StyledCopyRight = styled.div`
  padding: 11px 0 0;
  color: #888;
  font-size: 11px;
  line-height: 18px;
  font-weight: 700;
`

export const StyledSnsWrap = styled.div`
  padding: 9px 0 0;
  display: flex;

  > h2 {
    margin-right: 4px;
    color: #aaa;
    font-size: 12px;
    padding: 3px 0 0;
  }

  > a {
    margin: 0 8px;
    font-size: 0;
    line-height: 0;
    vertical-align: top;
  }
`

export const StyledSnsImage = styled.img`
  height: 22px;
  src: ${(props) => props.src};
`
