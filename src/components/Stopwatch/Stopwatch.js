import React, { useState, useEffect } from 'react';
import Button from '../Buttons/Buttons';
import formatTime from '../TimeConverter/TimeConverter';
import styles from './StopWatch.module.scss';


const Timer = () => { // wyświetla czas przechowywany w stanie time w formacie HH:MM:SS:MS
  const [time, setTime] = useState(0); //Za pomocą hooka useState() definiowany jest stan time z domyślną wartością 0
  const [isRunning, setIsRunning] = useState(false); //isRunning sprawdza czy stoper jest uruchomiony a setIsRunning zmienia stan isRunning na true lub false

  useEffect(() => {
    let timeGo; //zmienna która przechowuje wartośći setInterval z hooka useEffect() w zależności od stanu isRunning (czyli czy stoper jest uruchomiony czy nie)

    if (isRunning) {
      timeGo = setInterval(() => setTime((prevValue) => prevValue + 10), 10); //Za pomocą hooka useEffect() definiowana jest funkcja, która co 10ms zwiększa wartość stanu time o 10
    }
    return () => clearInterval(timeGo); //Za pomocą hooka useEffect() definiowana jest funkcja, która po zatrzymaniu stopera czyści setInterval
  }, [isRunning]);

  const handleStart = () => { //funkcja która zmienia stan isRunning na true (czyli sprawdza czy stoper jest uruchomiony)
    setIsRunning(true);
  };

  const handleStop = () => { //funkcja która zmienia stan isRunning na false (czyli sprawdza czy stoper jest zatrzymany)
    setIsRunning(false);
  };

  const handleReset = () => { //funkcja która zmienia stan time na 0 (czyli sprawdza czy stoper jest zresetowany)
    setTime(0);
  };

  return (
    <div>
      <div className={styles.time}>{formatTime(time)}</div>
      <Button action={handleStart}>Start</Button>
      <Button action={handleStop}>Stop</Button>
      <Button action={handleReset}>Reset</Button>
    </div>
  );
};

export default Timer;
