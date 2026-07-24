"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Sidebar from "../../components/Sidebar";
import api from "../../services/api";
import { toast } from "react-toastify";

export default function Pages() {
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchPages();
  }, []);

  const fetchPages = async () => {
    try {
      setLoading(true);

      const res = await api.get("/pages");

      setPages(res.data.pages);
    } catch (error) {
      toast.error("Failed to fetch pages");
    } finally {
      setLoading(false);
    }
  };

  const deletePage = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this page?"
    );

    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem("token");

      await api.delete(`/pages/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Page deleted successfully");

      fetchPages();
    } catch (error) {
      toast.error("Failed to delete page");
    }
  };

  const filteredPages = pages.filter((page) =>
    page.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex">
        <Sidebar />

        <div className="flex-1 flex items-center justify-center">
          <h2 className="text-2xl font-semibold text-gray-600">
            Loading...
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 p-8">
        {/* Header */}

        <div className="flex items-center justify-between mb-6">
          <h1 className="text-4xl font-bold text-gray-800">
            Pages
          </h1>

          <Link
            href="/pages/create"
            className="rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
          >
            + Add Page
          </Link>
        </div>

        {/* Search */}

        <div className="mb-6">
          <input
            type="text"
            placeholder="Search pages..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-80 rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-500"
          />
        </div>

        {/* Table */}

        <div className="overflow-hidden rounded-xl bg-white shadow">
          <table className="w-full">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-4 text-left">Title</th>

                <th className="p-4 text-left">Status</th>

                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredPages.length === 0 ? (
                <tr>
                  <td
                    colSpan={3}
                    className="py-10 text-center text-gray-500"
                  >
                    No Pages Found
                  </td>
                </tr>
              ) : (
                filteredPages.map((page) => (
                  <tr
                    key={page._id}
                    className="border-t hover:bg-gray-50"
                  >
                    <td className="p-4 font-medium">
                      {page.title}
                    </td>

                    <td className="p-4">
                      <span
                        className={`rounded-full px-3 py-1 text-sm font-semibold ${
                          page.status === "Published"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {page.status}
                      </span>
                    </td>

                    <td className="p-4 text-center space-x-3">
                      <Link
                        href={`/pages/edit/${page._id}`}
                        className="rounded bg-yellow-500 px-4 py-2 text-white hover:bg-yellow-600"
                      >
                        Edit
                      </Link>

                      <button
                        onClick={() => deletePage(page._id)}
                        className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}