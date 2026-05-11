export type HeaderNavItem = {
  label: string;
  href: string;
  hasChevron?: boolean;
  children?: HeaderNavItem[];
};

export const headerContent = {
  brand: {
    logoSrc: "/assets/logo_new.png",
    logoAlt: "International logo",
  },
  navItems: [
    { label: "About Us", href: "/about-us" },
    {
      label: "Products",
      href: "/products",
      hasChevron: true,
      children: [
        { label: "Commercial & Consumer Drones", href: "/products/commercial-consumer-drones" },
        { label: "Agriculture", href: "/products/agriculture" },
        { label: "Industrial", href: "/products/industrial" },
        { label: "Defence/ Tactical UAV Solutions", href: "/products/defence-tactical-uav-solutions" },
      ],
    },
    {
      label: "Resources",
      href: "/resources",
    },
    { label: "Production Unit", href: "/production-unit" },
    { label: "Education & Training", href: "/investor" },
  ] satisfies HeaderNavItem[],
  cta: {
    label: "Contact Us",
    href: "/contact-us",
  },
};
