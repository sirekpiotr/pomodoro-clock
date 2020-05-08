import React, { useState, useEffect } from 'react';

import './App.scss';
import Navbar from './Components/Navbar/Navbar'
import Timer from './Components/Timer/Timer'
import TimerController from './Components/TimerController/TimerController'
import TimerTypeContainer from './Components/TimerTypeContainer/TimerTypeContainer';

function App() {
  const [timerType, setTimerType] = useState({ 
    name: 'Focus time',
    defaultTime: 1500
  })

  const [time, setTime] = useState(timerType.defaultTime)
  const [passedTime, setPassedTime] = useState(0)

  let timer = null

  useEffect(() => {
    if (time > 0) {
      timer = setTimeout(() => setTime(time - 1), 1000)
    }
  }, [time])

  const resetTimer = () => {
    clearTimeout(timer)
    setTime(timerType.defaultTime)
  }

  const pauseTimer = () => {
    clearTimeout(timer)
    setPassedTime(timerType.defaultTime - time)
  }

  const startTimer = () => {
    if (timer !== null) { clearTimeout(timer) }
    setTime(timerType.defaultTime - passedTime - 1)
  }

  const setTimer = (newTimerType) => {
    setTimerType({ name: newTimerType.name, defaultTime: newTimerType.defaultTime })
    clearTimeout(timer)

    setTime(newTimerType.defaultTime)
  }

  return (
    <div className="app">
      <Navbar timerName={timerType.name} />
      <Timer actualTime={time} />
      <TimerController startTimerFunction={startTimer} pauseTimerFunction={pauseTimer} resetTimerFunction={resetTimer} />
      <TimerTypeContainer setTimerTypeFunction={setTimer} />
    </div>
  );
}

export default App;
