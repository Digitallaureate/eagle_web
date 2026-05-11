export default function ResourcesPage() {
  return (
    <main className="flex min-h-screen flex-1 bg-[linear-gradient(135deg,#18394f_0%,#2a5674_45%,#3b6783_100%)] text-white">
      <section className="flex w-full items-center px-6 pt-32 pb-20 sm:px-10 lg:px-16 xl:px-24">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center text-center">
          <span className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-white/80">
            Resources
          </span>

          <h1 className="mt-8 text-5xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
            Coming Soon
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-white/80 sm:text-lg lg:text-xl">
            We&apos;re preparing this section with media coverage, press releases,
            galleries, and blog updates. Please check back soon.
          </p>
        </div>
      </section>
    </main>
  );
}
