import { database, storage } from "@/appwrite";
import { ID } from "appwrite";

export const createFood = async ({ title, price, category, image }: any) => {
  let imageResponseUrl = null;

  // if (image) {
  //   // Upload the image to Appwrite storage

  //   const imageResponse = await storage.createFile(
  //     process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID!,
  //     ID.unique(),
  //     image
  //   );

  //   // Check if the image was uploaded successfully
  //   if (imageResponse) {
  //     // Retrieve the image URL using the getFile method
  //     const fileDetails = await storage.getFilePreview(
  //       process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID!,
  //       imageResponse["$id"]
  //     );
  //     if (fileDetails && fileDetails.href) {
  //       imageResponseUrl = fileDetails.href;
  //     }
  //   }
  // }

  const response = await database.createDocument(
    process.env.NEXT_PUBLIC_DATABASE_ID!,
    process.env.NEXT_PUBLIC_ITEM_COLLECTION_ID!,
    ID.unique(),
    {
      name,
      price,
    }
  );

  return response;
};
