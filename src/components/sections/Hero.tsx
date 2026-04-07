import Image from "next/image";
import { siteConfig, assetPath } from "@/lib/siteConfig";
import Button from "@/components/ui/Button";

export default function Hero() {
  const { hero } = siteConfig;

  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden">
      {/* Full-bleed background image */}
      <Image
        src={assetPath("/images/hero-banner.jpg")}
        alt="Swimming pool at Driftwater Academy"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-transparent" />
      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none" className="w-full" style={{ height: "60px" }}>
          <path d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z" fill="white" fillOpacity="0.5" />
          <path d="M0 55C240 80 480 30 720 55C960 80 1200 30 1440 55V80H0V55Z" fill="white" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
        <div className="max-w-2xl">
          <span
            className="inline-block bg-amber-500 text-white text-sm font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wide"
            style={{ animation: "fadeInUp 0.6s ease-out both" }}
          >
            Enrollment Now Open for Summer 2026
          </span>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            style={{ animation: "fadeInUp 0.6s ease-out 0.15s both" }}
          >
            {hero.headline}
          </h1>
          <p
            className="text-lg md:text-xl text-slate-200 leading-relaxed mb-8 max-w-xl"
            style={{ animation: "fadeInUp 0.6s ease-out 0.3s both" }}
          >
            {hero.subheadline}
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4"
            style={{ animation: "fadeInUp 0.6s ease-out 0.45s both" }}
          >
            <Button href={hero.primaryCTA.href} variant="secondary" size="lg">
              {hero.primaryCTA.label}
            </Button>
            <Button
              href={hero.secondaryCTA.href}
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-sky-700"
            >
              {hero.secondaryCTA.label}
            </Button>
          </div>

          {/* Trust stats row */}
          <div
            className="flex flex-wrap gap-8 mt-10 pt-8 border-t border-white/20"
            style={{ animation: "fadeInUp 0.6s ease-out 0.6s both" }}
          >
            {siteConfig.stats.map((stat, i) => (
              <div key={i}>
                <p className="text-2xl md:text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-xs text-slate-300 uppercase tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
