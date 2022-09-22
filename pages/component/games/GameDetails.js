import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { ApiService } from '../../api/axios'

export default function GameDetails({selectedGame, selectedGameId}) {

  
  const [gameDetails, setGameDetails] = useState([])
  console.log(gameDetails)

  useEffect(()=>{
    ApiService.getGamesDetails(selectedGameId).then(response => setGameDetails(response.data))
  },[selectedGameId])

  return (
    <>
      <div className='gameContainer'>


        <div className='leftPart'>
          <Image src={gameDetails.background_image} alt='MENFOU' layout='fill'/>
        </div>


        <div className='rightPart container'>
          <h2>{gameDetails.name}</h2>
          <div>
            <h4>Description : </h4>
            <p className='description' >
              {gameDetails.description_raw}
            </p>
            <p>Metacritics : {gameDetails.metacritic}</p>
            <div>
              <h4>Date de sortie : </h4>{gameDetails.released}
            </div>
            <div>Platforme : &nbsp;
              {gameDetails.platforms?.map((data,index)=>{
                
                  let result = <p key={index}>{data.platform.name}, &nbsp;</p>
                  return result
                })}
            </div>
            <div>Genre : 
              {gameDetails.genres?.map((data,index)=>{
                let result = <p key={index}>{data.name} - &nbsp;</p>
                if(index == gameDetails.genres.length - 1) result = <p key={index}>{data.name}</p>
                return result
              })}
            </div>
            <div>
              Developers : &nbsp;
              {gameDetails.developers?.map((data,index)=>(
                <p key={index}> {data.name} -&nbsp;</p>
                ))}
                {/* <p>Devellopers : {gameDetails.developers.name}</p> */}
            </div>
          </div>
          <ul class="tags">
                  {gameDetails.tags?.map((data,index)=>{
                    let result = <li key={index} class="tag" >{data.name}</li>
                    return result
                  })}
          </ul>
        </div>
            

      </div>
    </>
  )
}

