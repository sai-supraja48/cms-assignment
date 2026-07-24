import { notFound } from "next/navigation";
import api from "../../services/api";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

async function getPage(slug) {
  try {
    const res = await api.get("/pages");

    return res.data.pages.find((page) => page.slug === slug);
  } catch (error) {
    return null;
  }
}

export default async function DynamicPage({ params }) {
  const { slug } = await params;

  const page = await getPage(slug);

  if (!page) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className="max-w-5xl mx-auto py-16 px-6">
        <h1 className="text-5xl font-bold mb-8">
          {page.title}
        </h1>

        <div className="text-lg leading-8 whitespace-pre-line text-gray-700">
          {page.content}
        </div>
      </main>

      <Footer />
    </>
  );
}