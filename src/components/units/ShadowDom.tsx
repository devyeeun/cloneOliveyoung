import root from 'react-shadow'

const styles = `
.MainWrapper {
  text-align: center;
}

.MainTitle {
    color : red;
}
치
p {
    color: yellow;
  }

`

const ShadowDom = () => {
  return (
    <>
      <root.div>
        <div className='MainWrapper'>
          <h1 className='MainTitle'>Shadow Dom test</h1>
          <p>Test</p>
        </div>
        <style type='text/css'>{styles}</style>
      </root.div>
      <p>해보자!</p>
    </>
  )
}

export { ShadowDom }
