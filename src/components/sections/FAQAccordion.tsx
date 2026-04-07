"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/siteConfig";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeading
            label="FAQ"
            title="Common Questions"
            subtitle="Everything you need to know about getting started at Driftwater Academy."
          />
        </AnimateOnScroll>

        <div className="space-y-3">
          {siteConfig.faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <AnimateOnScroll key={i} delay={Math.min(i, 4)}>
                <div
                  className={`rounded-xl overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? "border border-sky-200 border-l-4 border-l-sky-500 bg-sky-50/50 shadow-md"
                      : "border border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left transition-colors"
                  >
                    <span className="flex items-center gap-3">
                      <span className={`text-sm font-bold tabular-nums transition-colors ${isOpen ? "text-sky-500" : "text-slate-300"}`}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-base font-semibold text-slate-900">
                        {faq.question}
                      </span>
                    </span>
                    <svg
                      className={`w-5 h-5 shrink-0 transition-all duration-300 ${
                        isOpen ? "rotate-180 text-sky-500" : "text-slate-400"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>
                  <div
                    className="grid transition-all duration-300"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 pl-[3.25rem] text-slate-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
