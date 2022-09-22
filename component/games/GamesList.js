import React, { useEffect, useState } from 'react'
import { ApiService } from '../../api/axios'
import Games from './Games';

export default function GamesList({selectedGenre, selectedGenreId, setGameClicked,setSelectedGameId}) {

    const [apiGameData, setApiGameData] = useState([]);
    const [selectedGame, setSelectedGame]= useState([]);


    useEffect(() =>{
        ApiService.getGames(selectedGenreId).then(response => setApiGameData(response.data))
    },[selectedGenreId])
    
    const ChangeClicked = (e) => {
        e.preventDefault()
        setGameClicked(true)
        const eventData = e.target.dataset.game
        let Data = apiGameData.results.find(game => game.id == eventData)
        setSelectedGame(Data)
        setSelectedGameId(Data.id)
    }
    
  return {
    selectedGame,
    GameRender:(
            <>
                <h2>{selectedGenre.name}</h2>
                <div className='container'>
                    {apiGameData.results?.map( (game, index) => (
                        <div key={index} onClick={ChangeClicked} data-game={game.id}>
                            <Games game={game.name} image={game.background_image}/>
                        </div>
                    ))}
                </div>
            </>
        )
    }
}
