import { Collection, MongoClient } from "mongodb"

const useMongoDB = async (): Promise<MongoClient> => {
  return new Promise((resolve, reject) => {
    MongoClient.connect("mongodb://localhost:27017", (err, client) => {
      if (!!err) {
        return reject(err)
      } else {
        return resolve(client)
      }
    })
  })
}

export const useCollection = async <T>(collectionName: string): Promise<Collection<T>> => {
  const client = await useMongoDB()
  const db = await client.db("hackathon-starter")
  return await db.collection<T>(collectionName)
}
