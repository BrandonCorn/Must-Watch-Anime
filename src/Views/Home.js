import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import { useTransition, animated } from 'react-spring'
// import Anime from './Anime'


function Home(){
    const [showMain, setShowMain] = useState(true); 

 
    let main = null; 
    if (showMain)
    main = 
        <div> 
            <div className='p-10 flex justify-center w-full animate-pop-in'>
                <img
                    src='https://media.giphy.com/media/qb1eHxhUHLdsc/giphy.gif'
                    alt='anime-gif'>
                </img>
            </div>
            <div className='p-5 flex justify-center animate-pop-in text-lg'>
                <span>
                    Your go to website for the anime your not watching and should be!
                </span>
            </div>
            <div className='flex justify-center mt-5 animate-pop-in'>
                <Link to = '/anime'> 
                <div
                className='flex-shrink border p-3 pl-10 pr-10 hover:bg-gray-700'
                onClick={() => setShowMain(!showMain)}>
                    <span>
                        Enter
                    </span>
                </div>
                </Link> 
            </div>
        </div> 

    return (
        <div> 
            {main}
           
        </div> 
    )

}

export default Home; 