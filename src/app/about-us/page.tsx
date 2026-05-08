import Image from "next/image";
import { Eye, Flag } from "lucide-react";

export default function AboutUsPage() {
  return (
    <main className="bg-white text-[#193C54]">
      <section className="relative min-h-[460px] overflow-hidden">
        <Image
          src="/assets/slider/domestics_logistics.jpg"
          alt="About Eagle AI Aerospace (OBC)"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#07111C]/62" />

        <div className="relative mx-auto flex min-h-[460px] max-w-7xl flex-col justify-center px-6 pb-14 pt-32 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/75">
            About Us
          </p>
          {/* <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Building the future of indigenous drone innovation.
          </h1> */}
          {/* <p className="mt-6 max-w-3xl text-base leading-8 text-white/85 sm:text-lg">
            We are shaping a future-ready UAV ecosystem through engineering excellence,
            operational capability, and innovation-led growth.
          </p> */}
        </div>
      </section>

      <section className="px-4 py-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[2rem] bg-[#f8fbfd] p-8 shadow-sm sm:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#6B7280]">
              Company Note
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-[#123A56] sm:text-4xl">
              EAGLE AI AEROSPACE (OPC)
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-[#334155] sm:text-lg">
              <p>
                At Eagle AI Aerospace (OBC), we are building the future of intelligent aviation.
              </p>
              <p>
                Founded with a vision to revolutionize aerial operations, we harness the power of artificial intelligence and advanced drone technologies to create smarter, faster, and more efficient solutions for modern industries. Our offerings span across surveillance, mapping, inspection, and autonomous operations, empowering businesses with real-time insights and operational excellence.
              </p>
              <p>
                We believe that the sky is not the limit—it is the starting point. With a strong commitment to innovation, safety, and reliability, Eagle AI Aerospace (OBC) is positioned to become a trusted partner in the evolving aerospace and AI-driven ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-t-[14rem] px-8 py-16 sm:px-12 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="text-center lg:px-4">
              <div className="flex justify-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-full border border-[#193C54]/15 bg-white/40 text-[#3F3A8A]">
                  <Eye className="h-12 w-12" strokeWidth={1.8} />
                </div>
              </div>
              <h2 className="mt-8 text-3xl font-bold text-[#123A56] sm:text-4xl">
                Our Vision
              </h2>
              <p className="mx-auto mt-8 max-w-xl text-lg leading-[2.2rem] text-[#334155]">
                To shape the future of drone technology through innovation, intelligent engineering, and scalable aerial solutions that empower industries, strengthen national capabilities, and support the growth of a self-reliant India.
              </p>
            </div>

            <div className="text-center lg:px-4">
              <div className="flex justify-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-full border border-[#193C54]/15 bg-white/40 text-[#123A56]">
                  <Flag className="h-12 w-12" strokeWidth={1.8} />
                </div>
              </div>
              <h2 className="mt-8 text-3xl font-bold text-[#123A56] sm:text-4xl">
                Our Mission
              </h2>
              <p className="mx-auto mt-8 max-w-xl text-lg leading-[2.2rem] text-[#334155]">
                To empower businesses and institutions with smart, data-driven aerial solutions that improve productivity, reduce risk, and unlock new possibilities through innovation and precision.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
