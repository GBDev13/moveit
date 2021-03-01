import { GetServerSideProps } from 'next';
import { getSession, signIn} from 'next-auth/client'
import Head from 'next/head';
import {HomeBackground, HomeContainer } from '../styles/pages/HomeStyles';

export default function Home() {

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

  const session = await getSession(ctx)
  const { res } =  ctx;
  
  if(session) {
    res.writeHead(301, { location: `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/challenges` } );
    res.end();
  }

  return {
    props: {
      sessions: session
    }
  }
}