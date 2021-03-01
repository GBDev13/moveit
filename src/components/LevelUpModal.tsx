import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { Overlay } from '../styles/components/LevelUpModalStyles';
import {ReactComponent as Twitter} from '../../public/icons/twitter.svg';

export function LevelUpModal() {
  const {level, challengesCompleted, totalExperience, closeLevelUpModal} = useContext(ChallengesContext);

  return (
    <Overlay>
      <div className="container">
        <div>
          <header>{level}</header>

          <strong>Parabéns</strong>
          <p>Você alcançou um novo level.</p>

          <button type="button" onClick={closeLevelUpModal}>
            <img src="/icons/close.svg" alt="Fechar modal"/>
          </button>
        </div>

        <footer>
          <button type="button">
            <a href={`https://twitter.com/intent/tweet?text=${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/${level}/${challengesCompleted}/${totalExperience}`}>Compartilhar no Twitter <Twitter /></a>
            </button>
        </footer>
      </div>
    </Overlay>
  )
}