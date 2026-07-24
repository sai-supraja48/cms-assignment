"use client";

import { useEffect, useState } from "react";

import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import DashboardCards from "../../components/DashboardCards";

import api from "../../services/api";

export default function Dashboard() {

  const [pages, setPages] = useState([]);

  useEffect(() => {

    api.get("/pages")
      .then(res => setPages(res.data.pages));

  }, []);

  return (

    <div className="flex bg-gray-100 min-h-screen">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <main className="p-8">

          <DashboardCards pages={pages} />

        </main>

      </div>

    </div>

  );

}