export const metadata = {
  title: "Contact | Keegan Bailey",
  description: "Contact Keegan Bailey for software consulting and development work.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto w-full max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900">Contact</h1>
      <p className="mt-4 max-w-2xl text-zinc-700">
        If you want to discuss a project, collaboration, or consulting work, email me directly.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="mailto:dev.kbmobi@gmail.com"
          className="inline-block rounded-md bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700"
        >
          dev.kbmobi@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/keegan-bailey-b2463426/"
          target="_blank"
          rel="noreferrer"
          className="inline-block rounded-md border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-100"
        >
          LinkedIn Profile
        </a>
      </div>
    </section>
  );
}
