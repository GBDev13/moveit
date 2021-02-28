import { GetServerSideProps } from 'next';
import { getSession, signIn, signOut, useSession } from 'next-auth/client'
import Head from 'next/head';
import {useRouter} from 'next/router'
import {HomeBackground, HomeContainer } from '../styles/pages/HomeStyles';

export default function Home({sessions}) {
  const router = useRouter();
  
  if (typeof window !== 'undefined' && sessions){
    router.push('/challenges')
  }

  return (
    <HomeBackground>
      <Head>
        <title>Home | move.it</title>
      </Head>
      <HomeContainer>
        <div>
         <img src="assets/logo.svg" alt="Logo da Moveit"/>
         <h3>Bem-vindo(a)</h3>
         <p><img src="icons/github.svg" alt="Github"/>Faça login com seu Github para começar</p>
         <button type="button" onClick={() => signIn('github')}>Entrar com Github</button>
        </div>
      </HomeContainer>
    </HomeBackground>
  )
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