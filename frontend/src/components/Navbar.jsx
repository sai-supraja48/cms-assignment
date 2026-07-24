import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-5 shadow bg-white">
      <h1 className="text-2xl font-bold text-blue-600">
        CMS Website
      </h1>

      <div className="space-x-5">
        <Link href="/">Home</Link>
        <Link href="/about-us">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}