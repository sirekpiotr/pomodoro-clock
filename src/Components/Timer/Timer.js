import React from 'react'

import './Timer.scss'

const Timer = ({ actualTime }) => {
    const timeFormatter = (time) => {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60

        if (minutes < 10) {
            minutes = `0${minutes}`
        } 

        if (seconds < 10) {
            seconds = `0${seconds}`
        }

        return `${minutes}:${seconds}`
    }

    return(
        <div className='timer-container'>
            <h1 className='timer-time'>{timeFormatter(actualTime)}</h1>
        </div>
    )
}

export default Timer