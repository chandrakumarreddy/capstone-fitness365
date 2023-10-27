import React from "react";
import SignInForm from "./_components/RegisterForm";
import Image from "next/image";
import Link from "next/link";

export default function Register() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full h-16 flex items-center bg-black text-base">
        <nav className="mx-auto h-full w-[1280px] flex items-center justify-between">
          <Link href="/">
            <Image src="/logo-white.png" alt="logo" width="84" height="56" />
          </Link>
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
      <main className="flex h-full flex-col items-center justify-center flex-1 w-9/12 mx-auto">
        <div className="flex items-center gap-y-12 justify-between w-full h-full min-h-[00px]">
          <div className="h-[500px] flex items-center">
            <Image
              src="/register-form.png"
              alt="login form"
              width="500"
              height="200"
            />
          </div>
          <SignInForm />
        </div>
      </main>
    </div>
  );
}
