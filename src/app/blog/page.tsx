import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "Blog | Keegan Bailey",
  description: "Notes on AvaloniaUI, MAUI, Xamarin, and cross-platform development.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="mx-auto w-full max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900">Blog</h1>
      <p className="mt-3 text-zinc-600">
        Lightweight, markdown-based posts managed directly in this repository.
      </p>

      <div className="mt-10 space-y-6">
        {posts.length === 0 ? (
          <p className="rounded-lg border border-dashed border-zinc-300 bg-white p-6 text-zinc-600">
            No posts yet. Add a markdown file in <code>content/posts</code> to publish.
          </p>
        ) : (
          posts.map((post) => (
            <article key={post.slug} className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
              <p className="text-xs uppercase tracking-wide text-zinc-500">{post.date}</p>
              <h2 className="mt-1 text-xl font-semibold text-zinc-900">
                <Link href={`/blog/${post.slug}`} className="hover:text-blue-700">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-3 text-zinc-600">{post.excerpt}</p>
            </article>
          ))
        )}
      </div>
    </section>
  );
}
