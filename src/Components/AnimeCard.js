import React from 'react'

function AnimeCard(props) {
    return (
        <div className = 'flex justify-center mb-4 animate-slide-in'>
            <div className = 'w-1/2 m-4'>
                <img className = 'object-cover h-full w-full' src = {props.anime.image} />  
            </div> 
            <div className = 'w-1/2 m-4'> 
                 <div> 
                     <h2 className = 'font-bold p-3 italic text-4xl'> {props.anime.title} </h2> 
                    <ul> 
                        <li> 
                            {props.anime.description}
                        </li> 
                    </ul> 
                 </div>
            </div> 
        </div> 
    )
}

export default AnimeCard; 