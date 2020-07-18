import React from 'react'

import { Link, useLocation } from 'react-router-dom'

function AnimeProfile(props){
    const location = useLocation(); 
    const anime = location.state.anime; 
    
    const color = (service) => {
        if (service.toLowerCase() === 'funimation'){
            return ( 
                <div className = 'mx-4 p-2 border rounded hover:opacity-75 w-1/5 text-center' style = {{backgroundColor: '#410099'}}> 
                    <a className = 'block' href = 'https://funimation.com'> 
                        {service}
                    </a> 
                </div> 
                
            )
        }
        else if (service.toLowerCase() === 'crunchyroll'){
            return (
                <div className = 'mx-4 p-2 border rounded hover:opacity-75 w-1/5 text-center' style = {{backgroundColor: '#df6300'}}> 
                    <a className = 'block' href = 'https://crunchyroll.com'> 
                        {service}
                    </a> 
                </div> 
            )
        }
        else if (service.toLowerCase() === 'hulu'){
            return (
                <div className = 'mx-4 p-2 border rounded hover:opacity-75 w-1/5 text-center' style = {{backgroundColor: '#3DBB3D'}}> 
                    <a className = 'block' href = 'https://hulu.com'> 
                        {service}
                    </a> 
                </div> 
            )
        }
        else if (service.toLowerCase() === 'netflix'){
            return (
                <div className = 'mx-4 p-2 border rounded hover:opacity-75 w-1/5 text-center' style = {{backgroundColor: '#e50914'}}> 
                    <a className = 'block' href = 'https://netflix.com'> 
                        {service}
                    </a> 
                </div> 
            )
        }
    }
    
    return (
        <div className='flex m-10 animate-pop-in'>
            <div className='w-1/2'>
                <Link to='/anime'>
                    <div className='my-6 border-4 w-1/5 text-center hover:bg-gray-700'>
                        <span className='text-xl'> Back </span>
                    </div>
                </Link>
                <img src={anime.image[1]} />
                <div className='my-10'>
                    <ul>
                        <li className='table-row'>
                            <div className='table-cell w-1/3'>
                                <span className='font-bold text-lg italic'> Release Date:  </span>
                            </div>
                            <div className='table-cell '> {anime.release_date} </div>

                        </li>
                        <li className='table-row'>
                            <div className='table-cell'>
                                <span className='font-bold text-lg italic'> Genres: </span>
                            </div>
                            <div className='table-cell'>
                                {anime.genres.map(genre => genre + " ")}
                            </div>
                        </li>
                        <li className='table-row'>
                            <div className='table-cell'>
                                <span className='font-bold text-lg italic'> Audio: </span>
                            </div>
                            <div className='table-cell'>
                                {anime.audio.map(audio => audio + " ")}
                            </div>
                        </li>
                        <li className='table-row'>
                            <div className='table-cell'>
                                <span className='font-bold text-lg italic'> Subtitles: </span>
                            </div>
                            <div className='table-cell'>
                                {anime.subtitle.map(subtitle => subtitle + " ")}
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
                        &nbsp;
                        <li>
                            {anime.description[1]}
                        </li>
                    </ul>
                </div>
                <div className='flex justify-center my-6 inline'>
                    
                        {anime.stream_services.map(service => {
                            return color(service);  
                        })}                       

                    
                </div>
            </div>

        </div> 
    )
}

export default AnimeProfile; 