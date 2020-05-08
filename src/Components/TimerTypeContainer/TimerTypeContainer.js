import React from 'react'

import './TimerTypeContainer.scss'

const TimerTypes = [{
        name: 'Focus time',
        defaultTime: 1500
    }, {
        name: 'Short break',
        defaultTime: 300
    }, {
        name: 'Long break',
        defaultTime: 900
    }
]

const TimerTypeContainer = ({ setTimerTypeFunction }) => {
    return (
        <>
            <p className='timer-select-headline'>Select timer mode</p>
            <div className='timer-types-container'>
                <div className='timer-type' onClick={() => setTimerTypeFunction(TimerTypes[0])}>
                    <p className='timer-name'>Focus time</p>
                    <p>25 minutes</p>    
                </div>
                <div className='timer-type' onClick={() => setTimerTypeFunction(TimerTypes[1])}>
                    <p className='timer-name'>Short break</p>
                    <p>5 minutes</p>    
                </div>
                <div className='timer-type' onClick={() => setTimerTypeFunction(TimerTypes[2])}>
                    <p className='timer-name'>Long break</p>
                    <p>15 minutes</p>    
                </div>
            </div> 
        </>
    )
}

export default TimerTypeContainer