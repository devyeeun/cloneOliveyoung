import styled from '@emotion/styled'

export const DEFAULT_COLOR = {
  mainColor: '#9bce26', // 올리브영 연두색
  pink : "#f374B7",  // 오늘드림 플래그
  lightGray: '#f9f9f9',
  gray: '#e5e5e5',
  black: '#000',
  white: '#fff',
}

export const CommonBtn = styled.button`
  border: 1px solid lightgray;
  background: ${DEFAULT_COLOR.white};
  border-radius: 5px;
  padding: 10px;
  margin-right: 15px;
  font-size: 12px;
`
