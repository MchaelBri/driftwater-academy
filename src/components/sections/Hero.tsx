import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";
import Button from "@/components/ui/Button";

export default function Hero() {
  const { hero } = siteConfig;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-cyan-50">
      {/* Animated decorative background blurs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-sky-200 rounded-full animate-pulse-glow blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-cyan-200 rounded-full animate-pulse-glow blur-3xl" style={{ animationDelay: "3s" }} />
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-amber-100 rounded-full animate-pulse-glow blur-3xl" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content with staggered entrance */}
          <div className="text-center lg:text-left">
            <span
              className="inline-block bg-sky-100 text-sky-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6"
              style={{ animation: "fadeInUp 0.6s ease-out both" }}
            >
              Enrollment Now Open for Summer 2026
            </span>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6"
              style={{ animation: "fadeInUp 0.6s ease-out 0.15s both" }}
            >
              Give Your Child the Gift of{" "}
              <span className="text-gradient">Water Confidence</span>
            </h1>
            <p
              className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
              style={{ animation: "fadeInUp 0.6s ease-out 0.3s both" }}
            >
              {hero.subheadline}
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              style={{ animation: "fadeInUp 0.6s ease-out 0.45s both" }}
            >
              <Button href={hero.primaryCTA.href} size="lg">
                {hero.primaryCTA.label}
              </Button>
              <Button href={hero.secondaryCTA.href} variant="outline" size="lg">
                {hero.secondaryCTA.label}
              </Button>
            </div>
          </div>

          {/* Custom SVG Swimming Illustration */}
          <div
            className="relative hidden lg:block"
            style={{ animation: "fadeInRight 0.8s ease-out 0.3s both" }}
          >
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero-banner.png"
                alt="Indoor swimming pool with crystal clear turquoise water at Driftwater Academy"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Floating rating badge */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3 animate-float-slow">
              <div className="relative">
                <div className="absolute inset-0 bg-amber-400 rounded-full animate-ripple" />
                <div className="relative w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">4.9 / 5.0</p>
                <p className="text-xs text-slate-500">Parent Rating</p>
              </div>
            </div>

            {/* Floating families badge */}
            <div className="absolute -top-2 -right-4 bg-white rounded-xl shadow-lg p-3 flex items-center gap-2 animate-float-delayed">
              <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">5,000+</p>
                <p className="text-[10px] text-slate-500">Families Served</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave transition */}
      <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none" style={{ height: "60px" }}>
        <path d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z" fill="white" fillOpacity="0.5" />
        <path d="M0 55C240 80 480 30 720 55C960 80 1200 30 1440 55V80H0V55Z" fill="white" />
      </svg>
    </section>
  );
}
