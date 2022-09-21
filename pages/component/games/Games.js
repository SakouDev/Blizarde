import React from 'react'

export default function Games({game, image}) {

  const stylingImage = {

    zIndex: 2,
    width: "350px",
    height: "200px"
}
  return (           
        <div className='gameItem'>
          <div className='overlay'>
            <img src={image} style={stylingImage}/>
            <p className='centered' >{game}</p>
          </div>
        </div>
  )
}