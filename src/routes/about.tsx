import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Globe2, MapPin, Rocket, ShieldCheck, Target } from "lucide-react";

import { Button } from "@/components/ui/button";
import { StatCounter } from "@/components/site/StatCounter";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About NexTalenz | Global Delivery Model" },
      {
        name: "description",
        content:
          "Based in Southport, Queensland, Australia, NexTalenz delivers agile SAP and GRC/AI governance consulting to clients across APAC, India and the Middle East.",
      },
      { property: "og:title", content: "About NexTalenz | Global Delivery Model" },
      {
        property: "og:description",
        content:
          "Connecting world-class capability with enterprise vision — precision-first talent and governance consulting.",
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: Target,
    title: "Precision First",
    copy: "Quality-vetted talent and rigorous compliance frameworks.",
  },
  {
    icon: Rocket,
    title: "Agile Execution",
    copy: "Transparent SLAs without enterprise bureaucracy.",
  },
  {
    icon: ShieldCheck,
    title: "Future-Proof Solutions",
    copy: "Bridging legacy ERP strength with AI-era governance.",
  },
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
            About NexTalenz
          </span>
          <h1 className="rise mt-5 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Connecting World-Class Capability with Enterprise Vision
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-foreground/75">
            NexTalenz delivers agile, high-impact consulting and staffing solutions across SAP
            practices and GRC/AI Governance domains. Based in Southport, Queensland, Australia, we serve clients
            globally with deep domain knowledge and execution speed.
          </p>
        </div>
      </section>

      <section className="bg-navy text-navy-foreground">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
          <StatCounter value={100} suffix="+" label="Enterprise Engagements Completed" />
          <StatCounter value={95} suffix="%" label="Client Retention Rate" />
          <StatCounter value={14} suffix=" Days" label="Average Shortlist SLA" />
          <StatCounter value={100} suffix="%" label="Quality Assurance Guarantee" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Regional Delivery Model</h2>
            <p className="mt-4 text-muted-foreground">
              A single accountable hub with distributed sourcing reach — enterprise coverage without
              enterprise latency.
            </p>
            <p className="mt-4 text-sm font-medium text-sap">{SITE.footprint}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-6">
              <MapPin className="size-5 text-sap" />
              <h3 className="mt-4 font-semibold">Primary Operational Hub</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                5 Davenport Street, Southport QLD 4215, Australia
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <Globe2 className="size-5 text-grc" />
              <h3 className="mt-4 font-semibold">Active Delivery Networks</h3>
              <p className="mt-2 text-sm text-muted-foreground">APAC, India &amp; Middle East</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">Culture &amp; Values</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {values.map((value) => (
              <article key={value.title} className="rounded-xl border border-border bg-background p-7">
                <div className="grid size-11 place-items-center rounded-lg bg-sap-soft text-sap">
                  <value.icon className="size-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{value.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 card-premium p-8 lg:flex-row lg:items-center">
          <div>
            <h2 className="text-2xl font-bold">Work with NexTalenz</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Hiring for an enterprise program, or looking to join our consultant network?
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="hero" size="lg">
              <Link to="/contact">
                Contact Us <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/careers">Join Talent Network</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
