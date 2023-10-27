"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type HeaderType = {
  headerStyle?: string;
};

export default function Header({ headerStyle = "" }: HeaderType) {
  const pathname = usePathname();

  return (
    <header
      className={`bg-transparent bg-gradient-header h-16 fixed z-20 w-full ${headerStyle}`}
    >
      <nav className="h-full flex items-center max-w-7xl mx-auto justify-between text-base font-medium text-gray-700 tracking-wide">
        <ul className="flex items-center gap-x-10 text-white font-bold">
          <Link href="/">
            <li className="mr-20">
              <Image src="/logo-white.png" alt="logo" width="84" height="56" />
            </li>
          </Link>
          <Link href="/fitness">
            <li
              className={`hover:text-orange-500 transition-colors delay-100 py-4 ${
                pathname.includes("fitness") ? "text-orange-500" : ""
              }`}
            >
              FITNESS
            </li>
          </Link>
          <Link href="/nutrition">
            <li
              className={`hover:text-orange-500 transition-colors delay-100 py-4 ${
                pathname.includes("nutrition") ? "text-orange-500" : ""
              }`}
            >
              NUTRITION
            </li>
          </Link>
          <li>SPORTS</li>
          <li>YOGA</li>
          <li>CARE</li>
        </ul>
        <ul className="flex gap-x-10 text-white font-bold">
          <li>
            <Link href="/signin">Signin</Link>
          </li>
          <li>
            <Link href="/register">Register</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
