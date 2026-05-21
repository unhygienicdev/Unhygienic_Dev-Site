import { HeroSection } from "@/components/home/hero-section";
import { ClientLogos } from "@/components/home/client-logos";
import { FeaturesSection } from "@/components/home/features-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { PricingSection } from "@/components/home/pricing-section";
import { BlogPreview } from "@/components/home/blog-preview";
import { FAQSection } from "@/components/home/faq-section";
import { CTASection } from "@/components/home/cta-section";
import { ParticleBackground } from "@/components/shared/particle-background";

export default function HomePage() {
  return (
    <>
      <ParticleBackground particleCount={30} />
      <HeroSection />
      <ClientLogos />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection />
      <BlogPreview />
      <FAQSection />
      <CTASection />
    </>
  );
}
