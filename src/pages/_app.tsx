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

        <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />
        <meta name="MobileOptimized" content="320" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="theme-color" content="#5965E0" />
        <meta name="msapplication-TileColor" content="#5965E0" />
        <meta name="google" content="notranslate" />

        <meta property="og:title" content="Move.it - O pomodoro Gamificado!" />
        <meta property="og:description" content="Faça suas tarefas serem 10x mais produtivas usando a técnica do pomodoro da forma mais divertida e saudável possível!" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Move.it - O pomodoro Gamificado!" />
        <meta property="og:image" content={`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/assets/ogimage.png`} />
        <meta property="og:image:secure_url" content={`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/assets/ogimage.png`} />
        <meta property="og:image:alt" content="Thumbnail" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:title" content="Move.it - O pomodoro Gamificado!" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/assets/ogimage.png`} />
        <meta name="twitter:image:src" content={`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/assets/ogimage.png`} />
        <meta name="twitter:image:alt" content="Thumbnail" />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="620" />
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