import { Dispatch, AnyAction } from 'redux'

// 액션 타입
const INCREASE = 'INCREASE'
const DECREASE = 'DECREASE'

interface IncreaseAction {
  type: typeof INCREASE
}

interface DecreaseAction {
  type: typeof DECREASE
}

interface ReduxTestState {
  number: number
}

// 액션 생성 함수
export const increase = (): IncreaseAction => ({ type: INCREASE })
export const decrease = (): DecreaseAction => ({ type: DECREASE })

export const increaseAsync = () => (dispatch: Dispatch<IncreaseAction>) => {
  setTimeout(() => dispatch(increase()), 1000)
}
export const decreaseAsync = () => (dispatch: Dispatch<DecreaseAction>) => {
  setTimeout(() => dispatch(decrease()), 1000)
}

const initialState: ReduxTestState = { number: 0 }

const ReduxTest = (
  state: ReduxTestState = initialState,
  action: IncreaseAction | DecreaseAction
) => {
  switch (action.type) {
    case INCREASE:
      return { ...state, number: state.number + 1 }
    case DECREASE:
      return { ...state, number: state.number - 1 }
    default:
      return state
  }
}

export { ReduxTest }
