interface GetHtmlProps {
  level: number;
  challenges: number;
  experience: number;
}

export function getHtml({
  level,
  challenges,
  experience
}: GetHtmlProps) {
  return `<!DOCTYPE html>
  <html lang="pt-BR">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="./style.css" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <title>Level Up!</title>

      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          margin: 0;
          background: #f2f3f5;
          padding: 127px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: Inter, Helvetica, sans-serif;
          max-width: 1200px;
          max-height: 600px;
          box-sizing: border-box;
        }
        
        main {
          display: grid;
          grid-template-columns: 1fr 1fr;
          flex: 1;
          align-items: center;
          justify-items: center;
        }
        
        main section > div {
          background: url("${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/icons/levelup.svg") no-repeat center;
          background-size: 385px;
        }
        
        main section div > h2 {
          color: #5965e0;
          font-size: 306px;
          text-align: center;
          text-shadow: 0px 10px 16px rgba(89, 101, 224, 0.3);
          font-weight: 700;
        }
        
        h1 {
          color: #2e384d;
          text-align: center;
          font-size: 56px;
          line-height: 66px;
        }
        
        ul {
          list-style: none;
          padding: 0;
          margin: 0;
          margin-bottom: 84px;
        }
        
        ul li {
          margin-bottom: 32px;
          padding: 0;
        }
        
        ul li h2 {
          color: #666666;
          text-transform: uppercase;
          opacity: 0.5;
          font-size: 24px;
          margin-bottom: 10px;
          padding: 0;
        }
        
        ul li p {
          color: #666666;
          font-size: 40px;
          font-weight: 500;
          padding-bottom: 32px;
          margin: 0;
          border-bottom: 2px solid #dcdde0;
        }
        
        ul li span {
          color: #5965e0;
        }
    
      </style>
    </head>
    <body>
      <main>
        <section>
          <div><h2>${level}</h2></div>
          <h1>Avancei para<br />o próximo level</h1>
        </section>
        <section>
          <ul>
            <li>
              <h2>desafios</h2>
              <p><span>${challenges}</span> completados</p>
            </li>
            <li>
              <h2>experiência</h2>
              <p><span>${experience}</span> xp</p>
            </li>
          </ul>
          <img src="${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/logo-full.svg" alt="Logotipo Move.it" />
        </section>
      </main>
    </body>
  </html>`
}