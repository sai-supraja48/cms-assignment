import DynamicPage from "./[slug]/page";

export default async function Home(props) {
  return <DynamicPage params={Promise.resolve({ slug: "home" })} />;
}