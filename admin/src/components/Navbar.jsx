"use client";

import { FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between bg-white px-8 py-4 shadow">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Dashboard
        </h1>
      </div>

      <div className="flex items-center gap-3">
        <FaUserCircle size={36} className="text-gray-600" />
        <div>
          <p className="font-semibold">Admin</p>
          <p className="text-sm text-gray-500">
            admin@gmail.com
          </p>
        </div>
      </div>
    </header>
  );
}