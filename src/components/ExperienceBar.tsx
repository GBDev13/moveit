import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { Container } from '../styles/components/ExperienceBarStyles';

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext)

  const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <Container>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />
        {currentExperience !== 0 && <span className="currentExperience" style={{ left: `${percentToNextLevel}%` }}><b>^</b> {currentExperience} xp</span>}
      </div>
      <span>{experienceToNextLevel} xp</span>
    </Container>
  );
}