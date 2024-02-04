const withTestComponent = (InComponent: any) => {
 return()=>{

     return <InComponent></InComponent>
 } 
}

export { withTestComponent }
