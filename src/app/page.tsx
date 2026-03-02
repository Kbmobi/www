export default function Home() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-16">
      <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
        Canadian Software Developer
      </p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
        Keegan Bailey
      </h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-700">
        I build cross-platform applications with a focus on strong user
        experiences, maintainable architecture, and reliable delivery pipelines.
        My background includes Xamarin and MAUI, and I now primarily build with
        AvaloniaUI.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href="https://www.linkedin.com/in/keegan-bailey-b2463426/"
          target="_blank"
          rel="noreferrer"
          className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-zinc-700"
        >
          Connect on LinkedIn
        </a>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        <article className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-zinc-900">AvaloniaUI</h2>
          <p className="mt-2 text-sm leading-6 text-zinc-600">
            Building modern desktop and cross-platform apps with clean UI and
            scalable architecture.
          </p>
        </article>
        <article className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-zinc-900">Mobile Platforms</h2>
          <p className="mt-2 text-sm leading-6 text-zinc-600">
            Deep practical experience across Android and iOS app development,
            release management, and performance tuning.
          </p>
        </article>
        <article className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-zinc-900">DevOps</h2>
          <p className="mt-2 text-sm leading-6 text-zinc-600">
            Reliable CI/CD workflows, automated builds, and deployment
            strategies for Windows, mobile, and cross-platform products.
          </p>
        </article>
      </div>
    </section>
  );
}
