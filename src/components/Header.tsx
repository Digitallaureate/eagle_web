'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { headerContent } from '@/utils/headerContent';

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDesktopGroup, setOpenDesktopGroup] = useState<string | null>(null);
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null);
  const { brand, navItems, cta } = headerContent;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 32);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) {
      setOpenMobileGroup(null);
    }
  }, [isMenuOpen]);

  useEffect(() => {
    setOpenDesktopGroup(null);
    setIsMenuOpen(false);
    setOpenMobileGroup(null);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-[#07111C]'
        : 'bg-transparent'
        }`}
    >
      <div className="mx-auto flex h-[94px] w-full max-w-[1560px] items-center justify-between px-8 sm:px-12 lg:px-16 xl:px-40">
        <Link href="/" className="flex items-center" aria-label="Go to homepage">
          <Image
            src={brand.logoSrc}
            alt={brand.logoAlt}
            width={342}
            height={235}
            className="h-[62px] w-auto sm:h-[66px] lg:h-[72px]"
            priority
          />
        </Link>

        <div className="hidden items-center gap-10 lg:flex">
          <nav className="flex items-center gap-8 xl:gap-10">
            {navItems.map((navItem) => (
              <div
                key={navItem.label}
                className="relative"
                onMouseEnter={() =>
                  setOpenDesktopGroup(navItem.children?.length ? navItem.label : null)
                }
                onMouseLeave={() => setOpenDesktopGroup(null)}
              >
                {navItem.children?.length ? (
                  <button
                    type="button"
                    onClick={() =>
                      setOpenDesktopGroup((current) =>
                        current === navItem.label ? null : navItem.label
                      )
                    }
                    aria-expanded={openDesktopGroup === navItem.label}
                    className="flex items-center gap-1 text-[0.95rem] font-semibold text-white transition-colors hover:text-white/80"
                  >
                    <span>{navItem.label}</span>

                    {navItem.hasChevron ? (
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          openDesktopGroup === navItem.label ? 'rotate-180' : ''
                        }`}
                        strokeWidth={2}
                      />
                    ) : null}
                  </button>
                ) : (
                  <Link
                    href={navItem.href}
                    onClick={() => setOpenDesktopGroup(null)}
                    className="flex items-center gap-1 text-[0.95rem] font-semibold text-white transition-colors hover:text-white/80"
                  >
                    <span>{navItem.label}</span>

                    {navItem.hasChevron ? (
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          openDesktopGroup === navItem.label ? 'rotate-180' : ''
                        }`}
                        strokeWidth={2}
                      />
                    ) : null}
                  </Link>
                )}

                {navItem.children?.length ? (
                  <div
                    className={`absolute left-0 top-full z-50 pt-5 transition-all duration-200 ${
                      openDesktopGroup === navItem.label
                        ? 'visible opacity-100'
                        : 'invisible opacity-0'
                    }`}
                  >
                    <div className="min-w-[320px] overflow-hidden rounded-lg bg-white py-2 shadow-[0_20px_50px_rgba(15,23,42,0.22)]">
                      {navItem.children.map((childItem) => (
                        <Link
                          key={childItem.label}
                          href={childItem.href}
                          onClick={() => setOpenDesktopGroup(null)}
                          className="block border-b border-slate-200 px-5 py-4 text-[0.95rem] text-slate-700 transition-colors hover:bg-slate-50 hover:text-[#1F4863] last:border-b-0"
                        >
                          {childItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            ))}
          </nav>

          <Link
            href={cta.href}
            className="inline-flex items-center rounded-full bg-white px-8 py-3 text-[0.95rem] font-semibold text-[#1f4863] transition-colors hover:bg-white/90"
          >
            {cta.label}
          </Link>
        </div>

        <button
          type="button"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="inline-flex items-center justify-center rounded-full p-2 text-white lg:hidden"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {isMenuOpen ? (
        <div className="border-t border-white/10 bg-[#1F4863] px-6 py-5 lg:hidden">
          <nav className="flex flex-col gap-4">
            {navItems.map((navItem) => (
              <div key={navItem.label}>
                <div className="flex items-center justify-between">
                  {navItem.children?.length ? (
                    <button
                      type="button"
                      onClick={() =>
                        setOpenMobileGroup((current) =>
                          current === navItem.label ? null : navItem.label
                        )
                      }
                      aria-expanded={openMobileGroup === navItem.label}
                      className="text-base font-semibold text-white"
                    >
                      {navItem.label}
                    </button>
                  ) : (
                    <Link
                      href={navItem.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-base font-semibold text-white"
                    >
                      {navItem.label}
                    </Link>
                  )}

                  {navItem.children?.length ? (
                    <button
                      type="button"
                      aria-label={`Toggle ${navItem.label}`}
                      onClick={() =>
                        setOpenMobileGroup((current) =>
                          current === navItem.label ? null : navItem.label
                        )
                      }
                      className="p-1 text-white"
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          openMobileGroup === navItem.label ? 'rotate-180' : ''
                        }`}
                        strokeWidth={2}
                      />
                    </button>
                  ) : navItem.hasChevron ? (
                    <ChevronDown className="h-4 w-4 text-white" strokeWidth={2} />
                  ) : null}
                </div>

                {navItem.children?.length && openMobileGroup === navItem.label ? (
                  <div className="mt-3 space-y-2 rounded-xl bg-white/5 p-3">
                    {navItem.children.map((childItem) => (
                      <Link
                        key={childItem.label}
                        href={childItem.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="block rounded-lg px-3 py-2 text-sm font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-white"
                      >
                        {childItem.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}

            <Link
              href={cta.href}
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 inline-flex w-fit items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1f4863]"
            >
              {cta.label}
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
