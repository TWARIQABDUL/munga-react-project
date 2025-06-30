import React from 'react'

function YellowButons({text,action,className}) {
  return (
    <button onClick={action} className={`more ${className}`}>{text}</button>
  )
}

export default YellowButons