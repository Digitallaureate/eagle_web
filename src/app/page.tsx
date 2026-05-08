"use client";

import Image from "next/image";
import Link from "next/link";
import { site } from "@/utils/site";
import { useState, useEffect } from "react";
import {
  Award,
  BadgeCheck,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Clock,
  Clock3,
  CircleDot,
  Cpu,
  ExternalLink,
  GraduationCap,
  HandCoins,
  Lightbulb,
  MapPinned,
  Plane,
  Ribbon,
  ScanSearch,
  Settings2,
  ShieldCheck,
  Smile,
  Sprout,
  Target,
  Users,
  UsersRound,
  Waypoints,
  Wrench,
} from "lucide-react";

const slides = [
  {
    image: "/assets/slider/global_freight.jpg",
    title: "Global Freight",
  },
  {
    image: "/assets/slider/courier_services.jpg",
    title: "Courier Services",
  },
  {
    image: "/assets/slider/domestics_logistics.jpg",
    title: "Domestic Logistics",
  },
  {
    image: "/assets/slider/special_service.jpg",
    title: "Specialized Solutions",
  },
  {
    image: "/assets/slider/value_added_services.jpg",
    title: "Value Added Services",
  },
];

const stats = [
  { icon: UsersRound, value: "9+", label: "Years Experience" },
  { icon: MapPinned, value: "16+", label: "States & 3UT'S Covered" },
  { icon: Award, value: "100K+", label: "Certified Youth" },
  { icon: BadgeCheck, value: "70+", label: "Drone Training Centres" },
];

const aboutGallery = {
  left: [
    { src: "/assets/slider/domestics_logistics.jpg", alt: "Drone flying over agricultural land" },
    { src: "/assets/slider/special_service.jpg", alt: "Drone operating in a rugged outdoor environment" },
  ],
  right: [
    { src: "/assets/slider/global_freight.jpg", alt: "Field operator monitoring a drone mission" },
    { src: "/assets/slider/courier_services.jpg", alt: "Drone use in practical ground operations" },
  ],
};

const productShowcase = [
  {
    id: "comercialDrones",
    label: "Commercial & Consumer Drones",
    title: "Commercial & Consumer Drones",
    href: "/products/commercial-consumer-drones",
    image: "/assets/slider/domestics_logistics.jpg",
    description:
      "EAGLE AI AEROSPACE (OPC) is working toward developing drone solutions for businesses, professionals, creators, and everyday users. From aerial photography and surveying to recreational and commercial applications, our goal is to deliver reliable, easy-to-use, and future-ready drone technology for a wide range of users.",
    points: [
      { icon: Clock3, text: "40–60% time saving in farm management" },
      { icon: HandCoins, text: "30–50% reduction in labour and resource costs" },
      { icon: Sprout, text: "10–15% reduction in crop loss" },
      { icon: ScanSearch, text: "Improved crop monitoring and precision decisions" },
    ],
  },
  {
    id: "agri",
    label: "Agriculture",
    title: "Agriculture",
    href: "/products/agriculture",
    image: "/assets/slider/global_freight.jpg",
    description:
      "EAGLE AI AEROSPACE (OPC) is focused on developing drone solutions for modern agriculture, including crop spraying, aerial monitoring, and field mapping applications. Our vision is to make advanced agri-technology more accessible, helping farmers improve productivity, optimize resources, and adopt efficient farming practices across Bharat.",
    points: [
      { icon: Plane, text: "On-demand access to commercial drone operations" },
      { icon: Users, text: "Certified pilots and support teams for field delivery" },
      { icon: Settings2, text: "Lower capex with flexible service deployment" },
      { icon: ShieldCheck, text: "Safer, compliant, and standardized execution" },
    ],
  },
  {
    id: "industrial",
    label: "Industrial",
    title: "Industrial",
    href: "/products/industrial",
    image: "/assets/slider/courier_services.jpg",
    description:
      "EAGLE AI AEROSPACE (OPC) is focused on developing industrial drone solutions for engineering, infrastructure, construction, and utility operations. Our planned systems are intended to support site inspections, drainage monitoring, surveying, and infrastructure assessment while improving efficiency, safety, and operational visibility.",
    points: [
      { icon: GraduationCap, text: "Structured learning for drone careers and certifications" },
      { icon: BookOpen, text: "Practical modules with simulation and field exposure" },
      { icon: Award, text: "Industry-aligned curriculum for employability outcomes" },
      { icon: UsersRound, text: "Training designed for schools, colleges, and youth programs" },
    ],
  },
  {
    id: "defence",
    label: "Defence/ Tactical UAV Solutions",
    title: "Defence/ Tactical UAV Solutions",
    href: "/products/defence-tactical-uav-solutions",
    image: "/assets/slider/special_service.jpg",
    description:
      "EAGLE AI AEROSPACE (OPC) is working toward the development of next-generation tactical UAV systems for defense and security applications. Our vision includes aerial platforms for border monitoring, reconnaissance, tactical surveillance, and mission-support operations, with a focus on innovation, reliability, and operational adaptability.",
    points: [
      { icon: Cpu, text: "Indigenous drone platforms built for real-world missions" },
      { icon: Wrench, text: "Reliable design with maintainable hardware systems" },
      { icon: MapPinned, text: "Use cases across mapping, surveillance, and delivery" },
      { icon: BadgeCheck, text: "Operational quality built for scale and trust" },
    ],
  },
];

const processSteps = [
  { title: "Plan", description: "Detailed route planning, documentation, and risk mitigation." },
  { title: "Move", description: "Operational execution with partner coordination and tracking." },
  { title: "Deliver", description: "Final-mile fulfillment, proof of delivery, and post-delivery care." },
];

const productionHighlights = [
  { icon: Waypoints, text: "Precision Engineering Processes" },
  { icon: Target, text: "Scalable Production Capabilities" },
  { icon: Lightbulb, text: "Technology-Driven Development" },
  { icon: Ribbon, text: "Quality-Focused Operations" },
];

const educationHighlights = [
  { icon: Waypoints, text: "Industry-focused drone education" },
  { icon: Target, text: "Practical pilot training programs" },
  { icon: Lightbulb, text: "Technical skill development" },
  { icon: Ribbon, text: "Career-oriented learning environment" },
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(productShowcase[0].id);

  const activeProduct =
    productShowcase.find((product) => product.id === selectedProduct) ?? productShowcase[0];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <main className="bg-gray-100 text-gray-900">

      {/* Hero Slider */}
      <div className="relative w-full" style={{ height: "580px" }}>
        <section className="relative h-full w-full overflow-hidden">
          {/* Slides */}
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"
                }`}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover object-center"
                priority={i === 0}
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>
          ))}

          {/* Slide title */}
          <div className="absolute inset-0 flex items-center px-12">
            <h1 className="text-4xl font-bold text-white drop-shadow-md md:text-5xl">
              {slides[current].title}
            </h1>
          </div>

          {/* Prev / Next */}
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white transition hover:bg-black/60"
          >
            <ChevronLeft size={26} />
          </button>
          <button
            onClick={next}
            aria-label="Next slide"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white transition hover:bg-black/60"
          >
            <ChevronRight size={26} />
          </button>

        </section>

        {/* Feature pills — overlapping bottom, outside overflow-hidden */}
        <div className="absolute bottom-0 left-1/2 w-full max-w-7xl -translate-x-1/2 translate-y-1/2 px-4 sm:px-6 lg:px-8">
          {/* <div className="grid grid-cols-1 gap-6 rounded-[1.7rem] bg-white px-8 py-8 shadow-[0_18px_40px_rgba(15,23,42,0.18)] sm:grid-cols-2 sm:px-10 lg:grid-cols-4 lg:gap-8 lg:px-8">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="flex items-center gap-4"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#1489c9]/10 text-[#1489c9]">
                    <Icon size={28} strokeWidth={2.1} />
                  </div>
                  <div>
                    <p className="text-4xl font-extrabold leading-none text-[#183b5b]">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-base text-slate-500">
                      {stat.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div> */}
        </div>
      </div>

      {/* Spacer for floating stats bar */}
      <div className="h-28 sm:h-24" />

      {/* About section */}
      <section className="bg-[#31668922] py-16 px-4">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-[20%_1fr_20%]">
          <div className="hidden lg:flex flex-col items-center gap-6">
            {aboutGallery.left.map((item) => (
              <div
                key={item.src}
                className="relative h-40 w-40 overflow-hidden rounded-xl"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="160px"
                />
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center px-2 text-center lg:items-start lg:text-left sm:px-6">
            <h2 className="text-3xl font-bold text-[#193C54] sm:text-4xl">
              About Us
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#434242] sm:text-base lg:text-justify">
              At Eagle AI Aerospace (OPC), we are building the future of intelligent aviation.
              Founded with a vision to revolutionize aerial operations, we harness the power of artificial intelligence and advanced drone technologies to create smarter, faster, and more efficient solutions for modern industries. Our offerings span across surveillance, mapping, inspection, and autonomous operations—empowering businesses with real-time insights and operational excellence.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[#434242] sm:text-base lg:text-justify">
              We believe that the sky is not the limit—it is the starting point. With a strong commitment to innovation, safety, and reliability, Eagle AI Aerospace (OPC) is positioned to become a trusted partner in the evolving aerospace and AI-driven ecosystem.
              Our approach is rooted in combining cutting-edge technology with practical industry applications. Whether it is infrastructure monitoring, industrial inspections, security surveillance, or future-ready logistics solutions, we aim to deliver value-driven outcomes that enhance productivity and reduce operational risks.
            </p>
            <Link
              href="/about-us"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-[#193C54] px-7 py-3 text-base font-semibold text-white shadow-[0_10px_24px_rgba(25,60,84,0.2)] transition hover:bg-[#143247]"
            >
              Learn More
            </Link>
          </div>

          <div className="hidden lg:flex flex-col items-center gap-6">
            {aboutGallery.right.map((item) => (
              <div
                key={item.src}
                className="relative h-40 w-40 overflow-hidden rounded-xl"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="160px"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <div className="h-30" /> */}

      <section className="bg-[#f4f8fb] px-4 py-12 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex justify-center">
            <div className="flex flex-wrap justify-center rounded-lg p-1 sm:space-x-4 sm:divide-x sm:divide-gray-300">
              {productShowcase.map((product) => (
                <button
                  key={product.id}
                  type="button"
                  onClick={() => setSelectedProduct(product.id)}
                  className={`relative whitespace-nowrap px-2 pb-1 pt-2 text-base font-semibold transition-colors duration-300 sm:px-6 sm:pb-2 sm:text-xl md:text-2xl ${activeProduct.id === product.id
                    ? "text-[#193C54] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-[#193C54] sm:after:h-[3px]"
                    : "text-[#193C54] hover:text-[#193C54]"
                    }`}
                >
                  {product.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <Image
                src={activeProduct.image}
                alt={activeProduct.title}
                width={900}
                height={500}
                className="h-[500px] w-full rounded-2xl object-cover shadow-md"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>

            <div className="text-[#193C54]">
              <h2 className="mb-4 text-2xl font-bold text-[#193C54] md:text-3xl">
                {activeProduct.title}
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-[#434242]">
                {activeProduct.description}
              </p>

              <div className="mb-6 grid gap-4 sm:grid-cols-2">
                {activeProduct.points.map((point) => {
                  const Icon = point.icon;

                  return (
                    <div
                      key={point.text}
                      className="flex flex-col items-center rounded-xl bg-white p-4 text-center text-sm shadow"
                    >
                      <Icon className="mb-2 h-8 w-8 text-[#193C54]" strokeWidth={1.8} />
                      <p className="font-semibold text-[#193C54]">
                        {point.text}
                      </p>
                    </div>
                  );
                })}
              </div>

              <Link
                href={activeProduct.href}
                className="mt-8 inline-flex items-center justify-center rounded-full bg-[#193C54] px-8 py-4 text-lg font-semibold text-white shadow-[0_10px_24px_rgba(25,60,84,0.18)] transition hover:bg-[#143247]"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="h-30" />

      <section className="bg-white px-4 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-4xl font-bold text-[#193C54] sm:text-5xl">
              Production Unit
            </h2>
            <p className="mt-6 text-xl leading-relaxed text-[#434242]">
              EAGLE AI AEROSPACE (OPC) aims to build a future-ready production and assembly ecosystem for next-generation drone solutions. Our planned facility is envisioned to support product development, system integration, testing, and scalable manufacturing capabilities for diverse aerial technology applications.
            </p>
          </div>

          <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1fr_1.08fr]">
            <div className="space-y-8">
              {productionHighlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.text}
                    className="flex items-center gap-4 rounded-full bg-[#214764] px-8 py-5 text-white shadow-sm"
                  >
                    <Icon className="h-8 w-8 shrink-0" strokeWidth={1.9} />
                    <p className="text-2xl font-medium">{item.text}</p>
                  </div>
                );
              })}
            </div>

            <Link
              href="/production-unit"
              className="group relative block overflow-hidden rounded-[1.6rem] shadow-lg"
            >
              <Image
                src="/assets/slider/Air_Freight_Slider.png"
                alt="Production unit facility"
                width={1200}
                height={900}
                className="h-full min-h-[420px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                sizes="(min-width: 1024px) 52vw, 100vw"
              />
              <div className="absolute bottom-6 right-6 flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#193C54] shadow-md transition-transform duration-300 group-hover:scale-110">
                <ExternalLink className="h-7 w-7" strokeWidth={2.2} />
              </div>
            </Link>
          </div>
        </div>
      </section>
      <div className="h-20" />
      <section className="bg-white px-4 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-4xl font-bold text-[#193C54] sm:text-5xl">
              Education and Traning
            </h2>
            <p className="mt-6 text-xl leading-relaxed text-[#434242]">
              EAGLE AI AEROSPACE (OPC) is working toward building a dedicated drone education and training center focused on developing practical skills and technical knowledge in drone technology and pilot training. Inspired by industry-oriented learning models,
              our vision is to help students understand drone systems, operations, safety practices, and emerging career opportunities in the growing UAV ecosystem.
            </p>
          </div>

          <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1fr_1.08fr]">
            <div className="space-y-8">
              {educationHighlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.text}
                    className="flex items-center gap-4 rounded-full bg-[#214764] px-8 py-5 text-white shadow-sm"
                  >
                    <Icon className="h-8 w-8 shrink-0" strokeWidth={1.9} />
                    <p className="text-2xl font-medium">{item.text}</p>
                  </div>
                );
              })}
            </div>

            <Link
              href="/production-unit"
              className="group relative block overflow-hidden rounded-[1.6rem] shadow-lg"
            >
              <Image
                src="/assets/slider/Air_Freight_Slider.png"
                alt="Production unit facility"
                width={1200}
                height={900}
                className="h-full min-h-[420px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                sizes="(min-width: 1024px) 52vw, 100vw"
              />
              <div className="absolute bottom-6 right-6 flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#193C54] shadow-md transition-transform duration-300 group-hover:scale-110">
                <ExternalLink className="h-7 w-7" strokeWidth={2.2} />
              </div>
            </Link>
          </div>
        </div>
      </section>
      <div className="h-20" />


      {/* Leadership Team */}
      {/* <section className="w-full bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-5xl font-extrabold text-gray-900">Our Leadership Team</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Vivek Bist", role: "Founder & CEO", img: "/assets/vivek2.png" },
              { name: "Geeta Bist", role: "Co-Founder & COO", img: "/assets/geeta2.png" },
              { name: "Sagar Chaudhary", role: "CBDO", img: "/assets/sagar1.png" },
              { name: "Rajat Kumar Singh", role: "Tech Lead", img: "/assets/rajat1.png" },
            ].map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center text-center transition-transform duration-300 hover:scale-105"
              >
                <div className="relative mb-6 aspect-square w-full overflow-hidden rounded-xl shadow-lg transition-shadow hover:shadow-xl">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <h3 className="mb-2 text-2xl font-bold text-red-500">{member.name}</h3>
                <p className="font-semibold text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}


      {/* <div className="h-30" /> */}


      {/* <section className="mx-auto max-w-7xl px-4 pb-16">
        <div className="rounded-2xl bg-white p-8 shadow-sm md:p-12"> */}

      {/* Services Offered */}
      {/* <h2 className="mb-12 text-4xl font-bold text-gray-900">Services Offered</h2> */}
      {/* <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Global Freight", href: "/services/global-freight", img: "/assets/slider/global_freight.jpg" },
              { title: "Courier Services", href: "/services/courier-services", img: "/assets/slider/courier_services.jpg" },
              { title: "Domestic Logistics", href: "/services/domestic-logistics", img: "/assets/slider/domestics_logistics.jpg" },
              { title: "Value-Added Services", href: "/services/value-added", img: "/assets/slider/value_added_services.jpg" },
              { title: "Specialized Solution", href: "/services/specialized", img: "/assets/slider/special_service.jpg" },
            ].map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group block cursor-pointer overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="bg-black py-5">
                  <h3 className="text-center text-lg font-bold text-white">
                    {s.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div> */}

      {/* Our Process */}
      {/* <h2 className="mb-12 text-4xl font-bold text-gray-900 text-left">Our Process</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Book Your Things", icon: Clock, bg: "bg-[#D6EAF8]", iconColor: "text-[#1a237e]" },
              { title: "Pack Your Things", icon: Smile, bg: "bg-[#B2DFDB]", iconColor: "text-[#006064]" },
              { title: "Move Your Things", icon: CircleDot, bg: "bg-[#E1BEE7]", iconColor: "text-[#673AB7]" },
              { title: "Deliver Your Things", icon: Clock, bg: "bg-[#FFE0B2]", iconColor: "text-[#E65100]" },
            ].map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={i}
                  className={`${p.bg} flex flex-col items-center justify-center rounded-xl py-14 px-4 text-center transition-all duration-300 hover:scale-105 hover:shadow-md`}
                >
                  <Icon size={64} className={`${p.iconColor} mb-6`} strokeWidth={1.5} />
                  <h4 className="text-xl font-bold text-gray-900">{p.title}</h4>
                </div>
              );
            })}
          </div> */}

      {/* </div>
      </section> */}

    </main>
  );
}
