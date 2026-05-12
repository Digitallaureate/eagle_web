import ProductDetailPage from "@/components/ProductDetailPage";

export default function AvplAgriSolutionsPage() {
  return (
    <ProductDetailPage
      eyebrow="Product"
      title="Commercial & Consumer Drones"
      description="EAGLE AI AEROSPACE (OPC) is working toward developing drone solutions for businesses, professionals, creators, and everyday users. From aerial photography and surveying to recreational and commercial applications, our goal is to deliver reliable, easy-to-use, and future-ready drone technology for a wide range of users."
      image="https://firebasestorage.googleapis.com/v0/b/kabir-assistant-api.firebasestorage.app/o/assets%2Fcommerical_section.png?alt=media&token=111c4342-1e2f-4b88-8ae5-e74dc1281a52"
      imageAlt="Commercial and consumer drone applications"
      slides={[
        "https://firebasestorage.googleapis.com/v0/b/kabir-assistant-api.firebasestorage.app/o/assets%2Fcommercial_cover.png?alt=media&token=8221835c-3655-482e-a99a-af92008c0ef0",
        "https://firebasestorage.googleapis.com/v0/b/kabir-assistant-api.firebasestorage.app/o/assets%2Fcommercial_cover1.png?alt=media&token=2a86bfbd-d7ba-44f7-9a46-e30fcabde726",
        "https://firebasestorage.googleapis.com/v0/b/kabir-assistant-api.firebasestorage.app/o/assets%2Fcommercial_cover2.png?alt=media&token=d6e448f7-21af-4dca-bd06-edaed90f0bfc",
        "https://firebasestorage.googleapis.com/v0/b/kabir-assistant-api.firebasestorage.app/o/assets%2Fcommercial_cover3.png?alt=media&token=31fa3dc2-1ea0-4f60-98e0-145bca6a23f5"
      ]}
      summary="Built for real-world performance, our drones combine reliability, intelligence, and ease of use to deliver value across a wide range of applications. From everyday tasks to complex missions, our technology adapts to your needs."
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
      capabilitiesSection={{
        features: [
          {
            icon: "shieldCheck",
            title: "Reliable Performance",
            description:
              "Engineered with robust components and advanced flight stability to perform in diverse environments and conditions.",
          },
          {
            icon: "cpu",
            title: "Smart & Intelligent",
            description:
              "Advanced sensors, autonomous flight modes, and real-time data processing support smarter decisions in the air.",
          },
          {
            icon: "clock3",
            title: "Extended Endurance",
            description:
              "Optimized power systems and efficient designs deliver longer flight times and greater operational coverage.",
          },
          {
            icon: "badgeCheck",
            title: "Safe & Secure",
            description:
              "Built-in fail-safes, protected data links, and geofencing features help maintain safe operations and data security.",
          },
          {
            icon: "settings2",
            title: "Modular & Scalable",
            description:
              "Flexible payload options and scalable configurations allow the platform to grow with your mission requirements.",
          },
        ],
        cards: [
          {
            icon: "clock3",
            title: "Multi-purpose drone applications",
            description:
              "Versatile solutions designed to handle a wide variety of missions across industries.",
            items: [
              "Inspection & monitoring",
              "Delivery & logistics",
              "Mapping & surveying",
              "Search & rescue",
              "Agriculture & environmental monitoring",
            ],
          },
          {
            icon: "scanSearch",
            title: "Aerial imaging & surveying capabilities",
            description:
              "High-quality imaging and data capture for precise analysis and actionable insights.",
            items: [
              "4K/6K camera support",
              "Thermal & multispectral imaging",
              "LiDAR & photogrammetry",
              "Real-time data transmission",
              "Accurate mapping & 3D modeling",
            ],
          },
          {
            icon: "users",
            title: "User-friendly operational systems",
            description:
              "Intuitive controls and smart automation make complex operations simple.",
            items: [
              "Easy setup & quick deployment",
              "Intuitive flight control interface",
              "Automated flight planning",
              "Real-time telemetry & alerts",
              "Training & support resources",
            ],
          },
          {
            icon: "badgeCheck",
            title: "Solutions for commercial & personal use",
            description:
              "Reliable and adaptable solutions for businesses, professionals, and individual users.",
            items: [
              "Enterprise integration & APIs",
              "Custom payload options",
              "Scalable for small to large operations",
              "After-sales support & services",
              "Cost-effective & future-ready",
            ],
          },
        ],
      }}
      useCases={[
        "Aerial Photography",
        "Infrastructure Inspection",
        "Smart Surveillance",
        "Recreational Flying",
        "Content Creation",
        "Industrial Operations",
      ]}
      useCasesSection={{
        title: "Mission Applications",
        description:
          "Versatile drone solutions built to support commercial users, creators, professionals, and mission-focused operations across modern industries.",
        items: [
          { icon: "camera", label: "Aerial Mapping" },
          { icon: "shieldCheck", label: "Border Surveillance" },
          { icon: "wrench", label: "Infrastructure Inspection" },
          { icon: "target", label: "Tactical Reconnaissance" },
          { icon: "factory", label: "Industrial Monitoring" },
          { icon: "sprout", label: "Agriculture Intelligence" },
          { icon: "siren", label: "Emergency Response" },
          { icon: "package", label: "Smart Logistics" },
        ],
        footerNote:
          "Engineered for reliability. Built for performance. Trusted for every mission.",
      }}
    />
  );
}
