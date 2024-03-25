import { Client, Account, Databases, ID, Storage } from "appwrite";
const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(process.env.NEXT_PUBLIC_PROJECT_ID!);

export const account = new Account(client);
export const database = new Databases(client);
export const storage = new Storage(client);
