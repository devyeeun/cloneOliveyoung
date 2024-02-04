import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { DEFAULT_COLOR, CommonBtn } from '../../../commons/styles/commonStyles'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`

export const JoinWrap = styled.div`
  display: flex;
  flex-direction: column;
`

export const Field = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;

  & > label {
    width: 100px;
    font-size: 13px;
    text-align: start;
  }
`

export const InputWrap = styled.div`
  width: 100%;

  & > input {
    width: 100%;
    padding: 10px 0 10px 5px;
    border: 1px solid #bdbdbd;
    border-radius: 8px;
  }
`

export const ErrorMsg = styled.div`
  font-size: 11px;
  color: red;
`

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
`

export const JoinButton = styled(CommonBtn)`
  ${(props) =>
    !props.disabled &&
    css`
      :hover {
        background-color: black;
        color: ${DEFAULT_COLOR.white};
        cursor: pointer;
      }
    `}
`

export const ResetButton = styled(CommonBtn)`
  :hover {
    background-color: lightgray;
    color: ${DEFAULT_COLOR.white};
    cursor: pointer;
  }
`
