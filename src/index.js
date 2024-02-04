import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { atom, createStore, Provider } from 'jotai'
import Modal from 'react-modal'
// import { applyMiddleware, createStore } from 'redux'
// import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import { App } from './App'
import { ReduxTest } from './components/units/ReduxTest'
import { Wrapper } from './commons/styles/globalStyles'
import { Global } from '@emotion/react'
import { globalStyles } from '../src/commons/styles/globalStyles.ts'

/* 
1. Redux

*/
// saga 미들웨어를 생성
// const sagaMiddleware = createSagaMiddleware()

// // 스토어에 적용
// const store = createStore(ReduxTest, applyMiddleware(ReduxThunk, sagaMiddleware))

// // saga 실행
// sagaMiddleware.run(mySaga)

/* 
2) Jotai 

*/
// 1) createStore를 사용하여 빈 store를 만들기
//     => Provider를 활용해 store값을 컴포넌트로 넘길 수 있다.
// const myStore = createStore()

// 2) 초기값 atom 설정
export const countAtom = atom(10)
// const countryAtom = atom('Korea')
// const citiesAtom = atom(['Seoul', 'Gangwon', "Kyonggi"])

export const MainRecommAtom = atom(1)
export const OnlyOneAtom = atom(1)
export const MainPlanAtom = atom(1)
export const MainPlanSelectedPageAtom = atom(1)
export const MainRecommSelectedPageAtom = atom(1)
export const MainBrandSelectedBrandAtom = atom(1)

// Modal.setAppElement('#app')

const app = document.getElementById('app')
ReactDOM.createRoot(app).render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <Provider>
      <BrowserRouter>
        <Wrapper>
          <App />
        </Wrapper>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
