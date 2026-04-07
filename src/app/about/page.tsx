import type { Metadata } from "next";
import Image from "next/image";
import { siteConfig, assetPath } from "@/lib/siteConfig";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Driftwater Academy — our mission, our team, and why families trust us for swim education.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative min-h-[350px] flex items-center overflow-hidden bg-sky-900">
        <Image
          src={assetPath("/images/program-water-explorers.jpg")}
          alt="About Driftwater Academy"
          fill
          className="object-cover opacity-40"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sky-900/70 to-sky-800/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center w-full">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-amber-400 mb-3">About Us</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Story</h1>
          <p className="text-lg text-sky-100 max-w-2xl mx-auto">
            For over 20 years, Driftwater Academy has been building water confidence and saving lives through expert swim education.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <AnimateOnScroll className="w-full lg:w-1/2">
              <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={assetPath("/images/program-little-splashers.jpg")}
                  alt="Our mission at Driftwater Academy"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll className="w-full lg:w-1/2" delay={1}>
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-sky-600 bg-sky-50 px-4 py-1.5 rounded-full mb-4">Our Mission</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Every Child Deserves Water Confidence
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Driftwater Academy was founded with a simple but powerful belief: every person deserves to feel safe and confident in the water. What started as a single pool and a passionate instructor has grown into a community institution trusted by thousands of families.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Our progressive curriculum is designed by aquatic education specialists and refined through two decades of real-world teaching. We do not just teach strokes — we build confidence, resilience, and a lifelong love of swimming.
              </p>
              <p className="text-slate-600 leading-relaxed">
                From our warm 90-degree pool to our certified instructors, every detail of the Driftwater experience is designed to make families feel welcome, safe, and supported.
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <SectionHeading
              label="Our Values"
              title="What Drives Us Every Day"
              subtitle="These core principles guide every lesson, every interaction, and every decision at Driftwater Academy."
            />
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Safety Above All", desc: "We maintain the highest safety standards with certified lifeguards, strict protocols, and continuously monitored water quality.", icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" },
              { title: "Expert Instruction", desc: "Every instructor completes our rigorous 40-hour training program on top of their national certifications. We never stop learning.", icon: "M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" },
              { title: "Inclusive Community", desc: "We welcome swimmers of every age, ability, and background. Our programs adapt to meet every learner where they are.", icon: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" },
              { title: "Proven Results", desc: "Our structured curriculum delivers measurable progress. Parents see real skill development every week, not just play time.", icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" },
              { title: "Family First", desc: "We know family schedules are busy. That is why we offer flexible scheduling, makeup classes, and easy online management.", icon: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" },
              { title: "Lifelong Impact", desc: "Swimming is not just a sport — it is a life-saving skill. We are building confident, water-safe individuals who carry these skills forever.", icon: "M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" },
            ].map((value, i) => (
              <AnimateOnScroll key={i} delay={i % 3}>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 card-hover">
                  <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={value.icon} />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{value.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{value.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Stats CTA */}
      <CTABanner
        headline="Join the Driftwater Family"
        subtext="Thousands of families trust us with what matters most. Start your family's swim journey today."
      />
    </>
  );
}
