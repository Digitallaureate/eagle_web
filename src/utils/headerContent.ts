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
        { label: "Consumer UAVs", href: "/products/commercial-consumer-drones" },
        { label: "Agri Drone Tech", href: "/products/agriculture" },
        { label: "Industrial UAVs", href: "/products/industrial" },
        { label: "Tactical UAVs", href: "/products/defence-tactical-uav-solutions" },
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
