import React from 'react'

const Title = (props) => {
  return (
    <div className="title">
        <h1 className="text-center text-2xl font-semibold mb-10">{props.lead}</h1>
    </div>
  )
}

export default Title