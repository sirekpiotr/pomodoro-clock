import React from "react"

import './TimerController.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faRedo } from '@fortawesome/free-solid-svg-icons'

const TimerController = ({ startTimerFunction, pauseTimerFunction, resetTimerFunction }) => {
    return (
        <div className='timer-controller-container'>
            <button className='button button-play' onClick={() => startTimerFunction()}>
                <FontAwesomeIcon style={{ marginRight: "10px" }}icon={faPlay}/>
                Play
            </button>
            <button className='button' onClick={() => pauseTimerFunction()}>
                <FontAwesomeIcon style={{ marginRight: "10px" }}icon={faPause}/>
                Pause
            </button>
            <button className='button' onClick={() => resetTimerFunction()}>
                <FontAwesomeIcon style={{ marginRight: "10px" }}icon={faRedo}/>
                Reset
            </button>
        </div>
    )
} 

export default TimerController