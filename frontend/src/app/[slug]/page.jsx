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

        {/* Old Pages (String Content) */}

        {typeof page.content === "string" && (
          <p className="text-lg leading-8 whitespace-pre-line">
            {page.content}
          </p>
        )}

        {/* Rich Content */}

        {typeof page.content === "object" &&
          page.content?.blocks?.map((block, index) => {
            if (block.type === "paragraph") {
              return (
                <p
                  key={index}
                  className="mb-4 text-lg leading-8"
                >
                  {block.data.text}
                </p>
              );
            }

            if (block.type === "header") {
              return (
                <h2
                  key={index}
                  className="text-3xl font-bold my-6"
                >
                  {block.data.text}
                </h2>
              );
            }

            if (block.type === "list") {
              return (
                <ul
                  key={index}
                  className="list-disc ml-8 mb-5"
                >
                  {block.data.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              );
            }

            if (block.type === "table") {
              return (
                <table
                  key={index}
                  className="border border-collapse my-6 w-full"
                >
                  <tbody>
                    {block.data.content.map((row, r) => (
                      <tr key={r}>
                        {row.map((cell, c) => (
                          <td
                            key={c}
                            className="border p-2"
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              );
            }

            return null;
          })}
      </main>

      <Footer />
    </>
  );
}