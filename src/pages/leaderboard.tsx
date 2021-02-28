import { GetServerSideProps } from "next";
import Head from "next/head";
import Layout from "../components/Layout";
import { Container } from "../styles/pages/LeaderboardStyles";

export default function Leaderboard({users}) {
  console.log(users)

  const formatedUsers = users.sort(function(a,b) {
    if(a.challengesCompleted < b.challengesCompleted) return 1;
    if (a.challengesCompleted > b.challengesCompleted) return -1;
    return 0;
  })

  return (
    <Layout>
      <Head>
        <title>Leaderboard | move.it</title>
      </Head>
      <Container>
        <h2>Leaderboard</h2>
        <section>
          <div className="titulos">
            <span>Posição</span>
            <span>Usuário</span>
            <span>Desafios</span>
            <span>Experiência</span>
          </div>
          <section className="grid">
            <ul>
              {formatedUsers.map((user, index) => (
                <li key={user._id}>
                <span>{index + 1}</span>

                <div>
                  <div className="profile">
                    <img src={user.image} alt="teste"/>
                    <div>
                      <strong>{user.name}</strong>
                      <p>
                        <img src="icons/level.svg" alt="Level"/>
                        Level {user.level || 1}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="info">
                  <p><b>{user.challengesCompleted || 0}</b> completados</p>
                </div>

                <div className="info">
                  <p><b>{user.totalExperience || 0}</b> xp</p>
                </div>
              </li>
              ))}
            </ul>
          </section>
        </section>
      </Container>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  var obj;
  await fetch(`http://localhost:3000/api/challenges?all=1`)
  .then(res => res.json())
  .then(data => obj = data)
  
  return {
    props: {
      users: obj
    }
  }
}