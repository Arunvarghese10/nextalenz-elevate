import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Simon Amour",
    role: "CEO, Proguid",
    quote: "The right talent, at the right time, without compromise.",
  },
  {
    name: "William Ray",
    role: "Executive",
    quote:
      "Working with Nextalenz gave us peace of mind. They listened closely, understood our challenges, and delivered talent that fit like missing puzzle pieces.",
  },
  {
    name: "Albert Hyekin",
    role: "Founder",
    quote:
      "Nextalenz stood out because of their honesty and commitment. They promised us the right people within a tight timeline, and they delivered exactly that.",
  },
  {
    name: "Steven Dirkse",
    role: "Founder & CEO",
    quote: "For us, Nextalenz wasn't just a service provider — it felt like gaining a partner.",
  },
  {
    name: "Robin Holds",
    role: "Sr. Executive",
    quote: "What impressed me most was the care behind every interaction.",
  },
];

export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % TESTIMONIALS.length), 7000);
    return () => clearInterval(id);
  }, []);

  const active = TESTIMONIALS[index] ?? TESTIMONIALS[0]!;

  return (
    <div className="card-premium relative overflow-hidden p-8 sm:p-12">
      <span className="absolute inset-x-0 top-0 h-1 bg-gradient-gold" aria-hidden />
      <Quote className="size-7 text-sap" />
      <blockquote className="mt-6 text-xl font-medium leading-relaxed sm:text-2xl">
        “{active.quote}”
      </blockquote>
      <p className="mt-6 text-sm font-semibold">{active.name}</p>
      <p className="text-sm text-muted-foreground">{active.role}</p>

      <div className="mt-8 flex items-center justify-between">
        <div className="flex gap-2">
          {TESTIMONIALS.map((item, i) => (
            <button
              key={item.name}
              type="button"
              aria-label={`Show testimonial from ${item.name}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-7 bg-gradient-gold" : "w-3 bg-border"
              }`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
            className="grid size-9 place-items-center rounded-full border border-border transition-colors hover:border-primary hover:text-sap"
          >
            <ChevronLeft className="size-4" />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => setIndex((i) => (i + 1) % TESTIMONIALS.length)}
            className="grid size-9 place-items-center rounded-full border border-border transition-colors hover:border-primary hover:text-sap"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
