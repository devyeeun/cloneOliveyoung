import * as yup from 'yup'

export const schema = yup.object({
  email: yup
    .string()
    .required('이메일을 입력해주세요.')
    .matches(
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
      '이메일양식을 확인해주세요.'
    ),
  password: yup
    .string()
    .min(4, '비밀번호는 최소 4자리 이상 입력해주세요.')
    .max(15, '비밀번호는 최대 15자리로 입력해주세요.')
    .required('비밀번호는 필수 입력입니다.'),
  phone: yup
    .string()
    .required('핸드폰 번호를 입력해주세요.')
    .matches(/^\d{3}-\d{3,4}-\d{4}$/, '핸드폰 형식에 알맞지 않습니다.'),
})

