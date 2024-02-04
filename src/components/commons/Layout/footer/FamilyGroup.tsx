import styled from '@emotion/styled'

const FamilyGroup = () => {
  const StyledFamilyGroupWrap = styled.div`
    position: absolute;
    top: 10px;
    right: 0;
    width: 235px;
    height: 30px;
    border-radius: 0;
    font-size: 12px;
  `

  const StyledFamilyOption = styled.div`
    display: block;
    height: 30px;
    padding: 0 10px;
    line-height: 30px;
    border: 1px solid #e5e5e5;
    background: url('https://static.oliveyoung.co.kr/pc-static-root/image/comm/ico_footer_arrow.png')
      95% 50% no-repeat #fff;
  `

  return (
    <StyledFamilyGroupWrap>
      <StyledFamilyOption>CJ그룹 계열사 바로가기</StyledFamilyOption>
    </StyledFamilyGroupWrap>
  )
}

export { FamilyGroup }
