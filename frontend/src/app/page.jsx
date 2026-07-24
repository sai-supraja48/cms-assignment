import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <section className="flex flex-col items-center justify-center h-[80vh] bg-gray-100">
        <h1 className="text-6xl font-bold">
          Welcome to CMS
        </h1>

        <p className="mt-6 text-xl text-gray-600">
          Dynamic Website powered by Next.js + Express + MongoDB
        </p>
      </section>

      <Footer />
    </>
  );
}