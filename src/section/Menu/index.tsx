import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const MenuList = ({ menuItems }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <h1 className="text-2xl font-bold mb-4">Menu</h1>

        {menuItems.map((item) => (
          <Card
            key={item.id}
            className="max-w-[300px] sm:max-w-none w-full mx-auto sm:mx-0"
          >
            <CardHeader>
              <CardTitle className="text-center sm:text-left">
                {item.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center sm:text-left">
                {item.description}
              </CardDescription>
            </CardContent>
            <Separator />
            <CardFooter className="flex flex-col sm:flex-row justify-between items-center">
              <span className="mb-2 sm:mb-0">Rs.{item.price.toFixed(2)}</span>
              <button className="px-4 py-2 bg-green-500 text-white rounded-md">
                Add to Cart
              </button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MenuList;
