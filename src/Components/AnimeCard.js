import React, { useState, useEffect, useRef } from 'react'


function AnimeCard(props) {
    const [showAnimeCard, setShowAnimeCard] = useState(true); 
    const domRef = useRef(); 
    

     
    useEffect( () => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach( entry => setShowAnimeCard(entry.isIntersecting))
        })
        observer.observe(domRef.current); 
        return () => observer.unobserve(domRef.current)  

    })

    
    return (
        <div ref = {domRef} className = {`animate-${showAnimeCard ? 'slide-in' : ''}`}> 
        <div className = 'flex justify-center mb-4'>
            <div className = 'w-1/2 m-4'>
                
                    <img className = 'object-fill h-full w-full' src = {props.anime.image[0]} 
                        alt = 'anime gif' />  
               
            </div> 
            <div className = 'w-1/2 m-4'> 
                 <div> 
                     <h2 className = 'font-bold p-3 italic text-4xl'> {props.anime.title} </h2> 
                    <ul> 
                        <li> 
                            {props.anime.description[0]}
                        </li> 
                        &nbsp; 
                        <li> 
                            {props.anime.description[1]}
                        </li> 
                    </ul> 
                 </div>
            </div> 
        </div> 
        </div>    
    )
    
}

export default AnimeCard; 