import React from 'react'

const CompB = (props) => {
  return (
    <div>
        <h3>Component B</h3>
    <pre>{JSON.stringify(props)}</pre>
    </div>
  )
}

export default CompB