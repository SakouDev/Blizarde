import { useEffect, useState } from 'react'
import { ApiService } from './api/axios'
import GameDetails from './component/games/GameDetails'
import GamesList from './component/games/GamesList'
import GenresList from './component/genres/GenresList'

export default function Home() {

  const [Clicked, setClicked] = useState(false)
  const [gameClicked, setGameClicked] = useState(false)
  const [selectedGenreId,setSelectedGenreId] = useState([])
  const [selectedGameId, setSelectedGameId]= useState([]);


  const {GenreRender, apiDataGenre ,selectedGenre} = GenresList({setClicked, setSelectedGenreId})

  const {GameRender, selectedGame} = GamesList({apiDataGenre,selectedGenreId,selectedGenre,setGameClicked, setSelectedGameId})


  const Back = (e) => {
    setClicked(false)
    setGameClicked(false)
  }
  
  return (
    <>
      <header>
        <h1 className="homeH1" >BLIZARDE</h1>
        <button onClick={Back} >Acceuil</button>
      </header>

        { !Clicked ? 
          <>{GenreRender}</>
        : 
         (!gameClicked) ? 
          <>{GameRender}</>
          :
          <GameDetails selectedGame={selectedGame} selectedGameId={selectedGameId} />
        }

      <footer>
        <h2>Menfou</h2>
      </footer>
    </>
  )
}
