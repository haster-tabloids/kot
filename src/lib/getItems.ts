import { database } from "@/appwrite";

export const getItems = async () => {
  const data = await database.listDocuments(
    process.env.NEXT_PUBLIC_DATABASE_ID!,
    process.env.NEXT_PUBLIC_ITEM_COLLECTION_ID!
  );
  return data;
};
