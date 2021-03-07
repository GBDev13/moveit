import Head from 'next/head'

import { getSession } from "next-auth/client";
import {useRouter} from 'next/router'
import Layout from "../components/Layout";
import { GetServerSideProps } from "next";
import { Container } from "../styles/pages/ProfileStyles";
import { useState } from 'react';
import Loading from '../components/Loading';
import { ProfileModal } from '../components/ProfileModal';

interface Achievements{
  badge_id:string;
  description:string;
  image:string;
}

interface User{
  id: string;
  name:string;
  image:string;
  challengesCompleted:number;
  level:number;
  currentExperience:number;
  totalExperience:number;
  achievements:Achievements[];
}

interface ProfileProps {
  sessions: object;
  user: User;
}

export default function UserProfile({sessions,user}:ProfileProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentBadge, setCurrentBadge] = useState(false);
  const router = useRouter();

  if (typeof window !== 'undefined' && !sessions){
    router.push("/");
  }

  var restAray = [];
  if(user) {
    if(user.achievements){
      const rest = 15 - user.achievements.length;
      for(var i = 0; i < rest; i++){
        restAray.push(i); 
      }
    }
  }

  function defineBadge(badge) {
    setIsModalOpen(true)
    setCurrentBadge(badge)
  }

  function closeProfileModal() {
    setIsModalOpen(false)
  }


  if (sessions) return (
    <>
      {isModalOpen && <ProfileModal badge={currentBadge} closeProfileModal={closeProfileModal}/>}
      <Head>
        <title>Perfil {user.name} | move.it</title>
      </Head>
      <Layout>
        <Container>
          <header>
            <img src={user.image} alt={user.name}/>
            <h2>{user.name}</h2>
          </header>

          <section className="infos">
            <ul>
              <li>
                Nível atual <b>{user.level || 1}</b>
              </li>
              <li>
                Desafios concluídos <b>{user.challengesCompleted || 0}</b>
              </li>
              <li>
                Total de experiência <b>{user.totalExperience || 0}</b>
              </li>
            </ul>
          </section>

          <section className="grid">
            {user.achievements ? (
            <>
              <h3>Conquistas alcançadas <span>({user.achievements.length})</span></h3>
              <ul>

                {user.achievements.map(badge => (
                  <li key={badge.badge_id} className="active" onClick={() => defineBadge(badge)}>
                    <img src={`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}${badge.image}`} alt={badge.description} />
                  </li>
                ))}

                {restAray.map(item => (
                  <li key={item}>
                    <span>
                      <p>?</p>
                    </span>
                  </li>
                ))}

              </ul>
            </>
            ) : (
              <>
              <h3>Conquistas alcançadas <span>(0)</span></h3>
              <p className="alert">Você não alcançou nenhuma conquista até o momento.</p>
              </>
            )}
            
          </section>
        </Container>
      </Layout>
    </>
  )
  else return <Loading />
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  var obj;
  const session = await getSession(ctx)
  if(session){
    await fetch(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/challenges?id=${session.userId}`)
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
