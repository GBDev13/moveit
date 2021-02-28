import { useContext } from 'react'
import { CountdownContext } from '../contexts/CountdownContext'
import { Button } from '../styles/components/ButtonStyles';
import styles from '../styles/components/Countdown.module.css'


export function Countdown () {
  const {
    time,
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown} = useContext(CountdownContext)

  const [minuteLeft, minuteRight] = String(minutes).padStart(2 , '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2 , '0').split('');

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <Button
        disabled
        className={styles.countdownButton}
        >
          Ciclo encerrado
         <img src="/icons/check.svg" alt="Ciclo encerrado"/>
         </Button>
      ) : (
        <>
        {isActive ? (
          <Button
          type="button"
          className="countdownActive"
          onClick={resetCountdown}
          >
            Abandonar ciclo
          </Button> 
        ): <Button
        type="button"
        onClick={startCountdown}
        >
          Iniciar um ciclo
        </Button>}
        </>
      )}

      
      
    </div>
  )
}