import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/login">Login</Link>
      <Link href="/categories">Catégories</Link>
      <Link href="/fournisseurs">Fournisseurs</Link>
    </div>
  );
}
