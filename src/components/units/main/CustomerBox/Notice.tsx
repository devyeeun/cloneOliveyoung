import { StyledNoticeArea, StyledTitle } from './CustomerBox.styles'

const NoticeArea = () => {
  return (
    <StyledNoticeArea>
      <StyledTitle>공지사항</StyledTitle>
      <p>새로운 소식이 없어요</p>
      <a>더보기 {'>'} </a>
    </StyledNoticeArea>
  )
}

export { NoticeArea }
