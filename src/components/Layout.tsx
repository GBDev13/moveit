import { Container, ContainerAside, Button, Overlay } from "../styles/components/LayoutStyles";
import Link from 'next/link';
import { getSession, signOut } from 'next-auth/client'
import {ReactComponent as Home} from '../../public/icons/home.svg';
import {ReactComponent as Leaderboard} from '../../public/icons/leaderboard.svg';
import {ReactComponent as Logo} from '../../public/assets/logo_min.svg';
import {ReactComponent as Menu} from '../../public/icons/menu.svg';
import { useRouter } from 'next/router';
import { useState } from "react";
import { GetServerSideProps } from "next";

const Layout = ({children}) => {
  const isMobile = window.matchMedia("(max-width: 1220px)").matches;
  const isSmall = window.matchMedia("(max-width: 850px)").matches;
  const router = useRouter();
  const [isMenuOpened, setIsMenuOpened] = useState(isMobile ? false : true);

 return (
   <Container active={isMenuOpened}>
     <ContainerAside style={{transform: `translateX(${isMenuOpened ? '0%' : '-100%'})`}}>
        <Logo />
        <nav>
          <ul>
            <li className={router.pathname === "/challenges" ? "active" : ""}>
              <Link href="/challenges">
                <a><Home/></a>
              </Link>
            </li>
            <li className={router.pathname === "/leaderboard" ? "active" : ""}>
              <Link href="/leaderboard">
                <a><Leaderboard /></a>
              </Link>
            </li>
          </ul>
        </nav>
        <button onClick={() => signOut()}>Sair</button>
     </ContainerAside>
     <Button active={isMenuOpened} onClick={() => setIsMenuOpened(!isMenuOpened)}><Menu /></Button>
     <Overlay style={{transform: `translateX(${isMenuOpened && isSmall ? '0%' : '-100%'})`}} />
     <main>
      {children}
     </main>
   </Container>
 )
}

export default Layout;

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const session = await getSession(ctx)
  const { res } =  ctx;
  
  if(!session) {
    res.writeHead(301, { location: `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}` } );
    res.end();
  }

  return {
    props: {
      sessions: session
    }
  }
}