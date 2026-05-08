"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";

const educationSlides = [
  {
    image: "/assets/slider/courier_services.jpg",
    title: "Education & Training",
  },
  {
    image: "/assets/slider/domestics_logistics.jpg",
    title: "Building Skills for the Future of Drone Technology",
  },
  {
    image: "/assets/slider/Logistics_Consulting_Slider.png",
    title: "Practical Learning for the UAV Ecosystem",
  },
];

const programLabels = [
  "Drone Pilot Training",
  "UAV Technology Learning",
  "Technical Skill Development",
  "Industry-Oriented Learning",
  "Student Development Environment",
];

const trainingHighlights = [
  "Hands-On Technical Learning",
  "Testing & Operational Participation",
  "Residential Learning Environment",
  "Building Future UAV Talent",
  "Technical Workshops & Demonstrations",
  "Industry Interaction Opportunities",
];

const learningBlocks = [
  {
    imageUrl: "/assets/slider/courier_services.jpg",
    title: "Drone Pilot Training",
    description:
      "Practical drone flight training focused on operational handling, safety awareness, and real-world flying experience.",
  },
  {
    imageUrl: "/assets/slider/courier_services.jpg",
    title: "UAV Technology Learning",
    description:
      "Introduction to drone systems, aerial technology, components, and emerging industry applications.",
  },
  {
    imageUrl: "/assets/slider/courier_services.jpg",
    title: "Technical Skill Development",
    description:
      "Hands-on exposure to drone assembly, maintenance basics, troubleshooting, and operational understanding.",
  },
  {
    imageUrl: "/assets/slider/courier_services.jpg",
    title: "Industry-Oriented Learning",
    description:
      "Training programs designed to help students understand the practical applications of drones across agriculture, industrial operations, mapping, surveillance, and commercial sectors.",
  },
];

const practicalLearningBlocks = [
  {
    imageUrl: "/assets/slider/courier_services.jpg",
    title: "Hands-On Technical Learning",
    description:
      "Students are envisioned to gain practical exposure to drone systems, operations, assembly processes, and real-world technical workflows.",
  },
  {
    imageUrl: "/assets/slider/courier_services.jpg",
    title: "Testing & Operational Participation",
    description:
      "As testing forms an important part of drone development, students may also get opportunities to observe and participate in supervised testing and evaluation activities.",
  },
  {
    imageUrl: "/assets/slider/courier_services.jpg",
    title: "Residential Learning Environment",
    description:
      "Planned hostel facilities aim to support students from different regions and create a focused environment for technical learning and development.",
  },
  {
    imageUrl: "/assets/slider/courier_services.jpg",
    title: "Building Future UAV Talent",
    description:
      "The initiative is designed to encourage technical growth, innovation, and industry awareness for the next generation of drone professionals.",
  },
];

const plannedEnvironmentItems = [
  "Practical drone operation sessions",
  "Technical workshops and demonstrations",
  "UAV awareness and orientation programs",
  "Skill development initiatives",
  "Industry interaction opportunities",
  "Future-focused learning modules",
];

export default function InvestorPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % educationSlides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const activeSlide = educationSlides[currentSlide];
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + educationSlides.length) % educationSlides.length);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % educationSlides.length);

  return (
    <main className="bg-white text-[#193C54]">
      <section className="relative min-h-[620px] overflow-hidden">
        {educationSlides.map((slide, index) => (
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
            Education & Training
          </h1>
        </div>
      </section>
      {/* <section className="mb-10 w-full bg-gradient-to-br from-[#f8fbfd] via-white to-[#eef5f9] px-4 py-16 sm:mb-14 sm:px-8 lg:mb-16 lg:py-20">
        <div className="mx-auto max-w-7xl p-2 sm:p-4 lg:p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#6B7280]">
            Education & Training
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight text-[#123A56] sm:text-5xl lg:text-6xl">
            {activeSlide.title}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-[#475569] sm:text-lg">
            Building skills for the future of drone technology through practical learning,
            technical development, and industry-oriented training.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {programLabels.map((label) => (
              <span
                key={label}
                className="rounded-full border border-[#123A56]/15 bg-white px-4 py-2 text-sm text-[#193C54]"
              >
                {label}
              </span>
            ))}
          </div>

          <div className="mt-10 flex items-center gap-3">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous slide"
              className="rounded-full border border-[#123A56]/15 bg-white p-3 text-[#123A56] transition hover:bg-[#f4f8fb]"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next slide"
              className="rounded-full border border-[#123A56]/15 bg-white p-3 text-[#123A56] transition hover:bg-[#f4f8fb]"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section> */}

      <section className="px-4 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.9fr] lg:items-start">
            <div>
              <h2 className="text-3xl font-semibold text-[#123A56] sm:text-4xl">
                Building Skills for the Future of Drone Technology
              </h2>
              <div className="mt-6 space-y-5 text-base leading-8 text-[#334155] sm:text-lg">
                <p>
                  EAGLE AI AEROSPACE (OPC) is working toward establishing a modern drone education and training center focused on practical learning, technical development, and industry-oriented skill enhancement.
                  Our vision is to create an ecosystem where students, aspiring drone pilots, and technology enthusiasts can gain hands-on exposure to emerging UAV technologies and real-world drone applications.
                </p>
                <p>
                  By combining technical education with practical training, we aim to support the growing demand for skilled professionals in India’s evolving drone ecosystem.
                </p>
                <p>
                  The overall initiative is aimed at encouraging innovation, technical skill
                  development, and long-term growth opportunities within India&apos;s evolving
                  drone and aerospace ecosystem.
                </p>
              </div>
            </div>
            <div className="group relative min-h-[200px] overflow-hidden rounded-[1rem] sm:min-h-[360px] lg:min-h-[400px]">
              <Image
                src={activeSlide.image}
                alt={activeSlide.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07111C]/75 via-[#07111C]/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>
      {/* <section className="px-4 py-16 sm:px-8">
        <div className="rounded-[1.75rem] bg-[#f4f8fb] p-7 shadow-sm sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#6B7280]">
            Practical Learning & Technical Exposure
          </p>
          <div className="mt-6 space-y-4">
            {trainingHighlights.map((point) => (
              <div key={point} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#123A56]" />
                <p className="text-base font-medium leading-7 text-[#193C54]">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="bg-[#f8fbfd] px-4 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-semibold text-[#123A56] sm:text-4xl">
              Programs & Training Areas
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">

            {learningBlocks.map((block, index) => (

              <div
                key={block.title}
                className="flex flex-col gap-4 rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:p-5"
              >
                <div className="group relative h-36 overflow-hidden rounded-[1rem] sm:h-36 sm:w-[180px] sm:shrink-0 lg:w-[210px]">
                  <Image
                    src={block.imageUrl}
                    alt={block.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(min-width: 1024px) 210px, (min-width: 640px) 180px, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07111C]/75 via-[#07111C]/20 to-transparent" />
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-[#123A56]">{block.title}</h3>
                  <p className="mt-4 text-base leading-8 text-[#475569]">
                    {block.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="px-4 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.9fr] lg:items-start">
            <div>
              <h2 className="text-3xl font-semibold text-[#123A56] sm:text-4xl">
                Student Development Environment
              </h2>
              <div className="mt-6 space-y-5 text-base leading-8 text-[#334155] sm:text-lg">
                <p>
                  Our planned education ecosystem is intended to create a supportive and practical learning environment where students can develop technical understanding, operational awareness, and hands-on exposure to drone technologies.
                  Alongside learning and training facilities, hostel accommodation is also envisioned to support students coming from different regions and enable a focused residential learning experience.
                </p>
                <p>
                  The overall initiative is aimed at encouraging innovation, technical skill development, and long-term growth opportunities within India’s evolving drone and aerospace ecosystem.
                </p>
              </div>
            </div>
            <div className="group relative min-h-[200px] overflow-hidden rounded-[1rem] sm:min-h-[360px] lg:min-h-[400px]">
              <Image
                src={activeSlide.image}
                alt={activeSlide.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07111C]/75 via-[#07111C]/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#f8fbfd] px-4 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-semibold text-[#123A56] sm:text-4xl">
              Practical Learning & Technical Exposure
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">

            {practicalLearningBlocks.map((block, index) => (

              <div
                key={block.title}
                className="flex flex-col gap-4 rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:p-5"
              >
                <div className="group relative h-36 overflow-hidden rounded-[1rem] sm:h-36 sm:w-[180px] sm:shrink-0 lg:w-[210px]">
                  <Image
                    src={block.imageUrl}
                    alt={block.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(min-width: 1024px) 210px, (min-width: 640px) 180px, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07111C]/75 via-[#07111C]/20 to-transparent" />
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-[#123A56]">{block.title}</h3>
                  <p className="mt-4 text-base leading-8 text-[#475569]">
                    {block.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.9fr] lg:items-start">
            <div>
              <h2 className="text-3xl font-semibold text-[#123A56] sm:text-4xl">
                Integrated Learning & Practical Exposure
              </h2>
              <div className="mt-6 space-y-5 text-base leading-8 text-[#334155] sm:text-lg">
                <p>
                  EAGLE AI AEROSPACE (OPC) also envisions the development of an internal ITI-style technical learning environment designed to provide students with practical exposure alongside theoretical understanding.
                  As drone testing and operational evaluation form an important part of the overall development and production process, students may also get opportunities to observe and participate in supervised practical activities related to testing, operations, and technical workflows.
                </p>
                <p>
                  By integrating learning with real-world development environments, our goal is to help students gain industry-oriented exposure, improve technical understanding, and build confidence through practical experience.
                </p>
              </div>
            </div>
            <div className="group relative min-h-[200px] overflow-hidden rounded-[1rem] sm:min-h-[360px] lg:min-h-[400px]">
              <Image
                src={activeSlide.image}
                alt={activeSlide.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07111C]/75 via-[#07111C]/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-8">
        <div className="mx-auto max-w-6xl rounded-[2rem] bg-[#123A56] px-8 py-12 text-white shadow-[0_20px_60px_rgba(18,58,86,0.18)] sm:px-12 sm:py-14">
          {/* <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/70">
            Integrated Learning & Practical Exposure
          </p> */}
          <h2 className="font-poppins mt-4 text-3xl font-semibold sm:text-4xl">
            Planned Training Environment
          </h2>
          <div className="mt-5 h-px w-24 bg-white/20" />
          <p className="mt-6 max-w-4xl text-base leading-8 text-white/85 sm:text-lg">
            Our planned education and training ecosystem is envisioned to include:
          </p>

          <div className="mt-8 rounded-[1.5rem] bg-white/10 p-6 backdrop-blur-sm sm:p-8">
            <div className="grid gap-4 sm:gap-5">
              {plannedEnvironmentItems.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-xl border border-white/8 bg-white/5 px-4 py-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-white" />
                  <p className="text-base leading-7 text-white/95 sm:text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
