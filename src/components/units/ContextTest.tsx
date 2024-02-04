import { createContext, useContext } from 'react'
const MyContext = createContext('')
// const MyContext = createContext("default value")

const ContextTest = () => {
  return (
    // Provider 컴포넌트로 감싸지 않았을 경우, createContext 함수에 인자로 기본값을 넣어주면된다.
    <MyContext.Provider value='Hello World'>
      <GrandParent />
    </MyContext.Provider>
  )
}

const GrandParent = () => {
  return <Parent />
}

const Parent = () => {
  return <Message />
}

const Message = () => {
  const value = useContext(MyContext)
  return <div>{value}</div>
}

export { ContextTest } 