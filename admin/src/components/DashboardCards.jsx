"use client";

import {
  FaFileAlt,
  FaCheckCircle,
  FaPen,
} from "react-icons/fa";

export default function DashboardCards({ pages }) {

  const published =
    pages.filter(p => p.status === "Published").length;

  const drafts =
    pages.filter(p => p.status === "Draft").length;

  return (

    <div className="grid gap-6 md:grid-cols-3">

      <div className="rounded-xl bg-white p-6 shadow">

        <FaFileAlt
          size={35}
          className="text-blue-600"
        />

        <h2 className="mt-3 text-3xl font-bold">
          {pages.length}
        </h2>

        <p>Total Pages</p>

      </div>

      <div className="rounded-xl bg-white p-6 shadow">

        <FaCheckCircle
          size={35}
          className="text-green-600"
        />

        <h2 className="mt-3 text-3xl font-bold">
          {published}
        </h2>

        <p>Published</p>

      </div>

      <div className="rounded-xl bg-white p-6 shadow">

        <FaPen
          size={35}
          className="text-orange-500"
        />

        <h2 className="mt-3 text-3xl font-bold">
          {drafts}
        </h2>

        <p>Drafts</p>

      </div>

    </div>

  );

}