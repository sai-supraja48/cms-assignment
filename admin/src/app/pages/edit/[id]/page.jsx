"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Sidebar from "../../../../components/Sidebar";
import api from "../../../../services/api";
import { toast } from "react-toastify";
import RichTextEditor from "../../../../components/RichTextEditor";

export default function EditPage() {

  const { id } = useParams();

  const router = useRouter();

  const [form, setForm] = useState({
  title: "",
  slug: "",
  status: "Draft",
});

const [content, setContent] = useState({
  blocks: [],
});

  useEffect(()=>{

    api.get(`/pages/${id}`)
    .then(res=>{

      const page = res.data.page;

setForm({
  title: page.title,
  slug: page.slug,
  status: page.status,
});

setContent(page.content);

    });

  },[]);

  const updatePage=async(e)=>{

    e.preventDefault();

    const token=localStorage.getItem("token");

    await api.put(
  `/pages/${id}`,
  {
    ...form,
    content,
  },
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
);

    toast.success("Page Updated");

    router.push("/pages");

  }

  return(

    <div className="flex">

      <Sidebar/>

      <div className="flex-1 p-8">

        <h1 className="text-4xl font-bold mb-8">
          Edit Page
        </h1>

        <form
          onSubmit={updatePage}
          className="space-y-5 max-w-xl"
        >

          <input
            value={form.title}
            onChange={(e)=>
              setForm({...form,title:e.target.value})
            }
            className="w-full border p-3 rounded"
          />

          <input
            value={form.slug}
            onChange={(e)=>
              setForm({...form,slug:e.target.value})
            }
            className="w-full border p-3 rounded"
          />

          <RichTextEditor
data={content}
onChange={setContent}
/>

          <select
            value={form.status}
            onChange={(e)=>
              setForm({...form,status:e.target.value})
            }
            className="w-full border p-3 rounded"
          >
            <option>Draft</option>
            <option>Published</option>
          </select>

          <button
            className="bg-blue-600 text-white px-6 py-3 rounded-lg"
          >
            Update Page
          </button>

        </form>

      </div>

    </div>

  )

}