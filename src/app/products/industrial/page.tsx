import ProductDetailPage from "@/components/ProductDetailPage";

export default function IndustrialSolutionsPage() {
  return (
    <ProductDetailPage
      eyebrow="Product"
      title="Industrial"
      description="EAGLE AI AEROSPACE is advancing industrial drone solutions built for inspection, monitoring, mapping, and safer operations across demanding environments. Our UAV platforms combine high-quality imaging, real-time intelligence, and reliable workflows to help organizations improve efficiency, reduce risk, and make faster data-driven decisions across critical industrial sites."
      image="https://firebasestorage.googleapis.com/v0/b/kabir-assistant-api.firebasestorage.app/o/assets%2Findustrial_section.png?alt=media&token=50919730-9893-4045-855e-44c5617ebd21"
      imageAlt="Industrial drone solutions"
      slides={[
        "https://firebasestorage.googleapis.com/v0/b/kabir-assistant-api.firebasestorage.app/o/assets%2Findustrial_cover1.png?alt=media&token=e06e32fc-2137-4c82-a92f-58adaa5eb2cc",
        "https://firebasestorage.googleapis.com/v0/b/kabir-assistant-api.firebasestorage.app/o/assets%2Findustrial_cover2.png?alt=media&token=b90eb615-4eda-4f75-bba4-ef9eaf167820",
        "https://firebasestorage.googleapis.com/v0/b/kabir-assistant-api.firebasestorage.app/o/assets%2Findustrial_cover3.png?alt=media&token=6a3614a0-6f86-4bc0-86eb-3a5ce685069e",
      ]}
      summary="Our industrial drone solutions combine advanced technology, real-time intelligence, and reliable operations to enhance safety, efficiency, and decision-making across critical environments."
      pointsTitle="Key Highlights"
      compactCapabilities
      points={[
        { icon: "scanSearch", text: "Advanced inspection capabilities" },
        { icon: "camera", text: "Real-time monitoring & surveillance" },
        { icon: "cpu", text: "AI-powered data analytics" },
        { icon: "shieldCheck", text: "Enhanced safety & risk reduction" },
      ]}
      capabilitiesSection={{
        features: [
          {
            icon: "settings2",
            title: "Powering Smarter Industries with Drones",
            description:
              "Industrial drone programs help teams inspect assets faster, monitor operations more closely, and respond with better information in high-value environments.",
          },
          {
            icon: "factory",
            title: "Operational Intelligence",
            description:
              "From industrial plants to infrastructure corridors, aerial data improves visibility, planning, and maintenance decisions.",
          },
          {
            icon: "shieldCheck",
            title: "Safer Execution",
            description:
              "Remote operations reduce human exposure in hazardous areas while preserving quality, compliance, and control.",
          },
        ],
        cards: [
          {
            icon: "scanSearch",
            title: "Advanced Inspection Capabilities",
            description:
              "Inspect hard-to-reach and hazardous areas with high-resolution imaging for accurate condition assessment and defect detection.",
            items: [
              "Asset condition checks",
              "Defect identification",
              "Hard-to-access area coverage",
              "Faster inspection cycles",
            ],
          },
          {
            icon: "camera",
            title: "Real-time Monitoring & Surveillance",
            description:
              "Live data streaming and real-time alerts enable proactive monitoring of assets, sites, and operations from anywhere.",
            items: [
              "Live video feeds",
              "Remote site visibility",
              "Real-time anomaly alerts",
              "Improved operational oversight",
            ],
          },
          {
            icon: "cpu",
            title: "AI-Powered Data Analytics",
            description:
              "AI-driven insights turn complex data into actionable intelligence for better decision-making and predictive maintenance.",
            items: [
              "Automated analysis workflows",
              "Trend detection",
              "Predictive maintenance support",
              "Actionable reporting",
            ],
          },
          {
            icon: "shieldCheck",
            title: "Enhanced Safety & Risk Reduction",
            description:
              "Minimize human exposure to hazards by using drones for high-risk tasks while maintaining compliance and safety standards.",
            items: [
              "Reduced field exposure",
              "Safer hazardous inspections",
              "Compliance-focused execution",
              "Standardized operational control",
            ],
          },
          {
            icon: "clock3",
            title: "Cost & Time Efficiency",
            description:
              "Reduce downtime and operational costs with faster inspections, automated reporting, and efficient resource utilization.",
            items: [
              "Lower inspection time",
              "Reduced shutdown requirements",
              "Optimized manpower usage",
              "Faster reporting cycles",
            ],
          },
          {
            icon: "mapPinned",
            title: "Surveying & Mapping Excellence",
            description:
              "High-accuracy mapping, 3D modeling, and volumetric analysis support planning, progress tracking, and site management.",
            items: [
              "3D terrain models",
              "Volumetric calculations",
              "Progress documentation",
              "Precision planning support",
            ],
          },
          {
            icon: "wrench",
            title: "Versatile Industrial Applications",
            description:
              "Designed for sectors such as oil & gas, power, construction, mining, and manufacturing to support diverse operational needs.",
            items: [
              "Oil & gas operations",
              "Powerline and utility checks",
              "Construction monitoring",
              "Mining and plant oversight",
            ],
          },
          {
            icon: "badgeCheck",
            title: "Secure Data Management",
            description:
              "Secure storage, controlled access, and protected workflows help preserve the integrity and confidentiality of critical information.",
            items: [
              "Controlled data access",
              "Secure storage practices",
              "Protected information workflows",
              "Confidentiality support",
            ],
          },
          {
            icon: "award",
            title: "Scalable & Future-Ready Solutions",
            description:
              "Modular systems and evolving technology ensure scalable solutions that grow with business needs.",
            items: [
              "Scalable deployments",
              "Modular payload options",
              "Easy technology upgrades",
              "Built for long-term adoption",
            ],
          },
        ],
      }}
    />
  );
}
