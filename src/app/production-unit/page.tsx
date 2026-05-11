"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  CheckCircle2,
  Cpu,
  Factory,
  Rocket,
  Wrench,
} from "lucide-react";

const productionSlides = [
  {
    image: "/assets/production_unit/production_unit_banner1.png",
    title: "Advanced UAV Manufacturing Facility",
  },
  {
    image: "/assets/production_unit/production_unit_banner2.png",
    title: "Drone Innovation & Production Center",
  },
  {
    image: "/assets/production_unit/production_image_banner3.png",
    title: "Next-Generation Manufacturing Hub",
  },
  {
    image: "/assets/production_unit/production_unit_banner4.png",
    title: "Engineering & Production Center",
  },
];

const productionSlide = []

const productionDescription =
  "Engineering the future of UAV innovation through structured manufacturing, integrated development, and scalable production capabilities.";

const facilityLabels = [
  {
    image: "/assets/production_unit/advance_uav.png",
    title: "Advanced UAV Manufacturing Facility",
  },
  {
    image: "/assets/production_unit/drone_inovation.png",
    title: "Drone Innovation & Production Center",
  },
  {
    image: "/assets/production_unit/next_gen.png",
    title: "Next-Generation Manufacturing Hub",
  },
  {
    image: "/assets/production_unit/enginnering_production.png",
    title: "Engineering & Production Center",
  },
  {
    image: "/assets/production_unit/uav_development_facilities.png",
    title: "UAV Development & Assembly Facility",
  },
];

const highlightPoints = [
  "Proposed 10-Acre Development Facility",
  "Scalable Manufacturing Infrastructure",
  "Integrated R&D and Assembly Operations",
  "Future-Focused UAV Ecosystem",
  "Skill Development & Technical Training",
  "Support for Multi-Sector Drone Applications",
];

const innovationBlocks = [
  {
    title: "Innovation-Driven Development",
    description:
      "Focused on research, product design, and the development of future-ready drone technologies for evolving industry applications.",
    icon: Rocket,
  },
  {
    title: "Scalable Manufacturing Ecosystem",
    description:
      "Building a structured production and assembly environment designed to support efficient operations and future expansion capabilities.",
    icon: Factory,
  },
  {
    title: "Precision Engineering & Testing",
    description:
      "Emphasizing quality, reliability, and performance through engineering-focused development, system integration, and operational testing.",
    icon: Wrench,
  },
  {
    title: "Skill Development & Industry Growth",
    description:
      "Supporting technical learning, pilot training, and workforce development to strengthen India’s growing UAV ecosystem.",
    icon: Cpu,
  },
];

export default function ProductionUnitPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % productionSlides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const activeSlide = productionSlides[currentSlide];
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + productionSlides.length) % productionSlides.length);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % productionSlides.length);

  return (
    <main className="bg-white text-[#193C54]">
      <section className="relative h-[420px] w-full overflow-hidden md:h-[820px]">
        {productionSlides.map((slide, index) => (
          <div
            key={slide.title}
            className={`absolute inset-0 transition-opacity duration-700 ${currentSlide === index ? "opacity-100" : "opacity-0"
              }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              className="object-cover"
              sizes="100vw"
            />
          </div>
        ))}

        <div className="absolute inset-0 bg-[#07111C]/65" />
        <div className="relative mx-auto flex min-h-[620px] max-w-7xl flex-col justify-center px-6 pb-16 pt-32 text-white">
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Production Unit
          </h1>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            {/* <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#6B7280]">
              Production Unit
            </p>
            <h2 className="mt-4 max-w-4xl text-3xl font-semibold leading-tight text-[#123A56] sm:text-4xl lg:text-5xl">
              Advanced UAV Manufacturing Facilities
            </h2> */}
            {/* <p className="mt-4 max-w-4xl text-base leading-8 text-[#475569] sm:text-lg">
              {productionDescription}
            </p> */}
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {facilityLabels.map((slide) => (
              <div
                key={slide.title}
                className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                </div>

                <div className="p-6 sm:p-8">
                  <h3 className="font-poppins text-2xl font-semibold leading-snug text-[#123A56]">
                    {slide.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
      <section className="mb-10 w-full bg-gradient-to-br from-[#f8fbfd] via-white to-[#eef5f9] px-4 py-16 sm:mb-14 sm:px-8 lg:mb-16 lg:py-20">
        <div className="mx-auto max-w-7xl p-2 sm:p-4 lg:p-6">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
            <div className="p-2 sm:p-4">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#6B7280]">
                Production Unit
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#123A56] sm:text-4xl lg:text-[2.6rem]">
                Engineering the Future of UAV Innovation
              </h2>
              <div className="mt-5 h-1 w-20 rounded-full bg-[#123A56]/15" />
              <div className="mt-6 space-y-5 text-base leading-8 text-[#334155] sm:text-lg">
                <p>
                  EAGLE AI AEROSPACE (OPC) aims to build a future-ready production and
                  development ecosystem dedicated to next-generation drone technologies and
                  unmanned aerial systems. Focused on engineering excellence, innovation, and
                  scalable manufacturing, our planned facility is envisioned to support the
                  complete lifecycle of drone development — from research, design, and
                  prototyping to assembly, integration, and operational readiness.
                </p>
                <p>
                  Our vision is to create an environment that encourages technological
                  innovation, practical engineering, and continuous product improvement while
                  addressing the evolving needs of agriculture, industrial operations,
                  commercial applications, education, and strategic sectors. Through
                  structured development processes and quality-focused operations, we aim to
                  establish a strong foundation for India’s UAV ecosystem.
                </p>
                <p>
                  The proposed facility is also intended to support skill development,
                  technical learning, and collaborative innovation by bringing together
                  engineering, manufacturing, and operational expertise under one ecosystem.
                  With a long-term commitment to innovation, operational quality, and
                  indigenous capability development, EAGLE AI AEROSPACE (OPC) seeks to play
                  a role in strengthening India’s position in the rapidly evolving global UAV
                  ecosystem.
                </p>
              </div>
            </div>
            <div className="group relative min-h-[200px] overflow-hidden rounded-[1rem] sm:min-h-[360px] lg:min-h-[400px]">

              {/* Mobile Image */}
              <Image
                src="/assets/production_unit/engineering_future_uav_innovation.png"
                alt=""
                fill
                className="object-cover object-top transition duration-700 group-hover:scale-105 md:hidden"
                sizes="100vw"
              />

              {/* Desktop Image */}
              <Image
                src="/assets/production_unit/enginnering_land.png"
                alt=""
                fill
                className="hidden object-cover object-center transition duration-700 group-hover:scale-105 md:block"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#07111C]/75 via-[#07111C]/20 to-transparent" />
            </div>

            {/* <div className="group relative min-h-[200px] overflow-hidden rounded-[1rem] sm:min-h-[360px] lg:min-h-[400px]">
              <Image
                src='/assets/production_unit/engineering_future_uav_innovation.png'
                alt=''
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07111C]/75 via-[#07111C]/20 to-transparent" />

            </div> */}
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-8">
        <div className="mx-auto max-w-7xl rounded-[1.75rem] bg-[#f4f8fb] p-7 shadow-sm sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#6B7280]">
            Highlight Points
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {highlightPoints.map((point) => (
              <div key={point} className="flex items-start gap-3 rounded-2xl bg-white p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#123A56]" />
                <p className="text-base font-medium leading-7 text-[#193C54]">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8fbfd] px-4 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="font-poppins text-4xl font-semibold text-[#123A56] sm:text-5xl">
              Core Focus Areas
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {innovationBlocks.map((block) => (
              <div
                key={block.title}
                className="flex min-h-[200px] items-center gap-6 rounded-[2rem] border border-slate-200 bg-white px-7 py-7 shadow-[0_6px_18px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_10px_24px_rgba(15,23,42,0.12)] sm:px-8 sm:py-8"
              >
                <div className="flex w-[120px] shrink-0 items-center justify-center text-[#234763] sm:w-[140px]">
                  <block.icon className="h-[80px] w-[80px] sm:h-[92px] sm:w-[92px]" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h3 className="font-poppins text-[1.8rem] font-semibold leading-tight text-[#123A56]">
                    {block.title}
                  </h3>
                  <p className="mt-4 max-w-[30rem] text-base leading-8 text-[#41566B]">
                    {block.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
