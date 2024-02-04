import { useForm } from 'react-hook-form'

interface IJoinFormData {
  email: string
  password: string
  number: number
}

const JoinForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IJoinFormData>()

  console.log(register)
  const onSubmitJoin = (data: IJoinFormData) => {}

  return (
    <form onSubmit={handleSubmit(onSubmitJoin)}>
      <div>
        <div>
          <label>이메일 :</label>
          <input
            type='text'
            placeholder='이메일 주소를 입력하세요.'
            {...register('email', { required: true, minLength: 2 })}
          />
          <div style={{ color: 'red' }}>
            {errors.email?.type === 'minLength' && '이름은 최소 2글자 이상이어야 합니다.'}
            {errors.email?.type === 'required' && '이름은 필수입니다.'}
          </div>
          <label>비밀번호 : </label>
          <input type='password' placeholder='비밀번호를 입력하세요.' {...register('password')} />
          <label>숫자만 : </label>
          <input type='number' {...register('number', { min: 18, max: 99, })} />
        </div>
        <div>
          <button type='submit'>회원가입</button>
        </div>
      </div>
    </form>
  )
}

export { JoinForm }
