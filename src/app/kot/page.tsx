"use client";
import { getOrder } from "@/lib/getOrder";
import KOTPage from "@/section/KOT";
import React, { useEffect, useState } from "react";

const KOT = () => {
  const [items, setItems] = useState<any>([]);

  useEffect(() => {
    getOrder().then((data) => setItems(data.documents));
  }, []);
  if (!items.length) return "Loading....";
  return (
    <div>
      <KOTPage kotItems={items} />
    </div>
  );
};

export default KOT;
