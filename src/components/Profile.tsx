import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import { Container } from '../styles/components/ProfileStyles'

export function Profile({sessions}) {
  const {level} = useContext(ChallengesContext)

  return (
      <Container>
        <img src={sessions.user.image} alt={sessions.user.name}/>
        <div>
          <strong>{sessions.user.name}</strong>
          <p>
            <img src="icons/level.svg" alt="Level"/>
            Level {level}
          </p>
        </div>
      </Container>
  )
}
