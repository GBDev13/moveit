import { Provider } from 'next-auth/client';
import '../styles/global.css';
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/Global';
import { theme } from '../styles/Theme';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return(
    <>
      <Head>
        <link rel="shortcut icon" href="favicon.png" type="image/png"/>

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" rel="stylesheet" />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Provider session={pageProps.session}>
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;