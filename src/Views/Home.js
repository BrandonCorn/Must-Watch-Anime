import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { useTransition, animated } from 'react-spring'

function Home(){
    const [showMain, setShowMain] = useState(true); 
    const transitions = useTransition(showMain, null,{
        from: {opacity: 0, transform: 'translateY(-100%)'}, 
        enter: { opacity: 0, transform: 'translateY(0%)'}, 
        leave: { opacity: 1, transform: 'translateY(100%)'}
    })
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
                Your go to website for the anime your not watching and should be watching.
            </span>
        </div>
        <div className='flex justify-center mt-5 animate-pop-in'>
            <div
                className='flex-shrink border p-3 pl-10 pr-10 hover:bg-gray-700'
                onClick={() => setShowMain(!showMain)}>
                <span>
                    Enter
                </span>
            </div>
        </div>
    </div> 
    return (
        <div> 
            {/* <div className='p-10 flex justify-center w-full animate-pop-in'>
                <img
                    src='https://media.giphy.com/media/qb1eHxhUHLdsc/giphy.gif'
                    alt='anime-gif'>
                </img>
            </div>
            <div className='p-5 flex justify-center animate-pop-in text-lg'>
                <span>
                    Your go to website for the anime your not watching and should be watching.
                </span>
            </div>
            <div className='flex justify-center mt-5 animate-pop-in'>
                <div
                    className='flex-shrink border p-3 pl-10 pr-10 hover:bg-gray-700'
                    onClick={() => setShowMain(!showMain)}>
                    <span>
                        Enter
                    </span>
                </div>
            </div> */}
            {main}
            {
                transitions.map( ({ item, key, props}) => 
                    item && 
                    <animated.div
                        key = {key}
                        style = {props}
                        className = 'font-bold flex justify-center'
                    > 
                        this is a test
                    </animated.div> 
                )
            }
        </div> 
    )

}

export default Home; 