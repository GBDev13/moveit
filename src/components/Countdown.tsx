import { useContext } from 'react'
import { CountdownContext } from '../contexts/CountdownContext'
import { Button } from '../styles/components/ButtonStyles';
import { Container } from '../styles/components/CountdownStyles';
import {ReactComponent as Cross} from '../../public/icons/cross.svg';
import {ReactComponent as Arrow} from '../../public/icons/arrow.svg';


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
      <Container>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </Container>

      {hasFinished ? (
        <Button
        disabled
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
            <Cross />
          </Button> 
        ): <Button
        type="button"
        onClick={startCountdown}
        >
          Iniciar um ciclo
          <Arrow />
        </Button>}
        </>
      )}

      
      
    </div>
  )
}