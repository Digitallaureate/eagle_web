type DummyPageProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function DummyPage({
  eyebrow,
  title,
  description,
}: DummyPageProps) {
  return (
    <main className="flex flex-1 flex-col bg-white">
      <section className="bg-[linear-gradient(120deg,#1f4863_0%,#355a74_100%)] px-6 pt-32 pb-16 text-white sm:px-10 lg:px-12">
        <div className="mx-auto w-full max-w-6xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-white/75">
            {eyebrow}
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
            {description}
          </p>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 lg:px-12">
        <div className="mx-auto grid w-full max-w-6xl gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 p-6">
            <h2 className="text-xl font-semibold text-slate-900">Page Status</h2>
            <p className="mt-3 text-slate-600">
              This is a placeholder screen so routing and navigation are ready.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 p-6">
            <h2 className="text-xl font-semibold text-slate-900">Next Step</h2>
            <p className="mt-3 text-slate-600">
              We can now replace this with the final section design and content.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 p-6">
            <h2 className="text-xl font-semibold text-slate-900">Build Ready</h2>
            <p className="mt-3 text-slate-600">
              Header navigation now points to real pages instead of placeholders.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
