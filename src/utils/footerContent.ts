export type FooterLinkItem = {
  label: string;
  href: string;
};

export type FooterSocialItem = {
  label: string;
  href: string;
  icon: "facebook" | "twitter" | "instagram" | "youtube";
};

export type FooterContactNumber = {
  label: string;
  value: string;
};

export const footerContent = {
  brand: {
    logoSrc: "/assets/logo_new.png",
    logoAlt: "Eagle AI Aerospace",
    description:
      "EAGLE AI AEROSPACE (OPS) develops advanced drone solutions for agriculture, industrial, commercial, education, and tactical applications — driving innovation through smart aerial systems, skill development, and future-ready technology.",
  },
  socialLinks: [
    { label: "Facebook", href: "#", icon: "facebook" },
    { label: "Twitter", href: "#", icon: "twitter" },
    { label: "Instagram", href: "#", icon: "instagram" },
    { label: "YouTube", href: "#", icon: "youtube" },
  ] satisfies FooterSocialItem[],
  quickLinks: [
    { label: "About Us", href: "/about-us" },
    { label: "Production Unit", href: "/production-unit" },
    { label: "Education & Training", href: "/investor" },
    { label: "Contact Us", href: "/contact-us" },
  ] satisfies FooterLinkItem[],
  productLinks: [
    { label: "Commercial & Consumer Drones", href: "/products/commercial-consumer-drones" },
    { label: "Agriculture", href: "/products/agriculture" },
    { label: "Industrial", href: "/products/industrial" },
    { label: "Defence/ Tactical UAV Solutions", href: "/products/defence-tactical-uav-solutions" },
  ] satisfies FooterLinkItem[],
  contact: {
    address:
      "H.in.kh No.293 S/f, Western Marg Saidulajab, Gadaipur, South West Delhi, New Delhi, Delhi, India, 110030",
    email: "director@eagleaerospace.in",
    phoneNumbers: [
      { label: "For General Queries", value: "0124-420-2905" },
      { label: "For Drone Training", value: "9870403460" },
    ] satisfies FooterContactNumber[],
  },
  copyright: "© 2026 Eagle AI Aerospace. All rights reserved.",
};
