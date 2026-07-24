"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  FaHome,
  FaFileAlt,
  FaSignOutAlt,
} from "react-icons/fa";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Token delete
    router.push("/login");            // Login page ki redirect
  };

  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white">
      <div className="p-6 text-3xl font-bold border-b">
        CMS
      </div>

      <nav className="p-5 space-y-4">
        <Link
          href="/dashboard"
          className={`flex gap-3 items-center p-3 rounded ${
            pathname === "/dashboard"
              ? "bg-blue-600"
              : "hover:bg-slate-800"
          }`}
        >
          <FaHome />
          Dashboard
        </Link>

        <Link
          href="/pages"
          className={`flex gap-3 items-center p-3 rounded ${
            pathname === "/pages"
              ? "bg-blue-600"
              : "hover:bg-slate-800"
          }`}
        >
          <FaFileAlt />
          Pages
        </Link>

        <button
          onClick={handleLogout}
          className="flex gap-3 items-center text-red-400 mt-8 hover:text-red-300"
        >
          <FaSignOutAlt />
          Logout
        </button>
      </nav>
    </aside>
  );
}