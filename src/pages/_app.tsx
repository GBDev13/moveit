import { Provider } from 'next-auth/client';
import '../styles/global.css';
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/Global';
import Head from 'next/head';
import { useDarkMode } from '../Hooks/useDarkmode';
import {lightTheme, darkTheme} from '../styles/Theme';
import Toggle from '../components/Toggler';
import { useRouter } from 'next/router';
import NProgress from "nprogress"
import { useEffect, useState } from 'react';
import Loading from '../components/Loading';

function MyApp({ Component, pageProps }) {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const [loading, setLoading] = useState(false);
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  const router = useRouter();
  
  useEffect(() => {
    router.events.on("routeChangeStart", () => setLoading(true));
    router.events.on("routeChangeComplete", () => setLoading(false));
    router.events.on("routeChangeError", () => setLoading(false));
    return () => {
      router.events.off("routeChangeStart", () => setLoading(true));
      router.events.off("routeChangeComplete", () => setLoading(false));
      router.events.off("routeChangeError", () => setLoading(false));
    };
  }, []);

  if(!mountedComponent) return <div/>
  return(
    <>
      <ThemeProvider theme={themeMode}>
      <Head>
        <link rel="shortcut icon" href="favicon.png" type="image/png"/>

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" rel="stylesheet" />
      </Head>
      <GlobalStyle />
        <Provider session={pageProps.session}>
          {loading && <Loading/>}
          <Component {...pageProps } />
          {router.pathname !== "/" && <Toggle theme={theme} toggleTheme={themeToggler}/>}
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;