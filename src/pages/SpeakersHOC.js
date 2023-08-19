import React from 'react'
import withData from '../Components/withData'

function Speakers({speakers}) {

  return (
    <div>
        {speakers.map(({imageSrc, name})=>{
            return <img src={imageSrc} alt={name} key={name}/>
        })}
    </div>
  )
}

// HOC
<withData/>

export default withData(2)(Speakers)