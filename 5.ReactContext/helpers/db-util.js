import {MongoClient} from "mongodb";

export const connectDatabase = async () => {
    const client = await MongoClient.connect("mongodb+srv://user_park:RRX7aSGEKsLsGll6@cluster0.jyvgm.mongodb.net/events?retryWrites=true&w=majority");
    return client;
}

export const insertDocument = async (client, collection, document) => {
    const db = client.db();
    const result = await db.collection('newsletter').insertOne(document);
    return result;
}

export const getAllDocuments = async (client, collection,sort, filter={}) => {
    const db = client.db();
    const documents = await db.collection(collection).find(filter).sort(sort).toArray();
    return documents;
}