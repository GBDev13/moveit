import { GetServerSideProps } from "next";
import { useSession } from "next-auth/client";
import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import { Container } from "../styles/pages/LeaderboardStyles";

export default function Leaderboard({users}) {
  const mobile = window.matchMedia("(max-width: 560px)").matches;

  
  const [ session, loading ] = useSession()

  const router = useRouter();

  if (typeof window !== 'undefined' && !loading && !session){
    router.push("/");
  }

  const userWithChallenges = users.filter(user => {
    if(user.challengesCompleted){
      return user
    }
  })
  const formatedUsers = userWithChallenges.sort(function(a,b) {
    if (a.challengesCompleted && b.challengesCompleted) {
      if(a.challengesCompleted < b.challengesCompleted) return 1;
      if (a.challengesCompleted > b.challengesCompleted) return -1;
    } else return 0;
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
          <div className={`titulos ${mobile ? 'mobile' : ''}`}>
            <span>Posição</span>
            <span>Usuário</span>
            {mobile && <div><span>Desafios e Experiência</span></div>}
            {!mobile && (
              <>
                <span>Desafios</span>
                <span>Experiência</span>
              </>
            )}
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

                {!mobile && (
                  <>
                  <div className="info">
                  <p><b>{user.challengesCompleted || 0}</b> completados</p>
                </div>

                <div className="info">
                  <p><b>{user.totalExperience || 0}</b> xp</p>
                </div>
                </>
                )}

                {mobile && (
                  <div className="info double">
                  <p><b>{user.challengesCompleted || 0}</b> completados</p>
                  <p><b>{user.totalExperience || 0}</b> xp</p>
                </div>
                )}

              </li>
              ))}
            </ul>
          </section>
        </section>
      </Container>
    </Layout>
  )
}

export const getStaticProps: GetServerSideProps = async () => {

  var obj;
  await fetch(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/challenges?all=1`)
  .then(res => res.json())
  .then(data => obj = data)
  
  return {
    props: {
      users: obj
    },
    revalidate: 60,
  }
}
