"use client";
import { getItems } from "@/lib/getItems";
import MenuList from "@/section/Menu";
import React, { useEffect, useState } from "react";

type MenuItems = {
  name: string;
  price: number;
}[];

const Menu = () => {
  const [items, setItems] = useState<MenuItems>([]);

  useEffect(() => {
    getItems().then((data) => setItems(data.documents));
  }, []);
  if (!items.length) return "Loading....";
  return (
    <div>
      <MenuList menuItems={items} />
    </div>
  );
};

export default Menu;
