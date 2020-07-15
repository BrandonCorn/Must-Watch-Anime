import React, { useState, useRef, useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'
import styled from 'styled-components'


function Anime(props){

    return (
        <div className = 'flex justify-center animate-slide-in'> 
            <ul> 
                <li> 
                    Anime 1
                </li> 
                <li> 
                    Anime 2
                </li> 
            </ul> 
        </div>  
    )

}

export default Anime; 