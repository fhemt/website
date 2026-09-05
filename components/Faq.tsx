"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ_ITEMS = [
  {
    question: "Fhemt, c'est pour quel niveau ?",
    answer:
      "Pour l'instant le collège marocain : 1ère, 2ème et 3ème année. Le lycée arrivera dans une prochaine mise à jour.",
  },
  {
    question: "C'est vraiment gratuit ?",
    answer:
      "Oui. Tous les cours, les leçons et les quiz de fin de leçon sont gratuits. Premium débloque la collection complète d'exercices, les corrections détaillées et les examens blancs.",
  },
  {
    question: "Je peux tout suivre en darija ?",
    answer:
      "Chaque leçon existe en français et en darija, et tu bascules de l'une à l'autre en un geste. L'idée n'est pas de remplacer le français, mais de t'aider à vraiment comprendre avant l'examen qui, lui, reste en français.",
  },
  {
    question: "Qui écrit les cours ?",
    answer:
      "Une équipe qui construit le contenu en s'appuyant sur le programme officiel marocain, avec des enseignants qui relisent et valident chaque leçon avant sa mise en ligne.",
  },
  {
    question: "C'est prévu pour quand ?",
    answer:
      "On finalise le contenu des premiers cours avant d'ouvrir l'app. La liste d'attente est le seul moyen d'être prévenu dès que ce sera prêt, sur iOS et Android.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="border-t border-border-light bg-surface-warm py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="font-display text-4xl text-foreground sm:text-[42px]">Questions fréquentes</h2>

        <div className="mt-10 divide-y divide-border-light border-t border-border-light">
          {FAQ_ITEMS.map((item, index) => {
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
                  <p className="pb-5 pr-10 text-[15px] leading-relaxed text-foreground-secondary">
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
