import React from 'react'

function Child({childData}) {
    const setChildData =()=>{
        childData("This is my child")
    }

  return (
    <button onClick={setChildData}>Display Child Data</button>
  )
}

export default Child