import React from "react";
class CompB extends  React.Component{
 render(){
    return <>
        <h2>Component B</h2>
        <pre>{JSON.stringify(this.props)}</pre>
    </>
 }
}
export default CompB