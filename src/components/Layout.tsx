import { Container, ContainerAside } from "../styles/components/LayoutStyles";
import Link from 'next/link';
import { signOut } from 'next-auth/client'
import {ReactComponent as Home} from '../../public/icons/home.svg';
import {ReactComponent as Leaderboard} from '../../public/icons/leaderboard.svg';
import {ReactComponent as Logo} from '../../public/assets/logo_min.svg';
import { useRouter } from 'next/router';

const Layout = ({children}) => {
  const router = useRouter();

 return (
   <Container>
     <ContainerAside>
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
     {children}
   </Container>
 )
}

export default Layout;