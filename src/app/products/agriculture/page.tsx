import ProductDetailPage from "@/components/ProductDetailPage";

export default function AvplDroneAsAServicePage() {
  return (
    <ProductDetailPage
      eyebrow="Product"
      title="Agriculture"
      description="EAGLE AI AEROSPACE (OPC) is focused on developing drone solutions for modern agriculture, including crop spraying, aerial monitoring, and field mapping applications. Our vision is to make advanced agri-technology more accessible, helping farmers improve productivity, optimize resources, and adopt efficient farming practices across Bharat."
      image="/assets/slider/global_freight.jpg"
      imageAlt="Agriculture drone solutions"
      slides={[
        "/assets/slider/global_freight.jpg",
        "/assets/slider/domestics_logistics.jpg",
        "/assets/slider/value_added_services.jpg",
      ]}
      summary="Our agriculture-focused direction emphasizes accessible field services, smarter decision-making, and reliable operational support for modern farm workflows."
      points={[
        { icon: "plane", text: "On-demand access to commercial drone operations" },
        { icon: "users", text: "Certified pilots and support teams for field delivery" },
        { icon: "settings2", text: "Lower capex with flexible service deployment" },
        { icon: "shieldCheck", text: "Safer, compliant, and standardized execution" },
      ]}
    />
  );
}
