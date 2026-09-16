import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { SkillsSection } from "@/components/home/SkillsSection";
import { ContactCta } from "@/components/home/ContactCta";

export default function Home() {
  return (
    <div style={{ background: "#0A0A0A", minHeight: "100vh" }}>
      <HeroSection />
      <FeaturedWork />
      <SkillsSection />
      <ContactCta />
    </div>
  );
}
