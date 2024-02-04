import React from 'react'

class Lifecycle extends React.Component {
  constructor() {
    super()
    console.log('constructor!!')
  }

  componentWillMount(): void {
    console.log('will mount!')
  }

  componentDidMount(): void {
    console.log('Did mount')
  }
  render(): React.ReactNode {
    console.log('render')
    return <div>OMG!</div>
  }
}

export { Lifecycle }
