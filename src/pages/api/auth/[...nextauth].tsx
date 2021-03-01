import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({

  providers: [
    Providers.GitHub({
      clientId: process.env.NEXT_PUBLIC_GITHUB_ID,
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET
    }),
  ],

  callbacks: {
    session: async (session, user) => {
      session.userId = user.id;    
      return Promise.resolve(session);
    },
    signIn: async (_user, _account, profile) => {
      userData = {
        username: profile.login,
        githubProfile: `https://github.com/${profile.login}`,
        level: 1,
        totalExperience:0,
        challengesCompleted:0,
        currentExperience:0,
      };

      return Promise.resolve(true);
    }
  },
  
  database: process.env.NEXT_PUBLIC_DATABASE_URL,
})