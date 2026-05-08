import Image from 'next/image';
import Link from 'next/link';
import { ChevronUp, Mail, MapPin, Phone } from 'lucide-react';
import { footerContent } from '@/utils/footerContent';

function SocialIcon({ icon }: { icon: 'facebook' | 'twitter' | 'instagram' | 'youtube' }) {
  if (icon === 'facebook') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-current">
        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.025 4.388 11.02 10.125 11.927v-8.437H7.078v-3.49h3.047V9.413c0-3.021 1.792-4.689 4.533-4.689 1.313 0 2.686.235 2.686.235v2.97H15.83c-1.49 0-1.955.931-1.955 1.887v2.257h3.328l-.532 3.49h-2.796V24C19.612 23.093 24 18.098 24 12.073Z" />
      </svg>
    );
  }

  if (icon === 'twitter') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-current">
        <path d="M23 3.01a9.02 9.02 0 0 1-2.6.74A4.48 4.48 0 0 0 22.38 1a8.94 8.94 0 0 1-2.84 1.12A4.45 4.45 0 0 0 16.3.75c-2.48 0-4.49 2.06-4.49 4.6 0 .36.04.71.11 1.05C8.19 6.2 4.88 4.56 2.66 2.07a4.66 4.66 0 0 0-.61 2.31c0 1.59.79 3 1.99 3.82a4.4 4.4 0 0 1-2.03-.58v.06c0 2.23 1.55 4.1 3.6 4.53a4.37 4.37 0 0 1-2.02.08c.57 1.83 2.23 3.16 4.2 3.2A8.9 8.9 0 0 1 1 17.45a12.53 12.53 0 0 0 6.88 2.05c8.25 0 12.76-7 12.76-13.08 0-.2 0-.39-.01-.59A9.22 9.22 0 0 0 23 3.01Z" />
      </svg>
    );
  }

  if (icon === 'instagram') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-current">
        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5Zm8.92 1.35a1.08 1.08 0 1 1 0 2.16 1.08 1.08 0 0 1 0-2.16ZM12 6.86A5.14 5.14 0 1 1 6.86 12 5.15 5.15 0 0 1 12 6.86Zm0 1.8A3.34 3.34 0 1 0 15.34 12 3.34 3.34 0 0 0 12 8.66Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-current">
      <path d="M23.5 6.2a2.96 2.96 0 0 0-2.08-2.1C19.58 3.6 12 3.6 12 3.6s-7.58 0-9.42.5A2.96 2.96 0 0 0 .5 6.2 30.4 30.4 0 0 0 0 12a30.4 30.4 0 0 0 .5 5.8 2.96 2.96 0 0 0 2.08 2.1c1.84.5 9.42.5 9.42.5s7.58 0 9.42-.5a2.96 2.96 0 0 0 2.08-2.1A30.4 30.4 0 0 0 24 12a30.4 30.4 0 0 0-.5-5.8ZM9.6 15.6V8.4l6 3.6-6 3.6Z" />
    </svg>
  );
}

export default function Footer() {
  const { brand, socialLinks, quickLinks, productLinks, contact, copyright } =
    footerContent;

  return (
    <footer className="bg-[#07111C] text-white/90">
      <div className="mx-auto w-full px-6 py-12 sm:px-10 lg:px-10 lg:py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr_0.9fr_1fr_1.15fr] lg:gap-14">
          <div>
            <div className="mb-6 flex items-center">
              <Link href="/" aria-label="Go to homepage">
                <Image
                  src={brand.logoSrc}
                  alt={brand.logoAlt}
                  width={342}
                  height={235}
                  className="h-auto w-[135px] object-contain sm:w-[150px] lg:w-[165px]"
                  priority
                />
              </Link>
            </div>

            <p className="max-w-md text-[0.95rem] leading-8 text-[#a8b3c6]">
              {brand.description}
            </p>

            <div className="mt-5 flex items-center gap-4">
              {socialLinks.map((socialLink) => {
                return (
                  <a
                    key={socialLink.label}
                    href={socialLink.href}
                    aria-label={socialLink.label}
                    className="text-[#a8b3c6] transition-colors hover:text-white"
                  >
                    <SocialIcon icon={socialLink.icon} />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="mb-6 text-[1.2rem] font-semibold leading-none text-white sm:text-[1.35rem]">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((quickLink) => (
                <li key={quickLink.label}>
                  <Link
                    href={quickLink.href}
                    className="text-[0.95rem] text-[#a8b3c6] transition-colors hover:text-white"
                  >
                    {quickLink.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-[1.2rem] font-semibold leading-none text-white sm:text-[1.35rem]">
              Products
            </h4>
            <ul className="space-y-4">
              {productLinks.map((productLink) => (
                <li key={productLink.label}>
                  <Link
                    href={productLink.href}
                    className="text-[0.95rem] text-[#a8b3c6] transition-colors hover:text-white"
                  >
                    {productLink.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-[1.2rem] font-semibold leading-none text-white sm:text-[1.35rem]">
              Contact Info
            </h4>
            <div className="space-y-5">
              <div className="flex gap-3">
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-white" strokeWidth={1.8} />
                <p className="text-[0.95rem] leading-8 text-[#a8b3c6]">
                  {contact.address}
                </p>
              </div>

              <div className="flex gap-3">
                <Mail className="mt-1 h-5 w-5 flex-shrink-0 text-white" strokeWidth={1.8} />
                <a
                  href={`mailto:${contact.email}`}
                  className="text-[0.95rem] text-[#a8b3c6] transition-colors hover:text-white"
                >
                  {contact.email}
                </a>
              </div>

              <div className="flex gap-3">
                <Phone className="mt-1 h-5 w-5 flex-shrink-0 text-white" strokeWidth={1.8} />
                <div className="space-y-1 text-[0.95rem] leading-8 text-[#a8b3c6]">
                  {contact.phoneNumbers.map((phoneNumber) => (
                    <p key={phoneNumber.label}>
                      {phoneNumber.label}: {phoneNumber.value}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="flex flex-col gap-5 px-6 py-8 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <p className="text-[0.95rem] text-[#a8b3c6]">{copyright}</p>

          <a
            href="#top"
            aria-label="Back to top"
            className="flex h-14 w-14 items-center justify-center self-end rounded-full bg-[#2563eb] text-white transition-colors hover:bg-[#1d4ed8] lg:self-auto"
          >
            <ChevronUp className="h-7 w-7" strokeWidth={1.8} />
          </a>
        </div>
      </div>
    </footer>
  );
}
