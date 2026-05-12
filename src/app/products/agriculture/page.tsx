import ProductDetailPage from "@/components/ProductDetailPage";

export default function AvplDroneAsAServicePage() {
  return (
    <ProductDetailPage
      eyebrow="Product"
      title="Agriculture"
      description="EAGLE AI AEROSPACE  is building intelligent drone solutions designed to transform modern agriculture across Bharat. Our advanced UAV systems support precision crop spraying, aerial surveillance, field mapping, and real-time farm monitoring to help farmers improve efficiency and maximize yields. By integrating AI-driven analytics with smart aerial technology, we enable faster decision-making, optimized resource utilization, and sustainable farming practices. Our mission is to make next-generation agri-tech accessible, reliable, and scalable for farms of every size."
      image="https://firebasestorage.googleapis.com/v0/b/kabir-assistant-api.firebasestorage.app/o/assets%2Fagriculture_section.png?alt=media&token=ced8c015-1e2f-42d8-b1d9-48a73e81995f"
      imageAlt="Agriculture drone solutions"
      slides={[
        "https://firebasestorage.googleapis.com/v0/b/kabir-assistant-api.firebasestorage.app/o/assets%2Fagriculture_cover.png?alt=media&token=87db34e0-5454-46b4-a0de-86dcf961445d",
        "https://firebasestorage.googleapis.com/v0/b/kabir-assistant-api.firebasestorage.app/o/assets%2Fagriculture_cover2.png?alt=media&token=49a37faa-e793-49f5-81f4-9d7b5bf600ac",
        "https://firebasestorage.googleapis.com/v0/b/kabir-assistant-api.firebasestorage.app/o/assets%2Fagriculture_cover3.png?alt=media&token=fe32c8b0-972b-4a62-b005-b1bca816d9b2",
      ]}
      summary="Our agriculture-focused direction emphasizes accessible field services, smarter decision-making, and reliable operational support for modern farm workflows."
      pointsTitle="Key Highlights"
      compactCapabilities
      points={[
        { icon: "plane", text: "On-demand access to commercial drone operations" },
        { icon: "users", text: "Certified pilots and support teams for field delivery" },
        { icon: "settings2", text: "Lower capex with flexible service deployment" },
        { icon: "shieldCheck", text: "Safer, compliant, and standardized execution" },
      ]}
      capabilitiesSection={{
        features: [
          {
            icon: "sprout",
            title: "Smarter Insights for Better Decisions",
            description:
              "High-resolution data and advanced analytics help you understand your fields better and make confident, timely decisions.",
          },
          {
            icon: "scanSearch",
            title: "End-to-End Field Support",
            description:
              "From planning and data capture to analysis and reporting, we support your operations at every step.",
          },
          {
            icon: "clock3",
            title: "Faster Turnaround",
            description:
              "Optimized workflows and efficient mission planning ensure quick data delivery when you need it most.",
          },
          {
            icon: "shieldCheck",
            title: "Reliable & Consistent Results",
            description:
              "Standardized processes and quality checks ensure accurate, repeatable, and dependable outcomes.",
          },
          {
            icon: "settings2",
            title: "Built for Modern Farming",
            description:
              "Solutions integrate smoothly with your current tools, platforms, and farm management systems.",
          },
          {
            icon: "usersRound",
            title: "Local Support, Always",
            description:
              "Responsive support teams and on-ground service help ensure you are never left waiting in the field.",
          },
        ],
        cards: [
          {
            icon: "plane",
            title: "On-demand access to commercial drone operations",
            description:
              "Access professional drone services anytime without the upfront investment or operational complexity.",
            items: [
              "Pay for what you need",
              "Scalable for any farm size",
              "Quick scheduling & deployment",
              "Wide area coverage",
            ],
          },
          {
            icon: "users",
            title: "Certified pilots and support teams for field delivery",
            description:
              "Experienced, certified, and safety-focused professionals deliver dependable execution in real field conditions.",
            items: [
              "DGCA-compliant certified pilots",
              "Trained field technicians",
              "Safety-first operational standards",
              "Ongoing training & best practices",
            ],
          },
          {
            icon: "settings2",
            title: "Lower capex with flexible service deployment",
            description:
              "Reduce upfront costs and avoid equipment overheads with flexible service models.",
            items: [
              "No drone purchase required",
              "No maintenance or repair costs",
              "Subscription or per-mission options",
              "Predictable operational budgeting",
            ],
          },
          {
            icon: "shieldCheck",
            title: "Safer, compliant, and standardized execution",
            description:
              "Every mission is executed with strong compliance, safety discipline, and quality control.",
            items: [
              "Regulatory & airspace compliance",
              "Standardized SOPs & checklists",
              "Data privacy & security protocols",
              "Insurance & risk management",
            ],
          },
          {
            icon: "cpu",
            title: "High accuracy data for precision agriculture",
            description:
              "Capture and deliver accurate, actionable insights that help improve productivity across the farm.",
            items: [
              "High-resolution imagery",
              "NDVI, multispectral & thermal data",
              "Field maps & prescription layers",
              "Actionable insights & reports",
            ],
          },
          {
            icon: "award",
            title: "Better outcomes, higher productivity",
            description:
              "Data-driven insights support input optimization, higher yields, and improved operational ROI.",
            items: [
              "Healthier crop monitoring",
              "Input optimization",
              "Yield prediction & planning",
              "Continuous performance improvement",
            ],
          },
        ],
      }}
    />
  );
}
