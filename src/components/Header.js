import Link from "next/link";
import React from "react";
import { SiBurgerking } from "react-icons/si";

function Headers() {
  return (
    <>
      <header>
        <SiBurgerking />
        <nav>
          <Link href="/">home</Link>
          <Link href="/about">about us</Link>
          <Link href="/reviews">reviews</Link>
          <Link href="/burgers/">burgers</Link>
          <Link href="/burgers/comments">comments</Link>
        </nav>
      </header>
    </>
  );
}

export default Headers;
