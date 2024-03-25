// KOTPage.tsx
"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card"; // Assuming you have a Card component
import kotData from "@/constant/kot.json";

interface KOT {
  id: string;
  orderNumber: string;
  status: "processing" | "completed"; // Assuming status can be either processing or completed
  // Add more properties as needed
}

const KOTPage: React.FC = ({ kotItems }) => {
  const router = useRouter();
  const [kots, setKOTs] = useState<KOT[]>([]);

  useEffect(() => {
    setKOTs(kotItems);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">KOT Order Tickets (KOTs)</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {kots.map((kot) => (
          <Card
            key={kot.id}
            onClick={() => router.push(`/kot/${kot.id}`)} // Navigate to KOT details page
            className={`p-4 rounded-md shadow-md ${
              kot.status === "processing" ? "bg-yellow-200" : "bg-green-200"
            }`}
          >
            <h2 className="text-lg font-semibold">{kot.orderNumber}</h2>
            <p>Status: {kot.status}</p>
            {/* Additional KOT details can be displayed here */}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default KOTPage;
