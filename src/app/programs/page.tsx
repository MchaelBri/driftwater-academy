import type { Metadata } from "next";
import Image from "next/image";
import { siteConfig, assetPath } from "@/lib/siteConfig";
import Button from "@/components/ui/Button";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Programs",
  description: "Explore swim programs for all ages at Driftwater Academy — from baby classes to adult lessons.",
};

export default function ProgramsPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative min-h-[350px] flex items-center overflow-hidden bg-sky-900">
        <Image
          src={assetPath("/images/program-stroke-builders.jpg")}
          alt="Swim programs at Driftwater Academy"
          fill
          className="object-cover opacity-40"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sky-900/70 to-sky-800/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center w-full">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-amber-400 mb-3">Our Programs</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Find Your Perfect Swim Program</h1>
          <p className="text-lg text-sky-100 max-w-2xl mx-auto">
            From first-time water babies to competitive teens and adult learners, we have a program tailored to every age and skill level.
          </p>
        </div>
      </section>

      {/* Programs Detail Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {siteConfig.programs.map((program, i) => (
              <AnimateOnScroll key={i}>
                <div className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-12 items-center`}>
                  {/* Image */}
                  <div className="w-full lg:w-1/2">
                    <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-lg">
                      <Image
                        src={assetPath(program.image)}
                        alt={`${program.title} program`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                  {/* Content */}
                  <div className="w-full lg:w-1/2">
                    <span className="inline-block bg-sky-50 text-sky-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-3">
                      Ages {program.ages}
                    </span>
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">{program.title}</h2>
                    <p className="text-slate-600 leading-relaxed mb-6">{program.description}</p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center gap-2 text-sm text-slate-600">
                        <svg className="w-5 h-5 text-sky-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        Small class sizes (4:1 ratio)
                      </li>
                      <li className="flex items-center gap-2 text-sm text-slate-600">
                        <svg className="w-5 h-5 text-sky-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        Certified, experienced instructors
                      </li>
                      <li className="flex items-center gap-2 text-sm text-slate-600">
                        <svg className="w-5 h-5 text-sky-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        Warm 90°F pool environment
                      </li>
                      <li className="flex items-center gap-2 text-sm text-slate-600">
                        <svg className="w-5 h-5 text-sky-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        Flexible makeup class policy
                      </li>
                    </ul>
                    <Button href="/contact">Enroll in {program.title}</Button>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Not Sure Which Program Is Right?"
        subtext="Contact us for a free assessment and we will help find the perfect fit for your family."
        showStats={false}
      />
    </>
  );
}
