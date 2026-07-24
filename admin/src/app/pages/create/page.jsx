"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "../../../components/Sidebar";
import api from "../../../services/api";

export default function CreatePage() {

  const router = useRouter();

  const [form, setForm] = useState({
    title: "",
    slug: "",
    content: "",
    status: "Draft"
  });

  const handleSubmit = async (e) => {

    e.preventDefault();

    const token = localStorage.getItem("token");

    await api.post(
      "/pages",
      form,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    router.push("/pages");

  };

  return (

    <div className="flex">

      <Sidebar />

      <div className="flex-1 p-8">

        <h1 className="text-4xl font-bold mb-8">
          Create Page
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 max-w-xl"
        >

          <input
            placeholder="Title"
            className="w-full border p-3 rounded"
            onChange={(e)=>
              setForm({
                ...form,
                title:e.target.value
              })
            }
          />

          <input
            placeholder="Slug"
            className="w-full border p-3 rounded"
            onChange={(e)=>
              setForm({
                ...form,
                slug:e.target.value
              })
            }
          />

          <textarea
            rows="8"
            placeholder="Content"
            className="w-full border p-3 rounded"
            onChange={(e)=>
              setForm({
                ...form,
                content:e.target.value
              })
            }
          />

          <select
            className="w-full border p-3 rounded"
            onChange={(e)=>
              setForm({
                ...form,
                status:e.target.value
              })
            }
          >

            <option>Draft</option>

            <option>Published</option>

          </select>

          <button
            className="bg-blue-600 text-white px-6 py-3 rounded-lg"
          >
            Save Page
          </button>

        </form>

      </div>

    </div>

  );

}