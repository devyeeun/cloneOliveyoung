import { v4 as uuidv4 } from 'uuid'
import { FACEBOOK, INSTAGRAM, KAKAO, YOUTUBE } from '../../../../commons/constants/oyUrl'

import {
  StyledFooter4Wrap,
  StyledFooter4Content,
  StyledCopyRight,
  StyledSnsWrap,
  StyledSnsImage,
} from './Footer.styles'

const SNS_LIST_ITEMS = [
  {
    URL: FACEBOOK,
    IMAGE_SRC: '/images/iconf_facebook.png',
  },
  {
    URL: INSTAGRAM,
    IMAGE_SRC: '/images/iconf_instagram.png',
  },
  {
    URL: YOUTUBE,
    IMAGE_SRC: '/images/iconf_youtube.png',
  },
  {
    URL: KAKAO,
    IMAGE_SRC: '/images/iconf_kakaotalk.png',
  },
] as const

const Footer4 = () => {
  return (
    <StyledFooter4Wrap>
      <StyledFooter4Content>
        <StyledCopyRight>Copyright ⓒ CJ OliveYoung. All Rights Reserved.</StyledCopyRight>
        <StyledSnsWrap>
          <h2>OLIVE YOUNG SNS</h2>
          {SNS_LIST_ITEMS.map((el) => (
            <a key={uuidv4()} href={el.URL}>
              <StyledSnsImage src={el.IMAGE_SRC} />
            </a>
          ))}
        </StyledSnsWrap>
      </StyledFooter4Content>
    </StyledFooter4Wrap>
  )
}

export { Footer4 }
