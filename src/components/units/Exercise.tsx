// createStore는 스토어를 만들어주는 함수
import { createStore } from 'redux'

interface IItemProps {
  id: number
  text: string
}

const Exercise = () => {
  /* 리덕스에서 관리 할 상태 정의 */
  const initialState = {
    counter: 0,
    text: '',
    list: [],
  }

  /* 액션 타입 정의 */
  // 액션 타입은 주로 대문자로 작성합니다.
  const INCREASE = 'INCREASE'
  const DECREASE = 'DECREASE'
  const CHANGE_TEXT = 'CHANGE_TEXT'
  const ADD_TO_LIST = 'ADD_TO_LIST'

  /* 액션 생성함수 정의 */
  const increase = () => {
    return {
      type: INCREASE, // type 필수
    }
  }

  const decrease = () => ({
    type: DECREASE,
  })

  const changeText = (text: string) => ({
    type: CHANGE_TEXT,
    text, // 액션안에는 type 외에 추가적인 필드를 마음대로 넣을 수 있습니다.
  })

  const addToList = (item: IItemProps) => ({
    type: ADD_TO_LIST,
    item,
  })

  /* 리듀서 만들기 */
  // 위 액션 생성함수들을 통해 만들어진 객체들을 참조하여 새로운 상태를 만드는 함수 만들기
  // 주의: 리듀서에서는 불변성을 꼭 지켜줘야 한다!

  const reducer = (state = initialState, action: any) => {
    // state 의 초깃값을 initialState 로 지정
    switch (action.type) {
      case INCREASE:
        return {
          ...state,
          counter: state.counter + 1,
        }
      case DECREASE:
        return {
          ...state,
          counter: state.counter - 1,
        }
      case CHANGE_TEXT:
        return {
          ...state,
          text: action.text,
        }
      case ADD_TO_LIST:
        return {
          ...state,
          list: state.list.concat(action.item),
        }
      default:
        return state
    }
  }

  /* 스토어 만들기 */
  const store = createStore(reducer)

//   console.log(store.getState()) // 현재 store 안에 들어있는 상태를 조회

  // 스토어안에 들어있는 상태가 바뀔 때 마다 호출되는 listener 함수
  const listener = () => {
    const state = store.getState()
    console.log(state)
  }

  const unsubscribe = store.subscribe(listener)
  // 구독을 해제하고 싶을 때는 unsubscribe() 를 호출하면 됩니다.

  // 액션 디스패치
  store.dispatch(increase())
  store.dispatch(decrease())
  store.dispatch(changeText('안녕하세요'))
  store.dispatch(addToList({ id: 1, text: '와우' }))
  return <></>
}

export { Exercise }
