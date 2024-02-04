import { withTestComponent } from './hoc/withTestComponent'

 const TestComponent = () => {
  console.log('render됐다!')
  return <div>테스트입니다</div>
}

export default withTestComponent(TestComponent)
