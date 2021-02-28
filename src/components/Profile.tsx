import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'

export function Profile({sessions}) {
  const {level} = useContext(ChallengesContext)

  return (
      <div className={styles.profileContainer}>
        <img src={sessions.user.image} alt={sessions.user.name}/>
        <div>
          <strong>{sessions.user.name}</strong>
          <p>
            <img src="icons/level.svg" alt="Level"/>
            Level {level}
          </p>
        </div>
      </div>
  )
}
