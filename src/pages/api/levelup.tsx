import { NextApiRequest, NextApiResponse } from "next";
import path from 'path';
import fs from 'fs';
import handlebars  from 'handlebars';
import nodeHtmlToImage from "node-html-to-image";

export default async function(request: NextApiRequest, response: NextApiResponse) {

  const {level, completedChallenges, currentExperience} = request.query;

  const dir = path.join(__dirname,'./public/assets/twitter.hbs');
  const image = fs.readFileSync(dir).toString('utf-8')
  const handle = handlebars.compile(image);
  const html = handle({level, completedChallenges, currentExperience})
  const resultImage = await nodeHtmlToImage({
    html
  })
  response.writeHead(200, {'Content-Type': 'image/png'})
  response.end(resultImage, 'binary')
}