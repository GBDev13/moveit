import { NextApiRequest, NextApiResponse } from 'next'
import { getScreenshot } from './_lib/chromium'
import { getHtml } from './_lib/thumbnailTemplate'

const isDev = !process.env.AWS_REGION
const isHtmlDebug = process.env.OG_HTML_DEBUG === '1'

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<any> => {
  const query = req.query

  const isImage = Boolean(query.image)

  if(isImage){
    try {

      const level = Number(query.level)
      const challenges = Number(query.challenges)
      const experience = Number(query.experience)
  
      if (!level || !challenges || !experience) {
        throw new Error(`${level}${challenges}${experience} Missing informations`);
      }
  
      const html = getHtml({ level, challenges, experience})
  
      if (isHtmlDebug) {
        res.setHeader('Content-Type', 'text/html')
        res.end(html)
  
        return
      }
  
      const file = await getScreenshot(html, isDev)
  
      res.statusCode = 200
  
      res.setHeader('Content-Type', `image/png`)
      res.setHeader(
        'Cache-Control',
        'public, immutable, no-transform, s-maxage=31536000, max-age=31536000'
      )
  
      res.end(file)
  
    } catch (e) {
      res.statusCode = 500
      res.setHeader('Content-Type', 'text/html')
      res.end(`<h1>Internal Error</h1><p>${e}</p>`)
      console.error(e)
    }
  }
  if(!isImage)
  {
    try {

      const level = Number(query.level)
      const challenges = Number(query.challenges)
      const experience = Number(query.experience)
  
      if (!level || !challenges || !experience) {
        throw new Error('Missing informations');
      }
  
      const html = getHtml({ level, challenges, experience})
  
      if (isHtmlDebug) {
        res.setHeader('Content-Type', 'text/html')
        res.end(html)
  
        return
      }
  
      // const file = await getScreenshot(html, isDev)
  
      // res.statusCode = 200
  
      // res.setHeader('Content-Type', `image/png`)
      // res.setHeader(
      //   'Cache-Control',
      //   'public, immutable, no-transform, s-maxage=31536000, max-age=31536000'
      // )
  
      // res.end(file)
  
      res.setHeader('Content-Type', 'text/html')
      return res.end(html)
    } catch (e) {
      res.statusCode = 500
      res.setHeader('Content-Type', 'text/html')
      res.end(`<h1>Internal Error</h1><p>${e}</p>`)
      console.error(e)
    }
  }
}
