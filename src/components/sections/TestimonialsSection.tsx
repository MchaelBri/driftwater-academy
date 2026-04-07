"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/siteConfig";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const avatarColors = [
  "bg-sky-100 text-sky-600",
  "bg-cyan-100 text-cyan-600",
  "bg-amber-100 text-amber-600",
  "bg-teal-100 text-teal-600",
  "bg-blue-100 text-blue-600",
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const testimonials = siteConfig.testimonials;

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeading
            label="Testimonials"
            title="Trusted by Families Like Yours"
            subtitle="Hear from parents and swimmers who have experienced the Driftwater difference firsthand."
          />
        </AnimateOnScroll>

        {/* Desktop: Grid view */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <AnimateOnScroll key={i} delay={i % 3}>
              <TestimonialCard {...t} colorIndex={i} />
            </AnimateOnScroll>
          ))}
        </div>

        {/* Mobile: Carousel */}
        <div className="md:hidden">
          <AnimateOnScroll>
            <TestimonialCard {...testimonials[active]} colorIndex={active} />
          </AnimateOnScroll>
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === active ? "bg-sky-600 w-6" : "bg-slate-300"
                }`}
                aria-label={`View testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  name,
  location,
  text,
  colorIndex = 0,
}: {
  name: string;
  location: string;
  text: string;
  colorIndex?: number;
}) {
  return (
    <div className="relative bg-white rounded-2xl p-6 shadow-sm border border-slate-100 border-l-4 border-l-sky-400 card-hover group overflow-hidden">
      {/* Decorative quote mark */}
      <svg className="absolute top-3 right-4 w-10 h-10 text-sky-100 opacity-60" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" />
      </svg>

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="relative text-slate-700 leading-relaxed mb-6 text-sm italic">
        &ldquo;{text}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div className={`w-12 h-12 ${avatarColors[colorIndex % avatarColors.length]} rounded-full flex items-center justify-center font-bold text-sm`}>
          {name.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900">{name}</p>
          <p className="text-xs text-slate-500">{location}</p>
        </div>
      </div>
    </div>
  );
}
