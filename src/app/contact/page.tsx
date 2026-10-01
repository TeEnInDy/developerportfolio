import { ContactCta } from "@/components/home/ContactCta";

export default function ContactPage() {
  return (
    <section style={{ paddingTop: "clamp(120px, 20vw, 160px)", background: "#0A0A0A", minHeight: "100vh" }}>
      <ContactCta />
    </section>
  );
}
