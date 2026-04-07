import Image from "next/image";
import { siteConfig, assetPath } from "@/lib/siteConfig";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const gradients = [
  "from-sky-400 to-cyan-400",
  "from-cyan-400 to-teal-400",
  "from-teal-400 to-emerald-400",
  "from-amber-400 to-orange-400",
  "from-sky-500 to-blue-500",
  "from-purple-400 to-sky-400",
];

export default function ProgramsSection() {
  return (
    <section id="programs" className="relative py-20 md:py-28 bg-slate-50 overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.03]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeading
            label="Our Programs"
            title="A Path for Every Swimmer"
            subtitle="From first-time water babies to competitive teens and adult learners, our progressive curriculum grows with your family."
          />
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.programs.map((program, i) => (
            <AnimateOnScroll key={i} delay={i % 3}>
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 card-hover group">
                {/* Gradient top bar */}
                <div className={`h-1.5 bg-gradient-to-r ${gradients[i]}`} />
                {/* Program image */}
                <div className="aspect-[16/10] relative overflow-hidden">
                  <Image
                    src={assetPath(program.image)}
                    alt={`${program.title} swim program`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/90 backdrop-blur-sm text-xs font-bold text-amber-600 uppercase tracking-wide px-3 py-1 rounded-full">
                      Ages {program.ages}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {program.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {program.description}
                  </p>
                  <div className="mt-4 flex items-center text-sky-600 text-sm font-medium opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    Learn more
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={2}>
          <div className="mt-12 text-center">
            <Button href="/contact" variant="secondary">
              Find the Right Program
            </Button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
