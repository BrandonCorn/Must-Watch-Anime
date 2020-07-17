import React from 'react'

import { useLocation } from 'react-router-dom'

function AnimeProfile(props){
    const location = useLocation(); 
    const anime = location.state.anime; 
    console.log(anime); 
    return (
        <div className = 'flex m-10 animate-pop-in'> 
            <div className = 'w-1/2'> 
                <img src = {anime.image[1]} /> 
                <div className = 'my-10'> 
                    <ul> 
                        <li className = 'table-row'> 
                            <div className = 'table-cell w-1/3'>
                            <span className = 'font-bold text-lg italic'> Release Date:  </span> 
                            </div> 
                            <div className = 'table-cell '> {anime.release_date} </div> 
                            
                        </li> 
                        <li className = 'table-row'> 
                            <div className = 'table-cell'> 
                            <span className = 'font-bold text-lg italic'> Genres: </span> 
                            </div> 
                            <div className = 'table-cell'> 
                            {anime.genres.map( genre => genre + " ")}
                            </div> 
                        </li>
                        <li className = 'table-row'> 
                            <div className = 'table-cell'> 
                            <span className = 'font-bold text-lg italic'> Audio: </span> 
                            </div> 
                            <div className = 'table-cell'> 
                            {anime.audio.map( audio => audio + " ")}
                            </div> 
                        </li> 
                        <li className = 'table-row'> 
                            <div className = 'table-cell'> 
                            <span className = 'font-bold text-lg italic'> Subtitles: </span> 
                            </div> 
                            <div className = 'table-cell'> 
                            {anime.subtitle.map( subtitle => subtitle + " ")}
                            </div> 
                        </li> 
                    </ul> 
                </div> 
            </div> 
            <div className='w-1/2'>
                <div className='text-center mb-3'>
                    <span className='text-3xl'>
                        {anime.title}
                    </span>
                </div>
                <div>
                    <ul>
                        <li>
                            {anime.description[0]}
                        </li>
                        <li>
                            {anime.description[1]}
                        </li>
                    </ul>
                </div>
                <div className = 'flex justify-center my-4 inline'> 
                    <span className = ''> 
                        {anime.stream_services.map( service => service + "   ")}
                    </span> 
                </div> 
            </div> 
        </div> 
    )
}

export default AnimeProfile; 