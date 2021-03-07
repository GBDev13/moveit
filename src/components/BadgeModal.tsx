import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { Overlay } from '../styles/components/BadgeModalStyles';

export function BadgeModal() {
  const {currentBadge, closeBadgeModal} = useContext(ChallengesContext);

  return (
    <Overlay>
      <div className="container">
        <div>
          <header>
            <img src={currentBadge.image}/>
          </header>

          <strong>Parabéns</strong>
          <p>{currentBadge.description}</p>

          <button type="button" onClick={closeBadgeModal}>
            <img src="/icons/close.svg" alt="Fechar modal"/>
          </button>
        </div>
      </div>
    </Overlay>
  )
}