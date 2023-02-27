import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/router";

function Error() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className="not-found">
      <h1>Sorry...</h1>
      <h2>Page not found</h2>
      <p>After 3 seconds I'll</p>
      <Link href="/">go back</Link>
    </div>
  );
}

export default Error;
