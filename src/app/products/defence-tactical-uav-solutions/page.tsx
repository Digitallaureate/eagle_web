import ProductDetailPage from "@/components/ProductDetailPage";

export default function AvplDronesPage() {
  return (
    <ProductDetailPage
      eyebrow="Product"
      title="Defence/ Tactical UAV Solutions"
      description="EAGLE AI AEROSPACE (OPC) is working toward the development of next-generation tactical UAV systems for defense and security applications. Our vision includes aerial platforms for border monitoring, reconnaissance, tactical surveillance, and mission-support operations, with a focus on innovation, reliability, and operational adaptability."
      image="/assets/slider/special_service.jpg"
      imageAlt="Defence and tactical UAV systems"
      slides={[
        "/assets/slider/special_service.jpg",
        "/assets/slider/Air_Freight_Slider.png",
        "/assets/slider/global_freight.jpg",
      ]}
      summary="This product direction is centered on mission-ready reliability, adaptable aerial support, and indigenous development for demanding tactical environments."
      points={[
        { icon: "cpu", text: "Indigenous drone platforms built for real-world missions" },
        { icon: "wrench", text: "Reliable design with maintainable hardware systems" },
        { icon: "mapPinned", text: "Use cases across mapping, surveillance, and delivery" },
        { icon: "badgeCheck", text: "Operational quality built for scale and trust" },
      ]}
    />
  );
}
