// import { CompletedChallenges } from "../components/CompletedChallenges";
// import { Countdown } from "../components/Countdown";
// import { ExperienceBar } from "../components/ExperienceBar";
// import { Profile } from "../components/Profile";

// import Head from 'next/head'

// import { ChallengeBox } from "../components/ChallengeBox";
// import { CountdownProvider } from "../contexts/CountdownContext";
// import { GetServerSideProps } from "next";
// import { ChallengesProvider } from "../contexts/ChallengesContext";
// import { getSession } from "next-auth/client";
// import {useRouter} from 'next/router'
// import Layout from "../components/Layout";
// import { Container } from "../styles/pages/HomeStyles";

// interface Badge {
//   badge_id:string;
//   description:string;
//   image:string;
// }

// interface Session{
//   userId:string;
// }

// interface User{
//   id: string;
//   name:string;
//   image:string;
//   challengesCompleted:number;
//   level:number;
//   currentExperience:number;
//   totalExperience:number;
//   achievements:Badge[],
//   badges: object;
// }

// interface HomeProps {
//   level: number;
//   currentExperience: number;
//   challengesCompleted: number;
//   sessions: Session;
//   user: User;
// }

// export default function Challenges(props:HomeProps) {
//   const router = useRouter();

//   if (typeof window !== 'undefined' && !props.sessions){
//     router.push("/");
//   }

//   if (props.sessions) return (
//     <ChallengesProvider id={props.sessions.userId} user_badges={props.user.achievements} level={props.user.level} currentExperience={props.user.currentExperience} challengesCompleted={props.user.challengesCompleted} totalExperience={props.user.totalExperience}>
//     <Layout>
//       <Container>
//         <Head>
//           <title>Desafios | move.it</title>
//         </Head>

//         <ExperienceBar />
        
//         <CountdownProvider>
//           <section>
//             <div>
//               <Profile sessions={props.sessions}/>
//               <CompletedChallenges />
//               <Countdown />
//             </div>
//             <div>
//               <ChallengeBox />
//             </div>
//           </section>
//         </CountdownProvider>
//       </Container>
//     </Layout>
//     </ChallengesProvider>
//   )
//   else return null
// }

// export const getServerSideProps: GetServerSideProps = async (ctx) => {

//   var obj;
//   const session = await getSession(ctx)
//   if(session){
//     await fetch(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/challenges?id=${session.userId}`)
//     .then(res => res.json())
//     .then(data => obj = data)
//   }
//   if(!session){
//     var obj = null;
//   }
  
//   return {
//     props: {
//       sessions: session,
//       user: obj
//     }
//   }
// }

export default function Challenges() {
  return <div>challenges</div>
}