"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Dictionary } from "@/lib/dictionary";

export function Faq({ dict }: { dict: Dictionary }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="border-t border-border-light bg-surface-warm py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="font-display text-4xl font-bold text-foreground sm:text-[42px]">
          {dict.faq.heading}
        </h2>

        <div className="mt-10 divide-y divide-border-light border-t border-border-light">
          {dict.faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-[17px] font-medium text-foreground">{item.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-foreground-tertiary transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    strokeWidth={1.75}
                  />
                </button>
                {isOpen && (
                  <p className="pb-5 pe-10 text-[15px] leading-relaxed text-foreground-secondary">
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
