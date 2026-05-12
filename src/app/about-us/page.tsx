"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Eye, Flag } from "lucide-react";

const aboutTopSlide1 = [
  {
    image: "/assets/about_us/about_us1.png",
    title: "",
    position: "object-[center_22%]",
  },
  {
    image: "/assets/about_us/about_us2.png",
    title: "",
    position: "object-center",
  },
];

export default function AboutUsPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % aboutTopSlide1.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="bg-white text-[#193C54]">
      <section className="relative h-[420px] w-full overflow-hidden md:h-[820px]">
        {aboutTopSlide1.map((slide, index) => (
          <div
            key={slide.image}
            className={`absolute inset-0 transition-opacity duration-700 ${index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
          >
            <Image
              src={slide.image}
              alt="About Eagle AI Aerospace"
              fill
              priority={index === 0}
              className={`object-cover ${slide.position || "object-[center_25%]"}`}
              sizes="100vw"
            />
          </div>
        ))}

        <div className="absolute inset-0 bg-[#07111C]/62" />

        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-6 pb-14 pt-32 text-white">
          <h1 className="text-4xl font-bold drop-shadow-md md:text-5xl">
            About Us
          </h1>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[2rem] bg-[#f8fbfd] p-8 shadow-sm sm:p-12">

            <h2 className="mt-4 text-3xl font-semibold text-[#123A56] sm:text-4xl">
              EAGLE AI AEROSPACE
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-[#334155] sm:text-lg">
              <p>
                At Eagle AI Aerospace, we are building the future of intelligent aviation.
              </p>
              <p>
                Founded with a vision to revolutionize aerial operations, we harness the power of artificial intelligence and advanced drone technologies to create smarter, faster, and more efficient solutions for modern industries.
                Our offerings span across surveillance, mapping, inspection, and autonomous operations, empowering businesses with real-time insights and operational excellence.
              </p>
              <p>
                We believe that the sky is not the limit—it is the starting point. With a strong commitment to innovation, safety, and reliability, Eagle AI Aerospace is positioned to become a trusted partner in the evolving aerospace and AI-driven ecosystem.
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
