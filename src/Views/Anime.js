import React, { useState } from 'react'
import { useAxiosGet } from '../Hooks/HttpRequest'
import AnimeCard from '../Components/AnimeCard'

function Anime(){
    const url = 'https://5f10a1afd40d13001631d3a1.mockapi.io/api/v1/animes'; 
    const animes = useAxiosGet(url); 


    let content = ``; 

    if (animes.error) content = `<p> There was an error, something went wrong. </p> `

    // if (anime.loading){
    //     content = <Loader /> 
    // }

    if (animes.data){
        content = animes.data.map( anime => 
            <div key = {anime.id} > 
                <AnimeCard anime = {anime} /> 
            </div> 
        )
    }

    return (
        <div className = 'm-20'> 
         { content }
        </div> 
    )

}

export default Anime; 