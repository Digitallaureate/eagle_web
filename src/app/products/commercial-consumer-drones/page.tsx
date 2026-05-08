import ProductDetailPage from "@/components/ProductDetailPage";

export default function AvplAgriSolutionsPage() {
  return (
    <ProductDetailPage
      eyebrow="Product"
      title="Commercial & Consumer Drones"
      description="EAGLE AI AEROSPACE (OPC) is working toward developing drone solutions for businesses, professionals, creators, and everyday users. From aerial photography and surveying to recreational and commercial applications, our goal is to deliver reliable, easy-to-use, and future-ready drone technology for a wide range of users."
      image="/assets/slider/domestics_logistics.jpg"
      imageAlt="Commercial and consumer drone applications"
      slides={[
        "/assets/slider/domestics_logistics.jpg",
        "/assets/slider/courier_services.jpg",
        "/assets/slider/special_service.jpg",
      ]}
      summary="This category is designed to support practical use, accessibility, and dependable performance across everyday flying, field operations, and emerging commercial opportunities."
      pointsTitle="Core Capabilities"
      primaryCtaLabel="Action Button"
      primaryCtaHref="/contact-us"
      secondaryCtaLabel="Learn More"
      secondaryCtaHref="#product-capabilities"
      points={[
        { icon: "clock3", text: "Multi-purpose drone applications" },
        { icon: "scanSearch", text: "Aerial imaging & surveying capabilities" },
        { icon: "users", text: "User-friendly operational systems" },
        { icon: "badgeCheck", text: "Solutions for commercial & personal use" },
      ]}
      useCases={[
        "Aerial Photography",
        "Infrastructure Inspection",
        "Smart Surveillance",
        "Recreational Flying",
        "Content Creation",
        "Industrial Operations",
      ]}
    />
  );
}

