import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Hello World !</h1>
      <Link
        href="/login"
        className="bg-green-800 inline-flex h-8 w-20 items-center justify-center rounded-md text-base text-white"
      >
        Login
      </Link>
    </div>
  );
}
