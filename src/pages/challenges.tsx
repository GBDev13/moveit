import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";

import Head from 'next/head'

import styles from '../styles/pages/Home.module.css'
import { ChallengeBox } from "../components/ChallengeBox";
import { CountdownProvider } from "../contexts/CountdownContext";
import { GetServerSideProps } from "next";
import { ChallengesProvider } from "../contexts/ChallengesContext";
import { getSession } from "next-auth/client";
import {useRouter} from 'next/router'
import Layout from "../components/Layout";

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  sessions: object;
  user: object;
}

export default function Challenges(props:HomeProps) {
  const router = useRouter();

  if (typeof window !== 'undefined' && !props.sessions){
    router.push("/");
  }

  if (props.sessions) return (
    <ChallengesProvider id={props.sessions.userId} level={props.user.level} currentExperience={props.user.currentExperience} challengesCompleted={props.user.challengesCompleted} totalExperience={props.user.totalExperience}>
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Início | move.it</title>
        </Head>

        <ExperienceBar />
        
        <CountdownProvider>
          <section>
            <div>
              <Profile user={props.user} sessions={props.sessions}/>
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </Layout>
    </ChallengesProvider>
  )
  else return null
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  var obj;
  const session = await getSession(ctx)
  if(session){
    await fetch(`http://localhost:3000/api/challenges?id=${session.userId}`)
    .then(res => res.json())
    .then(data => obj = data)
  }
  if(!session){
    var obj = null;
  }
  
  return {
    props: {
      sessions: session,
      user: obj
    }
  }
}
