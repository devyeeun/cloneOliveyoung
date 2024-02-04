import { useLocation } from 'react-router-dom'

const RenderPage = () => {
  const location = useLocation()
  const inputValue = location.state?.inputValue

  return (
    <div>
      <h2>Render Page</h2>
      <p>Input Value : {inputValue} </p>
    </div>
  )
}

export { RenderPage }
