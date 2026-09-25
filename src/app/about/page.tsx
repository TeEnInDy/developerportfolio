import { IBM_Plex_Sans_Thai } from "next/font/google";
import { CVSection } from "@/components/about/CVSection";
import { ServiceQuotation } from "@/components/about/ServiceQuotation";

const plexThai = IBM_Plex_Sans_Thai({
  variable: "--font-thai",
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700"],
});

export default function AboutPage() {
  return (
    <div className={plexThai.variable} style={{ background: "#0A0A0A", minHeight: "100vh" }}>
      <div style={{ paddingTop: "160px" }} />
      <CVSection />
      <ServiceQuotation />
    </div>
  );
}
