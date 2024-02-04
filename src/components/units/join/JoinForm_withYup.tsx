import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { schema } from './validation'
import { Input } from '../../commons/Input/index'
import { ButtonStudy } from '../../commons/Button/index(study)'

import * as S from './JoinForm.styles'

interface IJoinFormData {
  email: string
  password: string
  phone: string
}

const JoinForm_Yup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IJoinFormData>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  })

  const onSubmitJoin = (data: IJoinFormData) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmitJoin)}>
      <S.Container>
        <S.JoinWrap>
          <S.Field>
            <label>이메일 : </label>
            <Input
              placeholder='이메일 주소를 입력하세요.'
              errorMsg={errors.email?.message}
              register={register('email')}
            />
          </S.Field>
          <S.Field>
            <label>비밀번호 : </label>
            <Input
              type='password'
              placeholder='비밀번호를 입력하세요.'
              errorMsg={errors.password?.message}
              register={register('password')}
            />
          </S.Field>
          <S.Field>
            <label>핸드폰 번호 : </label>
            <Input
              placeholder='핸드폰번호를 입력해주세요'
              errorMsg={errors.phone?.message}
              register={register('phone')}
            />
          </S.Field>
        </S.JoinWrap>
        <S.ButtonWrap>
          <ButtonStudy type='submit' variant="default" disabled={!isValid}>
            회원가입
          </ButtonStudy>
          <ButtonStudy type='reset'>Reset</ButtonStudy>
        </S.ButtonWrap>
      </S.Container>
    </form>
  )
}

export { JoinForm_Yup }
