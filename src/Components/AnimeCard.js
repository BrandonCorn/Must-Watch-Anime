import React, { useState, useEffect, useRef } from 'react'

function AnimeCard(props) {
    const [showAnime, setShowAnime] = useState(true); 

    const domRef = useRef(); 
    useEffect( () => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach( entry => setShowAnime(entry.isIntersecting))
        })
        observer.observe(domRef.current); 
        return () => observer.unobserve(domRef.current)  

    })
    return (
        <div ref = {domRef} className = {`animate-${showAnime ? 'slide-in' : ''}`}> 
        <div className = 'flex justify-center mb-4'>
            <div className = 'w-1/2 m-4'>
                <img className = 'object-cover h-full w-full' src = {props.anime.image} alt = 'anime gif' />  
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