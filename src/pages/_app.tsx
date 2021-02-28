import { Provider } from 'next-auth/client';
import '../styles/global.css';
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/Global';
import { theme } from '../styles/Theme';

function MyApp({ Component, pageProps }) {
  return(
    <>
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
