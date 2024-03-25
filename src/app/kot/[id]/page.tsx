// KOTDetailPage.tsx
"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import kotData from "@/constant/kot.json";

interface KOT {
  id: string;
  orderNumber: string;
  status: "processing" | "completed";
  menuItems: MenuItem[];
  // Add more properties as needed
}

interface MenuItem {
  id: string;
  name: string;
  price: number;
  // Add more properties as needed
}

const KOTDetailPage: React.FC = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const [kot, setKOT] = useState<KOT | null>(null);

  useEffect(() => {
    // Fetch KOT data when component mounts
    const getKOT = async () => {
      try {
        // Extract KOT ID from the URL query parameter
        if (typeof params.id === "string") {
          // Find the KOT data with the matching ID
          const foundKOT = kotData.find((kot) => kot.id === params.id);
          setKOT(foundKOT);
        }
      } catch (error) {
        console.error("Error fetching KOT:", error);
      }
    };

    getKOT();
  }, []);

  if (!kot) {
    return <div>Loading...</div>; // Add loading state if KOT data is being fetched
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">KOT Details</h1>
      <div>
        <p>
          <strong>Order Number:</strong> {kot.orderNumber}
        </p>
        <p>
          <strong>Status:</strong> {kot.status}
        </p>
        <div>
          <h2 className="text-lg font-semibold mt-4">Menu Items</h2>
          <ul>
            {kot.menuItems.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price.toFixed(2)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default KOTDetailPage;
