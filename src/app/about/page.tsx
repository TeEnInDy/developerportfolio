import { CVSection } from "@/components/about/CVSection";
import { ServiceQuotation } from "@/components/about/ServiceQuotation";

export default function AboutPage() {
  return (
    <div style={{ background: "#0A0A0A", minHeight: "100vh" }}>
      <div style={{ paddingTop: "160px" }} />
      <CVSection />
      <ServiceQuotation />
    </div>
  );
}
