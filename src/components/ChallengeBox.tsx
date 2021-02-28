
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import { ChallengeBoxContainer } from '../styles/components/ChallengeBoxStyles';

export function ChallengeBox() {
  const {activeChallenge, resetChallenge, completeChallenge} = useContext(ChallengesContext);
  const {resetCountdown} = useContext(CountdownContext);

  function handleChallengeSucceeded() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

  return (
    <ChallengeBoxContainer>
      {activeChallenge ? (
        <div className="challengeActive">

          <div>
            <header>Ganhe {activeChallenge.amount} xp</header>
            <main>
              <img src={`icons/${activeChallenge.type}.svg`} alt="Icone"/>
              <strong> {activeChallenge.type === "body" ? 'Exercite-se' : 'Mova os olhos'}</strong>
              <p>{activeChallenge.description}</p>
            </main>
          </div>

          <footer>
            <button
            type="button"
            className="challengeFailedButton"
            onClick={handleChallengeFailed}
            >Falhei</button>

            <button
            type="button"
            className="challengeSucceededButton"
            onClick={handleChallengeSucceeded}
            >Completei</button>
          </footer>
        </div>
      ) : (
        <div className="challengeNotActive">
        <strong>Inicie um ciclo para receber desafios a serem completados</strong>
        <p>
          <img src="icons/level-up.svg" alt="Level Up"/>
          Avance de level completando desafios.
        </p>
      </div>
      )}
    </ChallengeBoxContainer>
  )
}