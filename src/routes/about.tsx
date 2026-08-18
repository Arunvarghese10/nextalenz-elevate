import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FootprintBadges } from "@/components/site/FootprintBadges";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About NexTalenz — Enterprise Technology, Talent & Governance Since 2024" },
      {
        name: "description",
        content:
          "Founded 2024 in Brisbane, Australia. NexTalenz bridges enterprise software, human-capital technology, and product engineering with the talent to run it.",
      },
      { property: "og:title", content: "About NexTalenz" },
      {
        property: "og:description",
        content:
          "Founded in Brisbane, Australia, operating at the intersection of enterprise software, HCT, and product engineering.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const values = [
  { title: "Integrity", copy: "We say what we mean. If we can't deliver, we tell you on day one." },
  {
    title: "Depth",
    copy: "Enterprise ERP, GRC, talent, and engineering are all we do. That depth shows up in every conversation.",
  },
  {
    title: "Patience",
    copy: "We'd rather take an extra week than place the wrong person, or ship the wrong control.",
  },
  { title: "Partnership", copy: "We invest in long-term client relationships, not transactions." },
];

const practices = [
  "Human Capital Technology (HCT) & Modern ERP",
  "GRC & AI Governance (Optro.ai alliance)",
  "Talent Solutions & Enterprise RPO",
  "Product Engineering",
];

function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden navy-gradient text-navy-foreground">
        <div className="absolute inset-0 surface-grid opacity-60" aria-hidden />
        <div
          className="pointer-events-none absolute -right-24 -top-32 size-[520px] gold-glow opacity-70"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-40 -left-24 size-[420px] gold-glow opacity-40"
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/35 bg-navy-foreground/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gradient-gold">
            Founded 2024 · Brisbane, Australia
          </span>
          <h1 className="rise mt-5 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Who we are.
          </h1>
          <div className="mt-6 max-w-2xl space-y-4 text-lg leading-relaxed text-navy-foreground/75">
            <p>
              Founded in 2024 in Brisbane, Australia, NexTalenz Consulting operates at the
              intersection of enterprise software, human-capital technology, and product
              engineering.
            </p>
            <p>
              We bridge the gap between complex enterprise platforms and the expert talent required
              to deploy, optimize, and secure them.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <blockquote className="text-xl font-medium leading-relaxed sm:text-2xl">
          “Specialist by design. Generalist by reach. We listen first, scope smart, and only take on
          the work we know we can deliver.”
        </blockquote>
        <p className="mt-5 text-sm text-muted-foreground">
          Our clients call us partners — not vendors.
        </p>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">Core values</h2>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2">
            {values.map((value, index) => (
              <li key={value.title} className="card-premium p-7">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gradient-gold">
                  0{index + 1}
                </span>
                <h3 className="mt-3 text-lg font-semibold">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold sm:text-4xl">Global reach</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Headquartered in Brisbane with regional delivery partners across APAC/ANZ, EMEA, and the
          Americas.
        </p>
        <div className="mt-10">
          <FootprintBadges body="Australia · New Zealand · Singapore · India · Philippines · United Kingdom · Ireland · Germany · Netherlands · UAE · United States · Canada · Mexico" />
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">What we do</h2>
          <ul className="mt-8 flex flex-wrap gap-2.5">
            {practices.map((practice) => (
              <li
                key={practice}
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground"
              >
                {practice}
              </li>
            ))}
          </ul>
          <Button asChild variant="hero" size="lg" className="mt-10">
            <Link to="/contact" search={{ pillar: undefined }}>
              Book a Strategy Session <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
