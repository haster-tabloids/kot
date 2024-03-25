import { database } from "@/appwrite";

export const getOrder = async () => {
  const data = await database.listDocuments(
    process.env.NEXT_PUBLIC_DATABASE_ID!,
    process.env.NEXT_PUBLIC_ORDER_COLLECTION_ID!
  );
  return data;
};
