"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  BookOpen,
  Camera,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Cpu,
  Factory,
  Film,
  GraduationCap,
  HandCoins,
  MapPinned,
  Package,
  Plane,
  ScanSearch,
  Settings2,
  ShieldCheck,
  Siren,
  Sprout,
  Target,
  Users,
  UsersRound,
  Wrench,
} from "lucide-react";

type ProductIconName =
  | "award"
  | "badgeCheck"
  | "bookOpen"
  | "camera"
  | "clock3"
  | "cpu"
  | "factory"
  | "film"
  | "graduationCap"
  | "handCoins"
  | "mapPinned"
  | "package"
  | "plane"
  | "scanSearch"
  | "settings2"
  | "shieldCheck"
  | "siren"
  | "sprout"
  | "target"
  | "users"
  | "usersRound"
  | "wrench";

type ProductPoint = {
  icon: ProductIconName;
  text: string;
};

type ProductCapabilityFeature = {
  icon: ProductIconName;
  title: string;
  description: string;
};

type ProductCapabilityCard = {
  icon: ProductIconName;
  title: string;
  description: string;
  items: string[];
};

type ProductCapabilitiesSection = {
  features: ProductCapabilityFeature[];
  cards: ProductCapabilityCard[];
};

type ProductUseCaseItem = {
  icon: ProductIconName;
  label: string;
};

type ProductUseCasesSection = {
  title: string;
  description: string;
  items: ProductUseCaseItem[];
  footerNote?: string;
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
  capabilitiesSection?: ProductCapabilitiesSection;
  useCasesSection?: ProductUseCasesSection;
  compactCapabilities?: boolean;
};

const iconMap = {
  award: Award,
  badgeCheck: BadgeCheck,
  bookOpen: BookOpen,
  camera: Camera,
  clock3: Clock3,
  cpu: Cpu,
  factory: Factory,
  film: Film,
  graduationCap: GraduationCap,
  handCoins: HandCoins,
  mapPinned: MapPinned,
  package: Package,
  plane: Plane,
  scanSearch: ScanSearch,
  settings2: Settings2,
  shieldCheck: ShieldCheck,
  siren: Siren,
  sprout: Sprout,
  target: Target,
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
  capabilitiesSection,
  useCasesSection,
  compactCapabilities = false,
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
      <section className="relative h-[420px] w-full overflow-hidden md:h-[720px]">
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
        <div className="mx-auto w-full max-w-7xl">
          {capabilitiesSection ? (
            <div className="grid items-start gap-10 lg:grid-cols-[0.92fr_1.08fr]">
              <div>
                <h2 className="font-poppins text-3xl font-semibold text-[#193C54] sm:text-4xl">
                  {pointsTitle}
                </h2>
                <p className="mt-6 max-w-3xl text-base leading-8 text-[#475569] sm:text-lg">
                  {summary}
                </p>

                <div className={compactCapabilities ? "mt-8 space-y-5" : "mt-10 space-y-7"}>
                  {capabilitiesSection.features.map((feature) => {
                    const Icon = iconMap[feature.icon];

                    return (
                      <div
                        key={feature.title}
                        className={`flex items-start ${compactCapabilities ? "gap-3" : "gap-4"}`}
                      >
                        <div
                          className={`flex shrink-0 items-center justify-center rounded-full bg-white text-[#2563eb] shadow-[0_10px_24px_rgba(37,99,235,0.08)] ${
                            compactCapabilities ? "h-12 w-12" : "h-14 w-14"
                          }`}
                        >
                          <Icon
                            className={compactCapabilities ? "h-5 w-5" : "h-6 w-6"}
                            strokeWidth={1.9}
                          />
                        </div>
                        <div>
                          <h3
                            className={`font-semibold text-[#193C54] ${
                              compactCapabilities ? "text-lg" : "text-xl"
                            }`}
                          >
                            {feature.title}
                          </h3>
                          <p
                            className={`max-w-2xl text-[#64748b] ${
                              compactCapabilities
                                ? "mt-1.5 text-sm leading-7"
                                : "mt-2 text-base leading-8"
                            }`}
                          >
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className={compactCapabilities ? "grid gap-4 sm:grid-cols-2" : "grid gap-5 sm:grid-cols-2"}>
                {capabilitiesSection.cards.map((card) => {
                  const Icon = iconMap[card.icon];

                  return (
                    <div
                      key={card.title}
                      className={`rounded-[1.5rem] bg-white shadow-[0_16px_40px_rgba(15,23,42,0.08)] ${
                        compactCapabilities ? "p-4" : "p-5"
                      }`}
                    >
                      <div
                        className={`flex items-center justify-center rounded-full bg-[#2563eb]/8 text-[#2563eb] ${
                          compactCapabilities ? "h-11 w-11" : "h-12 w-12"
                        }`}
                      >
                        <Icon
                          className={compactCapabilities ? "h-5 w-5" : "h-6 w-6"}
                          strokeWidth={1.9}
                        />
                      </div>
                      <h3
                        className={`max-w-xs font-semibold leading-snug text-[#193C54] ${
                          compactCapabilities ? "mt-3 text-lg" : "mt-4 text-xl"
                        }`}
                      >
                        {card.title}
                      </h3>
                      <div
                        className={`rounded-full bg-[#2563eb] ${
                          compactCapabilities ? "mt-3 h-[3px] w-12" : "mt-4 h-1 w-14"
                        }`}
                      />
                      <p
                        className={`text-[#64748b] ${
                          compactCapabilities
                            ? "mt-3 text-sm leading-6"
                            : "mt-4 text-sm leading-7 sm:text-base"
                        }`}
                      >
                        {card.description}
                      </p>

                      <ul className={compactCapabilities ? "mt-3 space-y-2" : "mt-4 space-y-2.5"}>
                        {card.items.map((item) => (
                          <li
                            key={item}
                            className={`flex items-start gap-3 text-[#475569] ${
                              compactCapabilities ? "text-sm leading-5" : "text-sm leading-6"
                            }`}
                          >
                            <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#2563eb]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr]">
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
          )}
        </div>
      </section>

      {useCasesSection ? (
        <section className="bg-white px-6 py-16 sm:px-10 lg:px-12">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#2A5C82]/45 bg-[linear-gradient(135deg,#0b1e33_0%,#0d2440_55%,#12304d_100%)] p-8 text-white shadow-[0_24px_60px_rgba(7,17,28,0.35)] sm:p-10">
            <h2 className="font-poppins text-3xl font-semibold sm:text-4xl">
              {useCasesSection.title}
            </h2>
            <div className="mt-4 h-1 w-16 rounded-full bg-[#2563eb]" />
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
              {useCasesSection.description}
            </p>

            <div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {useCasesSection.items.map((item) => {
                const Icon = iconMap[item.icon];

                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 rounded-[1.35rem] border border-[#2A5C82]/70 bg-[#12304d]/55 px-5 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition hover:border-[#3B82F6]/80 hover:bg-[#173a5c]/70"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#60A5FA]">
                      <Icon className="h-6 w-6" strokeWidth={1.9} />
                    </div>
                    <div className="h-10 w-px bg-white/12" />
                    <p className="text-sm font-medium leading-6 text-white/92 sm:text-base">
                      {item.label}
                    </p>
                  </div>
                );
              })}
            </div>

            
          </div>
        </section>
      ) : useCases.length > 0 ? (
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
      ) : null}
    </main>
  );
}
