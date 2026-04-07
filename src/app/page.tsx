import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import ProgramsSection from "@/components/sections/ProgramsSection";
import BenefitsGrid from "@/components/sections/BenefitsGrid";
import CTABanner from "@/components/sections/CTABanner";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQAccordion from "@/components/sections/FAQAccordion";
import BlogPreview from "@/components/sections/BlogPreview";
import WaveDivider from "@/components/ui/WaveDivider";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <WaveDivider fill="#f8fafc" variant="gentle" />
      <ProgramsSection />
      <WaveDivider fill="#ffffff" variant="choppy" flip />
      <BenefitsGrid />
      <CTABanner />
      <WaveDivider fill="#f8fafc" variant="layered" flip />
      <TestimonialsSection />
      <WaveDivider fill="#ffffff" variant="gentle" />
      <FAQAccordion />
      <WaveDivider fill="#f8fafc" variant="choppy" />
      <BlogPreview />
      <CTABanner
        headline="Your Child's Water Journey Starts Here"
        subtext="Schedule a free introductory lesson and see why thousands of families trust Driftwater Academy."
        showStats={false}
      />
    </>
  );
}
