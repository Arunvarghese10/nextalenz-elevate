import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Users, Workflow, Layers, Gauge } from "lucide-react";

import { Button } from "@/components/ui/button";
import { StatCounter } from "@/components/site/StatCounter";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NexTalenz | SAP Talent & AI Governance Consulting" },
      {
        name: "description",
        content:
          "NexTalenz bridges elite SAP expertise with automated GRC and AI governance to build resilient, future-ready enterprises. 14-day shortlist SLA.",
      },
      { property: "og:title", content: "NexTalenz | SAP Talent & AI Governance Consulting" },
      {
        property: "og:description",
        content:
          "Dual-pillar enterprise consulting: SAP & enterprise application talent, plus continuous compliance and AI governance.",
      },
    ],
  }),
  component: Home,
});

const sapBadges = [
  "S/4HANA",
  "SuccessFactors",
  "FICO",
  "MM/SD/PP",
  "ABAP/Fiori",
  "BTP",
];
const grcBadges = ["Continuous Compliance", "AI Governance", "ISO 42001", "SAP GRC"];

const quickLinks = [
  {
    title: "Talent Acquisition",
    description: "Pre-vetted SAP specialists sourced against a guaranteed shortlist SLA.",
    icon: Users,
    hash: "talent-acquisition",
  },
  {
    title: "Project Consulting",
    description: "Outcome-driven delivery squads for S/4HANA and transformation programs.",
    icon: Workflow,
    hash: "project-consulting",
  },
  {
    title: "Engagement Models",
    description: "Contingent, retained search, or advisory — structured around your roadmap.",
    icon: Layers,
    hash: "engagement-models",
  },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden navy-gradient text-navy-foreground">
        <div className="absolute inset-0 surface-grid opacity-60" aria-hidden />
        <div className="pointer-events-none absolute -right-24 -top-32 size-[520px] gold-glow opacity-70" aria-hidden />
        <div className="pointer-events-none absolute -bottom-40 -left-24 size-[420px] gold-glow opacity-40" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-navy-foreground/20 bg-navy-foreground/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-navy-foreground/80">
              Dual-Pillar Enterprise Consulting
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl">
              Modern Enterprise Talent &amp; AI Governance Solutions
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-foreground/75">
              Bridging elite SAP expertise and automated GRC &amp; AI Governance to build resilient,
              future-ready organizations.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="hero" size="xl">
                <Link to="/services">
                  Explore SAP Services <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="onNavy" size="xl">
                <Link to="/grc-ai-governance">Discover GRC &amp; AI Governance</Link>
              </Button>
            </div>
            <p className="mt-8 text-sm text-navy-foreground/60">{SITE.footprint}</p>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="bg-navy text-navy-foreground">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
          <StatCounter value={100} suffix="+" label="Enterprise Engagements Completed" />
          <StatCounter value={95} suffix="%" label="Client Retention Rate" />
          <StatCounter value={14} suffix=" Days" label="Average Shortlist SLA" />
          <StatCounter value={100} suffix="%" label="Quality Assurance Guarantee" />
        </div>
      </section>

      {/* Dual pillars */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold sm:text-4xl">Two practices. One delivery standard.</h2>
          <p className="mt-4 text-muted-foreground">
            Deep enterprise application capability paired with the governance frameworks modern
            organizations need to scale safely.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <article className="group relative overflow-hidden card-premium hover:card-premium-hover p-8">
            <span className="absolute inset-x-0 top-0 h-1 bg-sap" aria-hidden />
            <div className="grid size-11 place-items-center rounded-lg bg-sap-soft text-sap">
              <Layers className="size-5" />
            </div>
            <h3 className="mt-5 text-xl font-semibold">SAP &amp; Enterprise Apps Practice</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Specialized staffing, executive search, and project consulting across core SAP modules
              and enterprise ecosystem applications.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {sapBadges.map((badge) => (
                <li
                  key={badge}
                  className="rounded-md bg-sap-soft px-2.5 py-1 text-xs font-medium text-sap"
                >
                  {badge}
                </li>
              ))}
            </ul>
            <Link
              to="/services"
              className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-sap"
            >
              View SAP Practice <ArrowRight className="size-4" />
            </Link>
          </article>

          <article className="group relative overflow-hidden card-premium hover:card-premium-hover p-8">
            <span className="absolute inset-x-0 top-0 h-1 bg-grc" aria-hidden />
            <div className="grid size-11 place-items-center rounded-lg bg-grc-soft text-grc">
              <ShieldCheck className="size-5" />
            </div>
            <h3 className="mt-5 text-xl font-semibold">GRC &amp; AI Governance Solutions</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Continuous compliance, automated control testing, and AI governance frameworks for
              modern enterprise risk management.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {grcBadges.map((badge) => (
                <li
                  key={badge}
                  className="rounded-md bg-grc-soft px-2.5 py-1 text-xs font-medium text-grc"
                >
                  {badge}
                </li>
              ))}
            </ul>
            <Link
              to="/grc-ai-governance"
              className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-grc"
            >
              Explore GRC &amp; AI Solutions <ArrowRight className="size-4" />
            </Link>
          </article>
        </div>
      </section>

      {/* Quick service navigation */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">How we engage</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {quickLinks.map((item) => (
              <Link
                key={item.hash}
                to="/services"
                hash={item.hash}
                className="card-premium hover:card-premium-hover p-6"
              >
                <item.icon className="size-5 text-sap" />
                <h3 className="mt-4 font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-sap">
                  Learn more <ArrowRight className="size-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl navy-gradient px-8 py-14 text-navy-foreground sm:px-14">
          <div className="absolute inset-0 surface-grid opacity-50" aria-hidden />
          <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <Gauge className="size-6 text-navy-foreground/70" />
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                {SITE.sla} — from brief to verified shortlist.
              </h2>
              <p className="mt-3 text-navy-foreground/70">
                Tell us the capability gap. We map scope, source, and verify — then present a
                shortlist you can act on.
              </p>
            </div>
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">
                Start a Conversation <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
