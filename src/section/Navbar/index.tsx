// Navbar.tsx
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = () => {
  const pathname = usePathname();
  const [isSticky, setIsSticky] = useState(false);
  const cartItemCount = 10;

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.pageYOffset > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`sticky top-0 z-50 ${isSticky ? "bg-white shadow-md" : ""}`}
    >
      <nav className="flex justify-between items-center ml-4 py-4">
        <ul className="flex gap-8 items-center">
          <li>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>KOT</AvatarFallback>
            </Avatar>
          </li>
          <li>
            <Link
              href="/menu"
              className={pathname === "/menu" ? "text-blue-500" : ""}
            >
              Menu
            </Link>
          </li>
          <li>
            <Link
              href="/kot"
              className={pathname === "/kot" ? "text-blue-500" : ""}
            >
              KOT
            </Link>
          </li>
        </ul>
        <div className="mr-4 relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="black"
              d="M9 8V6h6v2zM7 22q-.825 0-1.412-.587T5 20q0-.825.588-1.412T7 18q.825 0 1.413.588T9 20q0 .825-.587 1.413T7 22m10 0q-.825 0-1.412-.587T15 20q0-.825.588-1.412T17 18q.825 0 1.413.588T19 20q0 .825-.587 1.413T17 22M1 4V2h3.275l4.25 9h7l3.9-7H21.7l-4.975 9H8.1L7 15h12v2H3.625L6.6 11.6L3 4z"
            />
          </svg>
          {cartItemCount > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
              {cartItemCount}
            </span>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
