import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="pt">
        <Head>
        <meta charSet="utf-8" />
        
        <link rel="shortcut icon" href="favicon.png" type="image/png"/>
        <link rel="apple-touch-icon" href="favicon.png"></link>

        <link rel="manifest" href="/manifest.json" />

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
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}