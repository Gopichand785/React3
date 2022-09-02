import React from "react";
import CompB from "./CompB";
class CompA extends React.Component{
    eid=102
    ename="rahul"
        render(){
            return <>
                <h2>cxomponent A</h2>
                <CompB one={'gm'} two={'gn'} />
            </>
        }
}
export default CompA