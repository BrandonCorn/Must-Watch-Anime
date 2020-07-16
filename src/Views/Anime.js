import React from 'react'
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
        content = animes.data.map( item => 
            <div> 
                <AnimeCard anime = {item} /> 
            </div> 
        )
    }

    return (
        // <div className = 'flex justify-center animate-slide-in'> 
        //     <ul> 
        //         <li> 
        //             Anime 1
        //         </li> 
        //         <li> 
        //             Anime 2
        //         </li> 
        //     </ul> 
        // </div>  
        <div> 
         { content }
        </div> 
    )

}

export default Anime; 