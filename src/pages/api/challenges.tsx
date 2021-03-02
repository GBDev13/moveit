import { NowRequest, NowResponse} from '@vercel/node'
import {MongoClient, Db, ObjectID} from 'mongodb';
import url from 'url';

let cachedDb:Db = null;

async function connectToDatabase(uri: string) {
  if(cachedDb) {
    return cachedDb;
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser:true
  });

  const dbName = url.parse(uri).pathname.substr(1);

  const db = client.db(dbName)

  cachedDb = db;

  return db;
}

export default async (request:NowRequest, response:NowResponse) => {
  const { id, level, challengesCompleted, currentExperience, totalExperience } = request.body;

  const db = await connectToDatabase(process.env.NEXT_PUBLIC_DATABASE_URL);

  const collection = db.collection('users');

  if (request.method === "POST") {
    var myquery = { "_id": ObjectID(id) };
    if(level) {
      const newValues = {$set : {"level": level}};
  
      const user = await collection.updateOne(myquery, newValues)
  
      return response.status(200).json(user);
    }
    else if(challengesCompleted) {
      const newValues = {$set : {"challengesCompleted": challengesCompleted}};
  
      const user = await collection.updateOne(myquery, newValues)
  
      return response.status(200).json(user);
    }
    else if(currentExperience) {
      const newValues = {$set : {"currentExperience": currentExperience}};
  
      const user = await collection.updateOne(myquery, newValues)
  
      return response.status(200).json(user);
    }
    else if(totalExperience) {
      const newValues = {$set : {"totalExperience": totalExperience}};
  
      const user = await collection.updateOne(myquery, newValues)
  
      return response.status(200).json(user);
    }
    else {
      return response.status(400).json({message:'Error'})
    }
  }
  
  else if(request.method === "GET") {
    const { id, all } = request.query;

    if(id){
      var myquery = { "_id": ObjectID(id) };

      const user = await collection.findOne(myquery);

      return response.status(200).json(user);
    } else if (all){

      await collection.find({}).toArray((err, result) => {
        if(err) {
          return response.status(400).json({error: err})
        }
        return response.status(200).json(result);
      });

    } else {
      return response.status(400).json({message:'Error'})
    }
  }

  else if(request.method === "PUT") {
    const { id, badge_id, description, image } = request.body;

    if(id){
      var myquery = { "_id": ObjectID(id) };

      const user = await collection.updateOne(myquery, {$push: {achievements: {
        badge_id,
        description,
        image: image
      }}})

      return response.status(200).json(user);
    } else {
      return response.status(400).json({message:'Error'})
    }
  }
}