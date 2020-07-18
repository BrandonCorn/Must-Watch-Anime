import React, { useState } from 'react'
import { useAxiosGet } from '../Hooks/HttpRequest'
import AnimeCard from '../Components/AnimeCard'
import { Link } from 'react-router-dom'

function Anime(props){
    const [showAnime, setShowAnime] = useState(true); 
    const url = 'https://5f10a1afd40d13001631d3a1.mockapi.io/api/v1/animes'; 
    const animes = useAxiosGet(url); 
    
    let content = ``; 

    if (animes.error) content = `<p> There was an error, something went wrong. </p> `


    if (animes.data && showAnime){
        content = animes.data.map( anime => {
            const profile = `/anime/:${anime.id}`; 
            return (
            <div key = {anime.id} onClick = {() => setShowAnime(false)}> 
            <Link to = {{pathname: `${profile}`, state: {anime: anime}}}> 
                <AnimeCard anime = {anime}/> 
            </Link> 
            </div> 
            )
        })
    }


    return (
        <div className = 'm-20'> 
         { content }
        </div> 
    )

}

export default Anime; 