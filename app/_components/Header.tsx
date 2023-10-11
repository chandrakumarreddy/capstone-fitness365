import React from "react";
import Image from "next/image";
import Link from "next/link";

type HeaderType = {
  headerStyle?: string;
};

export default function Header({ headerStyle = "" }: HeaderType) {
  return (
    <header
      className={`bg-transparent bg-gradient-header h-16 fixed z-10 w-full ${headerStyle}`}
    >
      <nav className="h-full flex items-center max-w-7xl mx-auto justify-between text-base font-medium text-gray-700 tracking-wide">
        <ul className="flex items-center gap-x-10 text-white font-bold">
          <li className="mr-20">
            <Image src="/logo-white.png" alt="logo" width="84" height="56" />
          </li>
          <li>FITNESS</li>
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
