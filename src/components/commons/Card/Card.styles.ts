import styled from '@emotion/styled'

interface IThumImgProps {
  width: string
  height: string
}

export const StyledCurationCard = styled.a`
  display: flex;
  flex-direction: column;
  width: 215px;
  /* padding: 30px 20px 35px; */
`

export const StyledThumbImg = styled.span<IThumImgProps>`
  display: block;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: 0 auto;
`

export const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  src: ${(props) => props.src};
`

export const StyledProductName = styled.div`
  display: block;
  width: 215px;
  min-height: 40px;
  margin: 8px auto 0;
  text-decoration: none;
  white-space: normal;
  font-size: 14px;
`

export const StyledBrandName = styled.p`
  display: block;
  height: 20px;
  line-height: 20px;
  color: #777;
  font-weight: 700;
`

export const StyledName = styled.p`
  display: block;
  overflow: hidden;
  height: 40px;
  padding: 2px 0;
  line-height: 18px;
  text-overflow: ellipsis;
  word-break: keep-all;
  color: #000;
  text-align: left;
`

export const StyledProductPrice = styled.div`
  display: flex;
  align-items: baseline;
  position: relative;
  width: 215px;
  height: 25px;
  margin: 5px auto 0;
  line-height: 22px;
  text-align: left;
`

export const StyledOrgPriceWrap = styled.span`
  color: #a9a9a9;
  font-size: 12px;
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
  font-size: 20px;
  font-weight: 500;
  margin-left: 7px;

  > span {
    display: inline-block;
    font-size: 20px;
    vertical-align: -1px;
  }
`

export const StyledProductFlag = styled.div`
  width: 215px;
  margin: 5px auto 0;
  /* padding: 0 10px; */
  text-align: left;
`
