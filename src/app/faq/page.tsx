import type { Metadata } from "next";
import FAQAccordion from "@/components/sections/FAQAccordion";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about Driftwater Academy swim lessons, programs, and enrollment.",
};

export default function FAQPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-sky-50 via-white to-cyan-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-sky-600 bg-sky-50 px-4 py-1.5 rounded-full mb-4">
            FAQ
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Find answers to the most common questions about our programs, facility, and enrollment process.
          </p>
        </div>
      </section>

      <FAQAccordion />

      <CTABanner
        headline="Still Have Questions?"
        subtext="Our team is happy to help. Reach out and we will get back to you within 24 hours."
        showStats={false}
      />
    </>
  );
}
