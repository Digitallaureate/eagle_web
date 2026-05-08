"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Cpu,
  GraduationCap,
  HandCoins,
  MapPinned,
  Plane,
  ScanSearch,
  Settings2,
  ShieldCheck,
  Sprout,
  Users,
  UsersRound,
  Wrench,
} from "lucide-react";

type ProductIconName =
  | "award"
  | "badgeCheck"
  | "bookOpen"
  | "clock3"
  | "cpu"
  | "graduationCap"
  | "handCoins"
  | "mapPinned"
  | "plane"
  | "scanSearch"
  | "settings2"
  | "shieldCheck"
  | "sprout"
  | "users"
  | "usersRound"
  | "wrench";

type ProductPoint = {
  icon: ProductIconName;
  text: string;
};

type ProductDetailPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  slides: string[];
  points: ProductPoint[];
  summary: string;
  pointsTitle?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  useCases?: string[];
  useCasesTitle?: string;
};

const iconMap = {
  award: Award,
  badgeCheck: BadgeCheck,
  bookOpen: BookOpen,
  clock3: Clock3,
  cpu: Cpu,
  graduationCap: GraduationCap,
  handCoins: HandCoins,
  mapPinned: MapPinned,
  plane: Plane,
  scanSearch: ScanSearch,
  settings2: Settings2,
  shieldCheck: ShieldCheck,
  sprout: Sprout,
  users: Users,
  usersRound: UsersRound,
  wrench: Wrench,
} as const;

export default function ProductDetailPage({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  slides,
  points,
  summary,
  pointsTitle = "Key Highlights",
  primaryCtaLabel = "Action Button",
  primaryCtaHref = "/contact-us",
  secondaryCtaLabel = "Learn More",
  secondaryCtaHref = "#product-capabilities",
  useCases = [],
  useCasesTitle = "Use Case Tags",
}: ProductDetailPageProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);

  return (
    <main className="bg-white text-[#193C54]">
      <section className="relative min-h-[620px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={`${title}-${slide}`}
            className={`absolute inset-0 transition-opacity duration-700 ${currentSlide === index ? "opacity-100" : "opacity-0"
              }`}
          >
            <Image
              src={slide}
              alt={title}
              fill
              priority={index === 0}
              className="object-cover"
              sizes="100vw"
            />
          </div>
        ))}

        <div className="absolute inset-0 bg-[#07111C]/65" />

        <div className="relative mx-auto flex min-h-[620px] max-w-7xl flex-col items-center justify-center px-6 pb-16 pt-32 text-center text-white">
          <h1 className="font-poppins mt-5 max-w-5xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 lg:px-12">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">


          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#6B7280]">
              About Product
            </p>

            <h2 className="font-poppins mt-4 text-3xl font-semibold text-[#193C54] sm:text-4xl">
              {title}
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[#475569] sm:text-lg">
              {description}
            </p>
            {/* <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={primaryCtaHref}
                className="inline-flex items-center justify-center rounded-full bg-[#193C54] px-6 py-3 text-base font-semibold text-white transition hover:bg-[#143247]"
              >
                {primaryCtaLabel}
              </Link>
              <Link
                href={secondaryCtaHref}
                className="inline-flex items-center gap-2 rounded-full border border-[#193C54]/15 px-6 py-3 text-base font-semibold text-[#193C54] transition hover:bg-[#f4f8fb]"
              >
                {secondaryCtaLabel}
                <ArrowRight className="h-5 w-5" strokeWidth={2.1} />
              </Link>
            </div> */}
          </div>
          <div className="overflow-hidden rounded-[2rem] shadow-[0_20px_50px_rgba(15,23,42,0.14)]">
            <Image
              src={image}
              alt={imageAlt}
              width={1200}
              height={900}
              className="h-full min-h-[300px] w-full object-cover sm:min-h-[420px]"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section id="product-capabilities" className="bg-[#f4f8fb] px-6 py-16 sm:px-10 lg:px-12">
        <div className="mx-auto grid w-full max-w-7xl items-start gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <h2 className="font-poppins text-3xl font-semibold text-[#193C54] sm:text-4xl">
              {pointsTitle}
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[#475569] sm:text-lg">
              {summary}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {points.map((point) => {
              const Icon = iconMap[point.icon];

              return (
                <div
                  key={point.text}
                  className="rounded-[1.5rem] bg-white p-5 shadow-[0_10px_24px_rgba(15,23,42,0.08)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#193C54]/8 text-[#193C54]">
                    <Icon className="h-6 w-6" strokeWidth={1.9} />
                  </div>
                  <p className="mt-4 text-base font-semibold leading-7 text-[#193C54]">
                    {point.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {useCases.length > 0 && (
        <section className="px-6 py-16 sm:px-10 lg:px-12">
          <div className="mx-auto max-w-7xl rounded-[2rem] bg-white p-8 shadow-[0_20px_50px_rgba(15,23,42,0.08)] sm:p-10">
            <h2 className="font-poppins text-3xl font-semibold text-[#193C54] sm:text-4xl">
              {useCasesTitle}
            </h2>
            <div className="mt-8 flex flex-wrap gap-4">
              {useCases.map((useCase) => (
                <span
                  key={useCase}
                  className="rounded-full border border-[#193C54]/12 bg-[#f4f8fb] px-5 py-3 text-sm font-medium text-[#193C54] sm:text-base"
                >
                  {useCase}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
