import React from 'react'

function AnimeCard(props) {
    return (
        <div className = 'flex justify-center mb-4 animate-slide-in'>
            <div className = 'w-1/2 m-4 h-64'
              style = {{
                'backgroundImage': `url(${props.anime.image})`
                }}>
            </div> 
            <div className = 'w-1/2 m-4'> 
                 <div> 
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

                //  style = {{
                //      'backgroundImage': `url(${props.anime.image})`
                //  }}>  
export default AnimeCard; 