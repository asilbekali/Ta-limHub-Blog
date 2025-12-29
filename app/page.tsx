import BlogList from "@/components/bloglist";

async function getPosts() {
  const res = await fetch(
    "https://6764fcfe52b2a7619f5e0263.mockapi.io/th-blog",
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className=" min-h-screen">
      <div className="flex  container mx-auto px-2 md:px-8 lg:px-16 xl:px-24">
        <BlogList posts={posts} />
      </div>
    </div>
  );
}
