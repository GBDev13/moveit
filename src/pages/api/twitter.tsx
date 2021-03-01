import { NextApiRequest, NextApiResponse } from "next";
import path from 'path';
import fs from 'fs';
import handlebars  from 'handlebars';
import nodeHtmlToImage from "node-html-to-image";

export default async function(request: NextApiRequest, response: NextApiResponse) {

  const {level, challenges, experience} = request.query;

    const dir = path.join(__dirname,'./public/assets/twitter.hbs')
    // const img = fs.readFileSync(dir).toString('utf-8')
    // const handle = handlebars.compile(img)
    // const html = handle({ level, challenges, experience })
    // const image = await nodeHtmlToImage({
    //     html
    // })
    // response.writeHead(200, { 'Content-Type': 'image/png' })
    // response.end(image, 'binary')
    response.status(200).json({dir, level, challenges, experience})
}