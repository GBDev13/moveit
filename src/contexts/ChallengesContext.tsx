import {createContext, useState, ReactNode, useEffect} from 'react';
import challenges from '../../challenges.json';
import badges from '../../badges.json';
import { LevelUpModal } from '../components/LevelUpModal';
import axios from 'axios';
import { BadgeModal } from '../components/BadgeModal';

interface Challenge {
  type: 'body' | 'eye';
  description:string;
  amount:number
}

interface Badge {
  id:string;
  description:string;
  image:string;
}
interface UserBadge {
  badge_id:string;
  description:string;
  image:string;
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
  currentBadge:Badge;
}

interface ChallengesProviderProps {
  children: ReactNode
  id: string;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  totalExperience:number;
  user_badges:UserBadge[];
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({
  children,
  id,
  user_badges,
  ...rest
}:ChallengesProviderProps) {
  const [level,setLevel] = useState(rest.level ?? 1);
  const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0);
  const [totalExperience, setTotalExperience] = useState(rest.totalExperience ?? 0);
  const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0);

  const [activeChallenge, setActiveChallenge] = useState(null)
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false)
  const [isBadgeModalOpen, setIsBadgeModalOpen] = useState(false)
  const [currentBadge, setCurrentBadge] = useState({})
  const [acumullatedChallenges, setAcumullatedChallenges] = useState(0)

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

  useEffect(() => {
    Notification.requestPermission();
  }, [])

  function sendLevelBadge() {
    setIsLevelUpModalOpen(false);
    setIsBadgeModalOpen(true)
    const badge = badges.filter(badge => badge.id === `badgelevel${level + 1}`)[0];
    setCurrentBadge(badge)

    axios.put('/api/challenges', {id, badge_id: badge.id, description:badge.description, image:badge.image }).then((response) => {
      return response.data;
    }).catch((err) => {
      console.log(err)
    })
  }

  function sendChallengeBadge() {
    setIsLevelUpModalOpen(false);
    setIsBadgeModalOpen(true)
    const badge = badges.filter(badge => badge.id === `badgechallenges${challengesCompleted + 1}`)[0];
    setCurrentBadge(badge)

    axios.put('/api/challenges', {id, badge_id: badge.id, description:badge.description, image:badge.image }).then((response) => {
      return response.data;
    }).catch((err) => {
      console.log(err)
    })
  }

  function sendExperienceBadge(xp:number) {
    setIsLevelUpModalOpen(false);
    setIsBadgeModalOpen(true)
    const badge = badges.filter(badge => badge.id === `badgeexperience${xp}`)[0];
    setCurrentBadge(badge)

    axios.put('/api/challenges', {id, badge_id: badge.id, description:badge.description, image:badge.image }).then((response) => {
      return response.data;
    }).catch((err) => {
      console.log(err)
    })
  }

  function sendCicleBadge() {
    setIsLevelUpModalOpen(false);
    setIsBadgeModalOpen(true)
    const badge = badges.filter(badge => badge.id === `badgecicle${acumullatedChallenges + 1}`)[0];
    setCurrentBadge(badge)

    axios.put('/api/challenges', {id, badge_id: badge.id, description:badge.description, image:badge.image }).then((response) => {
      return response.data;
    }).catch((err) => {
      console.log(err)
    })
  }

  function levelUp() {
    setLevel(level + 1);
    setIsLevelUpModalOpen(true);

    const finalLevel = level + 1;
    if(finalLevel === 5 || finalLevel === 10 || finalLevel === 30 || finalLevel === 50 || finalLevel === 100) {
      sendLevelBadge()
    }

    axios.post('/api/challenges', {id, level: level + 1}).then((response) => {
      return response.data
    }).catch((err) => {
      console.log(err)
    })
  }

  function closeLevelUpModal() {
    setIsLevelUpModalOpen(false)
    setIsBadgeModalOpen(false)
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
    setAcumullatedChallenges(0);
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

    const finalChallenges = challengesCompleted + 1;
    if(finalChallenges === 5 || finalChallenges === 10 || finalChallenges === 30 || finalChallenges === 50 || finalChallenges === 100) {
      sendChallengeBadge()
    }

    setAcumullatedChallenges(acumullatedChallenges + 1);
    
    if(user_badges){
      if(totalExperience >= 5000) {
        if(!user_badges.filter(badge => {
          if(badge.badge_id === `badgeexperience5000`){
            return badge
          }
        }).length) {
          sendExperienceBadge(5000);
        }
      }
      if(totalExperience >= 10000) {
        if(!user_badges.filter(badge => {
          if(badge.badge_id === `badgeexperience10000`){
            return badge
          }
        }).length) {
          sendExperienceBadge(10000);
        }
      }
      if(totalExperience >= 20000) {
        if(!user_badges.filter(badge => {
          if(badge.badge_id === `badgeexperience20000`){
            return badge
          }
        }).length) {
          sendExperienceBadge(20000);
        }
      }
      if(acumullatedChallenges + 1 === 3 || acumullatedChallenges + 1 === 5) {
        if(!user_badges.filter(badge => {
          if(badge.badge_id === `badgecicle${acumullatedChallenges + 1}`){
            return badge
          }
        }).length) {
          sendCicleBadge();
        }
      }
    }

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
      totalExperience,
      currentBadge
      }}>
      {children}

      { isLevelUpModalOpen && <LevelUpModal />}
      { isBadgeModalOpen && <BadgeModal />}
    </ChallengesContext.Provider>
  )
}