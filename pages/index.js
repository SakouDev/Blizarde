import { useEffect, useState } from 'react'
import GameDetails from '../component/games/GameDetails'
import GamesList from '../component/games/GamesList'
import GenresList from '../component/genres/GenresList'
export default function Home() {

  const [Clicked, setClicked] = useState(false)
  const [gameClicked, setGameClicked] = useState(false)
  const [selectedGenreId,setSelectedGenreId] = useState([])
  const [selectedGameId, setSelectedGameId]= useState([]);


  const {GenreRender, apiDataGenre ,selectedGenre} = GenresList({setClicked, setSelectedGenreId})

  const {GameRender, selectedGame} = GamesList({apiDataGenre,selectedGenreId,selectedGenre,setGameClicked, setSelectedGameId})


  const BackHome = (e) => {
    setClicked(false)
    setGameClicked(false)
  }
  const BackGenre = (e) => {
    setGameClicked(false)
  }
  
  return (
    <>
      <header>
        <h1 className="homeH1" >BLIZARDE</h1>
        <button onClick={BackHome} >Genres</button>
        <button onClick={BackGenre} >Games</button>
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
        <h2>Made with ♥</h2>
      </footer>
    </>
  )
}
