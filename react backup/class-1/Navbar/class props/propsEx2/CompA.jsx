import React from 'react'
import CompB from './CompB'
const CompA = () => {
  let  ename= 'rahul'
    let    emessage ='good morning'
  return (
    <div>
        <h3>Component A</h3>
        <CompB one={"hello ravi"} two={"hello ram"} emp_name={ename} emp_message={emessage} />
    </div>
  )
}

export default CompA