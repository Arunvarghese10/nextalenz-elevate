import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FootprintBadges } from "@/components/site/FootprintBadges";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About NexTalenz — SAP & AI Governance Consultancy Since 2024" },
      {
        name: "description",
        content:
          "Founded 2024. Integrity, depth, patience, partnership — the values behind our SAP talent and AI governance practice.",
      },
      { property: "og:title", content: "About NexTalenz — SAP & AI Governance Consultancy" },
      {
        property: "og:description",
        content:
          "Founded on a simple idea: recruitment was broken. So was governance. Here's how we work.",
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
    copy: "SAP and AI governance are all we do. That depth shows up in every conversation.",
  },
  { title: "Patience", copy: "We'd rather take an extra week than place the wrong person." },
  { title: "Partnership", copy: "We invest in long-term client relationships, not transactions." },
];

const services = [
  "SAP Talent Acquisition",
  "SAP Project Consulting",
  "Contract & Permanent Placements",
  "GRC & AI Governance (Optro.ai partnership)",
];

function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden navy-gradient text-navy-foreground">
        <div className="absolute inset-0 surface-grid opacity-60" aria-hidden />
        <div className="pointer-events-none absolute -right-24 -top-32 size-[520px] gold-glow opacity-70" aria-hidden />
        <div className="pointer-events-none absolute -bottom-40 -left-24 size-[420px] gold-glow opacity-40" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/35 bg-navy-foreground/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gradient-gold">
            Founded 2024
          </span>
          <h1 className="rise mt-5 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Founded on a simple idea: recruitment was broken.{" "}
            <span className="text-gradient-gold">So was governance.</span>
          </h1>
          <div className="mt-6 max-w-2xl space-y-4 text-lg leading-relaxed text-navy-foreground/75">
            <p>
              The recruitment industry was broken. Resumes flying around. Promises made and
              forgotten.
            </p>
            <p>
              So we built a different kind of firm — one that backs its placements and, now, backs
              the governance behind the systems it helps you run.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <blockquote className="text-xl font-medium leading-relaxed sm:text-2xl">
          “We don&apos;t take on every client. We don&apos;t forward every resume. We listen first,
          search smart, and only present candidates we&apos;d vouch for personally.”
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
        <FootprintBadges
          headline="Our footprint"
          body="Brisbane (HQ) · India · UAE, for now — with Brunei/South East Asia next."
        />
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">What we do</h2>
          <ul className="mt-8 flex flex-wrap gap-2.5">
            {services.map((service) => (
              <li
                key={service}
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground"
              >
                {service}
              </li>
            ))}
          </ul>
          <Button asChild variant="hero" size="lg" className="mt-10">
            <Link to="/contact">
              Book a Strategy Session <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
