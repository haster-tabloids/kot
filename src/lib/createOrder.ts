import { database } from "@/appwrite";
import { ID } from "appwrite";

export const createOrder = async (name: string) => {
  const data = await database.createDocument(
    process.env.NEXT_PUBLIC_DATABASE_ID!,
    process.env.NEXT_PUBLIC_ORDER_COLLECTION_ID!,
    ID.unique(),
    {
      name: name,
    }
  );
  return data;
};
