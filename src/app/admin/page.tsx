const postTemplate = `---
title: "Post title"
date: "2026-03-02"
excerpt: "1-2 sentence summary shown on the blog list."
---

Write your post here in Markdown.
`;

export const metadata = {
  title: "CMS Guide | Keegan Bailey",
  description: "Simple content workflow for adding blog posts without WordPress.",
};

export default function AdminPage() {
  return (
    <section className="mx-auto w-full max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900">Simple CMS</h1>
      <p className="mt-4 text-zinc-700">
        This site uses a file-based CMS. To publish a post, create a new markdown file in
        <code className="mx-1 rounded bg-zinc-100 px-1 py-0.5">content/posts</code>
        and redeploy.
      </p>

      <ol className="mt-8 list-decimal space-y-3 pl-5 text-zinc-700">
        <li>Create a new file like <code>content/posts/my-first-post.md</code>.</li>
        <li>Add frontmatter (<code>title</code>, <code>date</code>, <code>excerpt</code>).</li>
        <li>Write the rest in Markdown and commit your changes.</li>
      </ol>

      <div className="mt-8 rounded-lg border border-zinc-200 bg-white p-5">
        <p className="text-sm font-semibold text-zinc-900">Post template</p>
        <pre className="mt-3 overflow-x-auto rounded bg-zinc-900 p-4 text-sm text-zinc-100">
          <code>{postTemplate}</code>
        </pre>
      </div>
    </section>
  );
}
