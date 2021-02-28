import {createContext, useState, ReactNode, useEffect} from 'react';
import challenges from '../../challenges.json';
import { LevelUpModal } from '../components/LevelUpModal';
import axios from 'axios';

interface Challenge {
  type: 'body' | 'eye';
  description:string;
  amount:number
}

interface ChallengesContextData {
  level:number,
  currentExperience: number;
  challengesCompleted:number;
  experienceToNextLevel:number;
  totalExperience:number;
  activeChallenge: Challenge;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
  completeChallenge: () => void;
  closeLevelUpModal: () => void;
}

interface ChallengesProviderProps {
  children: ReactNode
  id: string;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  totalExperience:number;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({
  children,
  id,
  ...rest
}:ChallengesProviderProps) {
  const [level,setLevel] = useState(rest.level ?? 1);
  const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0);
  const [totalExperience, setTotalExperience] = useState(rest.totalExperience ?? 0);
  const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0);

  const [activeChallenge, setActiveChallenge] = useState(null)
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false)

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

  useEffect(() => {
    Notification.requestPermission();
  }, [])

  function levelUp() {
    setLevel(level + 1);
    setIsLevelUpModalOpen(true);
    axios.post('/api/challenges', {id, level: level + 1}).then((response) => {
      return response.data
    }).catch((err) => {
      console.log(err)
    })
  }

  function closeLevelUpModal() {
    setIsLevelUpModalOpen(false)
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex]

    setActiveChallenge(challenge);

    new Audio('/notification.mp3').play();

    if(Notification.permission === 'granted') {
      new Notification('Novo desafio 🎉'), {
        body: `Valendo ${challenge.amount}xp!`
      }
    }
  }

  function resetChallenge() {
    setActiveChallenge(null)
  }

  function completeChallenge() {
    if (!activeChallenge) {
      return;
    }

    const { amount } = activeChallenge;

    let finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperience);
    axios.post('/api/challenges', {id, currentExperience: finalExperience}).then((response) => {
      return response.data
    }).catch((err) => {
      console.log(err)
    })

    setTotalExperience(totalExperience + amount);
    axios.post('/api/challenges', {id, totalExperience: totalExperience + amount}).then((response) => {
      return response.data
    }).catch((err) => {
      console.log(err)
    })

    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);
    axios.post('/api/challenges', {id, challengesCompleted: challengesCompleted + 1}).then((response) => {
      return response.data
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <ChallengesContext.Provider
    value={{
      level,
      currentExperience,
      challengesCompleted,
      startNewChallenge,
      experienceToNextLevel,
      levelUp,
      activeChallenge,
      resetChallenge,
      completeChallenge,
      closeLevelUpModal,
      totalExperience
      }}>
      {children}

      { isLevelUpModalOpen && <LevelUpModal />}
    </ChallengesContext.Provider>
  )
}