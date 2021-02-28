import { setOptions, getSession } from 'next-auth/client'
setOptions({ site: process.env.NEXTAUTH_URL })

export default async (req, res) =>  {
  const session = await getSession({ req })
  console.log('session', session)
  res.end()
}