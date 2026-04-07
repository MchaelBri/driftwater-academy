import type { Metadata } from "next";
import ContactForm from "@/components/sections/ContactForm";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Driftwater Academy. Enroll in swim lessons, ask questions, or schedule a free trial class.",
};

export default function ContactPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-sky-50 via-white to-cyan-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-sm font-semibold tracking-wider uppercase text-sky-600 mb-2">
            Contact
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Let&apos;s Get Started
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Whether you have questions about our programs or are ready to enroll, we are here to help your family take the first splash.
          </p>
        </div>
      </section>

      <ContactForm />

      <CTABanner
        headline="Prefer to Talk?"
        subtext="Call us directly and our friendly team will help you find the perfect program for your family."
        showStats={false}
      />
    </>
  );
}
