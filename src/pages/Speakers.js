import React from 'react'
import SpeakersRenderProps from '../Components/SpeakerRenderProps'
function Speakers() {

  return (
    <SpeakersRenderProps>
      {({speakers})=>(
        <div>
          {
            speakers.map(({imageSrc, name})=>{
              return (
                <img src={imageSrc} alt={name} key={name} />
              )
            })
          }
        </div>
      )

      }
    </SpeakersRenderProps>

  )
}

export default Speakers