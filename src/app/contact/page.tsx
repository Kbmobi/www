import { ContactForm } from "@/components/contact-form";

export const metadata = {
  title: "Contact | Keegan Bailey",
  description: "Contact Keegan Bailey for software consulting and development work.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto w-full max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900">Contact</h1>
      <p className="mt-4 max-w-2xl text-zinc-700">
        If you want to discuss a project, collaboration, or consulting work, send me a message here.
      </p>
      <ContactForm />
      <div className="mt-6">
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
