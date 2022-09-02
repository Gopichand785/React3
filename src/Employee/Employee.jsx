import React from "react";
import User from "../user/User";
class Employee extends React.Component{
    render(){
        return(
            <>
            <pre>{JSON.stringify(this.props)}</pre>
        <h3>Employee Component</h3>
        <user/>
        </>
        )
    }
}
export default Employee