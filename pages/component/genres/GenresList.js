import React, { useEffect, useState } from 'react'
import { ApiService } from '../../api/axios'
import Genres from './Genres'

export default function GenresList({setClicked, setSelectedGenreId}) {

    const [apiDataGenre, setApiDataGenre] = useState([])
    const [selectedGenre, setSelectedGenre] = useState([])
    

    useEffect(() => {
        ApiService.get("genres").then(response => setApiDataGenre(response.data))
    },[])


    const ChangeClicked = (e) => {
        e.preventDefault()
        setClicked(true)
        const eventData = e.target.dataset.genre
        let Data = apiDataGenre.results.find(genre => genre.id == eventData)
        setSelectedGenre(Data)
        setSelectedGenreId(Data.id)
    }

  return {
    selectedGenre,
    apiDataGenre,
    GenreRender:(
        <>
            <h2>Genres :</h2>
            <div className='container'>
                {apiDataGenre.results?.map( (genre, index) => (
                    <div key={index} onClick={ChangeClicked} data-genre={genre.id}>
                        <Genres genre={genre.name} img={genre.image_background}/>
                    </div>
                ))}
            </div>
        </>
    )
    }
}
