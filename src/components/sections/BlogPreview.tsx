import Image from "next/image";
import { siteConfig, assetPath } from "@/lib/siteConfig";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const blogImages = [
  { src: assetPath("/images/blog-water-safety.png"), alt: "Child learning water safety in a swimming pool" },
  { src: assetPath("/images/blog-progress.png"), alt: "Young swimmer showing progress in swim lessons" },
  { src: assetPath("/images/blog-water-fear.png"), alt: "Parent and child building water confidence together" },
  { src: assetPath("/images/blog-health.png"), alt: "Swimming laps for health and fitness benefits" },
];

export default function BlogPreview() {
  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeading
            label="Resources"
            title="Tips & Insights for Swim Parents"
            subtitle="Expert advice to help your family navigate the world of water safety and swim education."
          />
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.blogPosts.map((post, i) => {
            const img = blogImages[i % blogImages.length];
            return (
              <AnimateOnScroll key={i} delay={i}>
                <a
                  href={post.slug}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 card-hover block"
                >
                  {/* Real image with zoom on hover */}
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-5">
                    <span className="inline-block bg-sky-50 text-sky-600 px-2.5 py-0.5 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 mt-2 mb-2 group-hover:text-sky-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-slate-600 line-clamp-2 mb-3">
                      {post.excerpt}
                    </p>
                    {/* Read more with arrow */}
                    <span className="inline-flex items-center text-sky-600 text-sm font-medium opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                      Read more
                      <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </span>
                  </div>
                </a>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
