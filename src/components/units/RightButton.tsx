import React from 'react'

interface IIncreseProps {
  increasing: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const increaseCurrentValue = () => ({
  type: 'INCREASE_VALUE',
})

const RightButton = (props: IIncreseProps) => {
  return (
    <button type='button' onClick={props.increasing}>
      더하기
    </button>
  )
}

export { RightButton }
