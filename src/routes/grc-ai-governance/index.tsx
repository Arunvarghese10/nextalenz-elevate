import { createFileRoute, Link } from "@tanstack/react-router";
import { Activity, ArrowRight, Bot, Handshake, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/grc-ai-governance/")({
  head: () => ({
    meta: [
      { title: "AI Governance, Risk & Compliance (GRC) | NexTalenz + Optro.ai" },
      {
        name: "description",
        content:
          "Continuous AI governance, controls monitoring, and risk assessment — powered by our Optro.ai Alliance Partnership.",
      },
      {
        property: "og:title",
        content: "AI Governance, Risk & Compliance (GRC) | NexTalenz + Optro.ai",
      },
      {
        property: "og:description",
        content:
          "Continuous auditing, cyber risk, controls testing and AI governance for Australia, India and the Middle East.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GrcPage,
});

const services = [
  {
    icon: Bot,
    title: "AI Risk Assessment",
    to: "/grc-ai-governance/ai-risk-assessment" as const,
  },
  {
    icon: Activity,
    title: "Continuous Controls Monitoring",
    to: "/grc-ai-governance/continuous-controls-monitoring" as const,
  },
  {
    icon: Handshake,
    title: "Optro.ai Partnership",
    to: "/grc-ai-governance/optro-ai-partnership" as const,
  },
];

function GrcPage() {
  return (
    <>
      <section className="relative overflow-hidden navy-gradient text-navy-foreground">
        <div className="absolute inset-0 surface-grid opacity-60" aria-hidden />
        <div className="pointer-events-none absolute -right-24 -top-32 size-[520px] gold-glow opacity-70" aria-hidden />
        <div className="pointer-events-none absolute -bottom-40 -left-24 size-[420px] gold-glow opacity-40" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/35 bg-navy-foreground/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gradient-gold">
            <ShieldCheck className="size-3.5" />
            Optro.ai Alliance Partner
          </span>
          <h1 className="rise mt-6 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            AI Governance, Risk &amp; Compliance{" "}
            <span className="text-gradient-gold">that never goes stale.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-navy-foreground/75">
            Powered by our Optro.ai Alliance Partnership — continuous auditing, cyber risk, controls
            testing, and AI governance, built to satisfy regulators in Australia, India, and the
            Middle East.
          </p>
          <div className="mt-9">
            <Button asChild variant="grc" size="xl">
              <Link to="/contact" search={{ pillar: "grc" }}>
                Request a GRC Readiness Assessment <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold sm:text-4xl">Services</h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.title}
              to={service.to}
              className="relative overflow-hidden card-premium hover:card-premium-hover p-7"
            >
              <span className="absolute inset-x-0 top-0 h-1 bg-gradient-gold" aria-hidden />
              <div className="grid size-11 place-items-center rounded-lg bg-grc-soft text-grc">
                <service.icon className="size-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{service.title}</h3>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-grc">
                Learn more <ArrowRight className="size-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <blockquote className="border-l-2 border-primary pl-6 text-xl font-medium leading-relaxed">
            Financial institutions, healthcare providers, and public sector bodies across APAC and
            the Middle East face intensifying AI governance requirements. Get ahead of the audit.
          </blockquote>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-primary/35 bg-grc-soft p-7 text-sm leading-relaxed text-muted-foreground">
          Already running SAP or a modern ERP? Layer AI governance on top without a second vendor
          relationship.{" "}
          <Link to="/enterprise-applications" className="font-semibold text-grc">
            See Enterprise Applications
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="card-premium p-10 text-center">
          <p className="text-sm uppercase tracking-[0.16em] text-muted-foreground">
            New capability — case studies coming soon.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl navy-gradient px-8 py-14 text-center text-navy-foreground sm:px-14">
          <div className="absolute inset-0 surface-grid opacity-50" aria-hidden />
          <div className="relative">
            <h2 className="text-3xl font-bold sm:text-4xl">Ready to make compliance continuous?</h2>
            <div className="mt-8">
              <Button asChild variant="grc" size="xl">
                <Link to="/contact" search={{ pillar: "grc" }}>
                  Request a GRC Readiness Assessment <ArrowRight />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
