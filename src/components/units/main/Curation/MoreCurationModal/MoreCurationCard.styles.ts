import styled from '@emotion/styled'

interface IThumImgProps {
  width: string
  height: string
}
export const StyledCurationCard = styled.a`
  width: 255px;
`

export const StyledThumbImg = styled.span<IThumImgProps>`
  display: block;
  position: relative;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: 0 auto;

  ::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.06);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`

export const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  src: ${(props) => props.src};
`

export const StyledName = styled.p`
  width: 160px;
  height: 40px;
  font-size: 13px;
  text-align: left;
  color: #333;
  overflow: hidden;
  padding: 2px 0;
  line-height: 18px;
  text-overflow: ellipsis;
  word-break: keep-all;
`

export const StyledProductPrice = styled.div`
  text-align: left;
  height: 40px;
  display: flex;
  flex-direction: column;
  line-height: 18px;
`

export const StyledOrgPriceWrap = styled.span`
  color: #a9a9a9;
  font-size: 11px;
  text-decoration: line-through;
  vertical-align: middle;
  font-weight: 400;

  > span {
    display: inline-block;
    font-size: 14px;
    text-decoration: line-through;
    vertical-align: 0;
  }
`

export const StyledCurPriceWrap = styled.span`
  display: inline-block;
  color: #e02020;
  font-size: 12px;
  font-weight: 500;

  > span {
    display: inline-block;
    font-size: 20px;
    vertical-align: -1px;
  }
`

export const StyledProductFlag = styled.div`
  width: 100%;
  margin: 5px auto 0;
  text-align: left;
`
