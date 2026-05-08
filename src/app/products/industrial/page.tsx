import ProductDetailPage from "@/components/ProductDetailPage";

export default function AvplEducationPage() {
  return (
    <ProductDetailPage
      eyebrow="Product"
      title="AVPL Education"
      description="EAGLE AI AEROSPACE (OPC) is working toward building a dedicated drone education and training center focused on developing practical skills and technical knowledge in drone technology and pilot training. Our vision is to help students understand drone systems, operations, safety practices, and emerging career opportunities in the growing UAV ecosystem."
      image="/assets/slider/Air_Freight_Slider.png"
      imageAlt="Drone education and training"
      slides={[
        "/assets/slider/Air_Freight_Slider.png",
        "/assets/slider/courier_services.jpg",
        "/assets/slider/domestics_logistics.jpg",
      ]}
      summary="This learning-focused page highlights practical skill development, technical understanding, and career-oriented exposure for students entering the UAV ecosystem."
      points={[
        { icon: "graduationCap", text: "Structured learning for drone careers and certifications" },
        { icon: "bookOpen", text: "Practical modules with simulation and field exposure" },
        { icon: "award", text: "Industry-aligned curriculum for employability outcomes" },
        { icon: "usersRound", text: "Training designed for schools, colleges, and youth programs" },
      ]}
    />
  );
}
