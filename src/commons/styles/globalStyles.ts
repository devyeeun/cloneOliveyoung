import { css } from '@emotion/react'
import styled from '@emotion/styled'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/bundle'

export const globalStyles = css`
  @font-face {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 400;
    src: local(Montserrat-Light),
      url('https://static.oliveyoung.co.kr/pc-static-root/fonts/Montserrat-Light.woff2')
        format('woff2'),
      url('https://static.oliveyoung.co.kr/pc-static-root/fonts/Montserrat-Light.woff')
        format('woff');
  }

  @font-face {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    src: local(Montserrat),
      url('https://static.oliveyoung.co.kr/pc-static-root/fonts/Montserrat-Regular.woff2')
        format('woff2'),
      url('https://static.oliveyoung.co.kr/pc-static-root/fonts/Montserrat-Regular.woff')
        format('woff');
  }

  @font-face {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 700;
    src: local(Montserrat-SemiBold),
      url('https://static.oliveyoung.co.kr/pc-static-root/fonts/Montserrat-SemiBold.woff2')
        format('woff2'),
      url('https://static.oliveyoung.co.kr/pc-static-root/fonts/Montserrat-SemiBold.woff')
        format('woff');
  }

  html,
  body {
    font-family: Montserrat, '돋움', sans-serif;
    word-spacing: -1px;
    color: #666;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.04em;
  }
  * {
    margin: 0;
    box-sizing: border-box;
  }

  a,
  body,
  div,
  form,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  img,
  input,
  label,
  li,
  ol,
  p,
  select,
  span,
  textarea,
  ul {
    margin: 0;
    padding: 0;
    border: 0;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  ul,
  li {
    list-style: none;
  }

  button {
    text-align: center;
    color: #fff;
    border: 0;
    padding: 0;
    box-shadow: none;
    cursor: pointer;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 0;
    padding: 0;
    font-weight: normal;
    font-size: inherit;
  }
`

export const Wrapper = styled.div`
  width: 100%;
  min-width: 1020px;
`
