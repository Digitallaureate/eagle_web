import ProductDetailPage from "@/components/ProductDetailPage";

export default function AvplDronesPage() {
  return (
    <ProductDetailPage
      eyebrow="Product"
      title="Defence/ Tactical UAV Solutions"
      description="EAGLE AI AEROSPACE is advancing next-generation tactical UAV systems for defence and security applications. These platforms are designed for border monitoring, reconnaissance, tactical surveillance, and mission-support operations with a strong focus on resilience, indigenous capability, and operational adaptability."
      image="https://firebasestorage.googleapis.com/v0/b/kabir-assistant-api.firebasestorage.app/o/assets%2Ftactical_section.png?alt=media&token=6b19f1f0-79a3-4e8c-9c48-2eb40a31428a"
      imageAlt="Defence and tactical UAV systems"
      slides={[
        "https://firebasestorage.googleapis.com/v0/b/kabir-assistant-api.firebasestorage.app/o/assets%2Ftactical_cover1.png?alt=media&token=7d2f0496-625d-492b-a4c9-09783b4fcf2c",
        "https://firebasestorage.googleapis.com/v0/b/kabir-assistant-api.firebasestorage.app/o/assets%2Ftactical_cover2.png?alt=media&token=7ad43d0f-d68f-4c75-8985-eecd43fa8ede",
        "https://firebasestorage.googleapis.com/v0/b/kabir-assistant-api.firebasestorage.app/o/assets%2Ftactical_cover3.png?alt=media&token=727249be-a581-4f63-8929-4e7c412c66ac",
      ]}
      summary="Our Defence / Tactical UAV solutions are engineered for mission-critical operations where reliability, precision, and adaptability are non-negotiable. Designed and developed with a focus on indigenous capability, these systems deliver strong performance in demanding environments."
      pointsTitle="Key Highlights"
      compactCapabilities
      points={[
        { icon: "shieldCheck", text: "Mission-ready reliability" },
        { icon: "cpu", text: "Indigenous platforms" },
        { icon: "target", text: "Advanced ISR capabilities" },
        { icon: "badgeCheck", text: "Secure & resilient operations" },
      ]}
      capabilitiesSection={{
        features: [
          {
            icon: "shieldCheck",
            title: "Mission-Critical Confidence",
            description:
              "Built for demanding field conditions with a focus on reliability, precision, and secure performance across tactical deployments.",
          },
          {
            icon: "cpu",
            title: "Indigenous Capability",
            description:
              "Designed and developed to strengthen self-reliance while supporting secure, adaptable, and operationally relevant defence systems.",
          },
          {
            icon: "target",
            title: "Operational Adaptability",
            description:
              "Configurable payloads, surveillance capability, and mission flexibility help teams respond effectively to evolving operational demands.",
          },
        ],
        cards: [
          {
            icon: "shieldCheck",
            title: "Mission-Ready Reliability",
            description:
              "Built to perform in extreme conditions with high endurance, robust systems, and fail-safe mechanisms for continuous mission success.",
            items: [
              "High-endurance flight support",
              "Robust tactical systems",
              "Fail-safe mission mechanisms",
              "Built for contested environments",
            ],
          },
          {
            icon: "cpu",
            title: "Indigenous Platforms",
            description:
              "Indigenously designed and developed UAV systems strengthen self-reliance while improving capability, security, and supply-chain control.",
            items: [
              "Designed for self-reliance",
              "Secure domestic capability",
              "Improved supply-chain control",
              "Mission-focused platform design",
            ],
          },
          {
            icon: "target",
            title: "Advanced ISR Capabilities",
            description:
              "High-resolution EO/IR sensors and real-time data links enable intelligence, surveillance, and reconnaissance with precision and clarity.",
            items: [
              "EO/IR sensor integration",
              "Real-time data links",
              "Reconnaissance-ready payloads",
              "Precision intelligence support",
            ],
          },
          {
            icon: "badgeCheck",
            title: "Secure & Resilient Operations",
            description:
              "Encrypted communications, anti-jam technology, and GPS-denied navigation support uninterrupted operations in complex environments.",
            items: [
              "Encrypted communications",
              "Anti-jam resilience",
              "GPS-denied navigation support",
              "Operational continuity in the field",
            ],
          },
          {
            icon: "mapPinned",
            title: "Versatile Mission Applications",
            description:
              "Supports a wide range of missions including surveillance, target acquisition, border monitoring, reconnaissance, and tactical support.",
            items: [
              "Border monitoring",
              "Target acquisition",
              "Reconnaissance missions",
              "Tactical support operations",
            ],
          },
          {
            icon: "wrench",
            title: "Maintainable & Field-Ready",
            description:
              "Modular design enables rapid deployment, easier maintenance, and quicker turnaround to minimize downtime and maximize readiness.",
            items: [
              "Rapid deployment design",
              "Easier field maintenance",
              "Quick turnaround support",
              "Reduced downtime in operations",
            ],
          },
          {
            icon: "settings2",
            title: "Scalable & Adaptable",
            description:
              "Configurable payloads and open architecture allow seamless integration and adaptation to evolving mission requirements.",
            items: [
              "Configurable payload options",
              "Open architecture support",
              "Mission-specific adaptability",
              "Future-ready integration paths",
            ],
          },
          {
            icon: "award",
            title: "Operational Quality You Can Trust",
            description:
              "Engineered, tested, and validated to meet stringent defence standards while supporting consistent performance, safety, and assurance.",
            items: [
              "Validated operational quality",
              "Defence-standard execution",
              "Consistent mission performance",
              "Safety and assurance focus",
            ],
          },
        ],
      }}
    />
  );
}
