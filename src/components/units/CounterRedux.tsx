// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { decrease, decreaseAsync, increase, increaseAsync } from './ReduxTest'

// interface ReduxTestState {
//   number: number
// }

// const CounterRedux = () => {
//   const number = useSelector((state: ReduxTestState) => state.number)
//   const dispatch = useDispatch()

//   const onIncrease = (): void => {
//     dispatch(increaseAsync())
//   }
//   const onDecrease = (): void => {
//     dispatch(decreaseAsync())
//   }

//   return (
//     <div>
//       <h1>{number}</h1>
//       <button onClick={onIncrease}>+1</button>
//       <button onClick={onDecrease}>-1</button>
//     </div>
//   )
// }

// export { CounterRedux }
