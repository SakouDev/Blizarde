import React from 'react'

export default function Genres({genre, img}) {

    const styling = {

        background: `30% url('${img}')`
    }
    const stylingImage = {

        zIndex: 2,
        width: "350px",
        height: "200px"
    }

  return (           
        <div className='item'>
            <div className='overlay'>
                <img src={img} style={stylingImage} />
                <p className='centered'>{genre}</p>
            </div>
        </div>
  )
}