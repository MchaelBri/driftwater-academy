import { siteConfig } from "@/lib/siteConfig";
import Button from "@/components/ui/Button";

type CTABannerProps = {
  headline?: string;
  subtext?: string;
  showStats?: boolean;
};

export default function CTABanner({
  headline = "Ready to Dive In?",
  subtext = "Join thousands of families who trust Driftwater Academy for expert swim education. Your child's water confidence journey starts with a single splash.",
  showStats = true,
}: CTABannerProps) {
  return (
    <section className="relative py-20 md:py-24 bg-gradient-to-r from-sky-800 via-sky-600 to-cyan-500 overflow-hidden">
      {/* Animated wave background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="absolute top-0 left-0 w-full" viewBox="0 0 1440 200" fill="none" preserveAspectRatio="none">
          <path d="M0 100C360 0 720 200 1080 100C1260 50 1380 75 1440 100V0H0V100Z" fill="white" />
        </svg>
        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 200" fill="none" preserveAspectRatio="none">
          <path d="M0 100C360 200 720 0 1080 100C1260 150 1380 125 1440 100V200H0V100Z" fill="white" />
        </svg>
      </div>

      {/* Floating bubble decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[15%] left-[10%] w-4 h-4 bg-white/10 rounded-full animate-float" />
        <div className="absolute top-[40%] left-[25%] w-6 h-6 bg-white/[0.07] rounded-full animate-float-slow" />
        <div className="absolute top-[20%] right-[15%] w-5 h-5 bg-white/10 rounded-full animate-float-delayed" />
        <div className="absolute bottom-[25%] right-[30%] w-3 h-3 bg-white/[0.08] rounded-full animate-float" style={{ animationDelay: "0.5s" }} />
        <div className="absolute bottom-[30%] left-[45%] w-8 h-8 bg-white/[0.06] rounded-full animate-float-slow" />
        <div className="absolute top-[60%] left-[70%] w-4 h-4 bg-white/10 rounded-full animate-float" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-[10%] left-[55%] w-3 h-3 bg-white/[0.08] rounded-full animate-float-delayed" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {showStats && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {siteConfig.stats.map((stat, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <p className="text-3xl md:text-4xl font-bold text-white">
                  {stat.value}
                </p>
                <p className="text-sm text-sky-100 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        )}

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {headline}
        </h2>
        <p className="text-lg text-sky-100 mb-8 max-w-2xl mx-auto leading-relaxed">
          {subtext}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/contact" variant="secondary" size="lg">
            Start Your Free Trial
          </Button>
          <Button
            href="/#programs"
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-sky-700"
          >
            View Programs
          </Button>
        </div>
      </div>
    </section>
  );
}
