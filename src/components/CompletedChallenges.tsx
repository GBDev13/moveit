import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import { Container } from '../styles/components/CompletedChallengesTyles'

export function CompletedChallenges() {
  const {challengesCompleted} = useContext(ChallengesContext)

  return (
    <Container>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </Container>
  )
}