import React from 'react'
import { Route, Routes } from 'react-router-dom'

// import { AtomWithStorage } from './components/units/AtomWithStorage'
// import { ContextTest } from './components/units/ContextTest'
// import { Counter } from './components/units/Counter'
// import { CounterJotai } from './components/units/CounterJotai'
// import { SelectAtom } from './components/units/SelectAtom'
// import { CounterRedux } from './components/units/CounterRedux'
// import { Exercise } from './components/units/Exercise'
// import { JoinForm } from './components/units/join/JoinForm'
// import { JoinForm_Yup } from './components/units/join/JoinForm_withYup'
// import { Lifecycle } from './components/units/Lifecycle'
// import { Main } from './components/units/Main'
// import { RenderPage } from './components/units/RenderPage'
// import { RenderStudy } from './components/units/RenderStudy'
// import { ShadowDom } from './components/units/ShadowDom'
// import TestComponent from './components/units/TestComponent'
// import { UseEffectStudy } from './components/units/useEffectStudy'
// import { UseMemoStudy } from './components/units/UseMemoStudy'
// import { UseRefStudy } from './components/units/UseRefStudy'
import { MainPage } from './components/units/main/index'

const App = () => {
  return (
    <Routes>
      {/* <Route path='/' element={<Main />} /> */}
      {/* <Route path='/InputPage' element={<RenderStudy />} />
      <Route path='/RenderPage' element={<RenderPage />} />
      <Route path='/ShadowDom' element={<ShadowDom />} />
      <Route path='/Lifecycle' element={<Lifecycle />} />
      <Route path='/Counter' element={<Counter />} />
      <Route path='/UseRefStudy' element={<UseRefStudy />} />
      <Route path='/UseEffectStudy' element={<UseEffectStudy />} />
      <Route path='/UseMemoStudy' element={<UseMemoStudy />} />
      <Route path='/ContextTest' element={<ContextTest />} />
      <Route path='/Exercise' element={<Exercise />} />
      <Route path='/CounterRedux' element={<CounterRedux />} />
      <Route path='/CounterJotai' element={<CounterJotai />} />
      <Route path='/SelectAtom' element={<SelectAtom />} />
      <Route path='/AtomWithStorage' element={<AtomWithStorage />} />
      <Route path='/TestComponent' element={<TestComponent />} />
      <Route path='/JoinForm' element={<JoinForm />} />
      <Route path='/JoinForm_Yup' element={<JoinForm_Yup />} /> */}
      <Route path='/' element={<MainPage />} />
    </Routes>
  )
}

export { App }
