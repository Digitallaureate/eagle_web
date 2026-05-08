export type HeaderNavItem = {
  label: string;
  href: string;
  hasChevron?: boolean;
  children?: HeaderNavItem[];
};

export const headerContent = {
  brand: {
    logoSrc: "/assets/logo_new.png",
    logoAlt: "AVPL International logo",
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
      hasChevron: true,
      children: [
        { label: "Media Coverage", href: "/resources/media-coverage" },
        { label: "Press Release", href: "/resources/press-release" },
        { label: "Gallery", href: "/resources/gallery" },
        { label: "Blog", href: "/resources/blog" },
      ],
    },
    { label: "Production Unit", href: "/production-unit" },
    { label: "Education & Training", href: "/investor" },
  ] satisfies HeaderNavItem[],
  cta: {
    label: "Contact Us",
    href: "/contact-us",
  },
};
