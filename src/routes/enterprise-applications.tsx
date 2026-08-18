import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, Briefcase, Users, Workflow } from "lucide-react";

import { Button } from "@/components/ui/button";
import { StatBand } from "@/components/site/StatBand";

export const Route = createFileRoute("/enterprise-applications")({
  head: () => ({
    meta: [
      { title: "SAP Talent, ERP Delivery & S/4HANA Consulting | NexTalenz" },
      {
        name: "description",
        content:
          "SAP contract & permanent placement, S/4HANA implementation (Greenfield, Brownfield, RISE), and project consulting delivered globally.",
      },
      { property: "og:title", content: "SAP Talent, ERP Delivery & S/4HANA Consulting | NexTalenz" },
      {
        property: "og:description",
        content:
          "Enterprise Applications & Modern ERP, delivered without the downtime — senior consultants and vetted SAP specialists.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EnterpriseApplicationsPage,
});

const services = [
  {
    icon: Briefcase,
    title: "Contract & Permanent Placement",
    copy: "Flexible hires for every stage of your roadmap",
  },
  {
    icon: Users,
    title: "SAP Talent Acquisition",
    copy: "Specialist recruitment across the SAP ecosystem",
  },
  {
    icon: Workflow,
    title: "SAP Project Consulting",
    copy: "End-to-end project delivery and support",
  },
];

const coverage = [
  {
    title: "Implementation Pathways",
    tags: ["Greenfield", "Brownfield", "RISE with SAP", "Selective Data Transition"],
  },
  {
    title: "Functional Coverage",
    tags: ["FICO", "MM/SD/PP", "HCM/SuccessFactors", "Ariba/Concur"],
  },
  {
    title: "Technical Coverage",
    tags: ["ABAP/OO ABAP", "Fiori/UI5", "BTP/CAP", "PI/PO Integration"],
  },
  {
    title: "Leadership Roles We Place",
    tags: ["Programme Directors", "Solution Architects", "Practice Leads", "Delivery Managers"],
  },
];

const models = [
  {
    title: "Contingent",
    copy: "Success-based; pay only when you hire",
    guarantee: "90-day replacement guarantee · 48–72hr shortlist",
  },
  {
    title: "Retained",
    copy: "Engagement fee for senior/confidential roles",
    guarantee: "14-day shortlist guarantee · 2–4 week market mapping",
  },
  {
    title: "Project",
    copy: "Day-rate contract teams with defined timelines",
    guarantee: "Contract durations 3–24 months",
  },
];

const industries = [
  "Banking & Financial Services",
  "Insurance",
  "Resources & Energy",
  "Public Sector",
  "Healthcare",
  "Retail & FMCG",
];

function EnterpriseApplicationsPage() {
  return (
    <>
      <section className="relative overflow-hidden navy-gradient text-navy-foreground">
        <div className="absolute inset-0 surface-grid opacity-60" aria-hidden />
        <div className="pointer-events-none absolute -right-24 -top-32 size-[520px] gold-glow opacity-70" aria-hidden />
        <div className="pointer-events-none absolute -bottom-40 -left-24 size-[420px] gold-glow opacity-40" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/35 bg-navy-foreground/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gradient-gold">
            Pillar 1 — Enterprise Applications
          </span>
          <h1 className="rise mt-6 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl">
            Enterprise Applications &amp; Modern ERP,{" "}
            <span className="text-gradient-gold">delivered without the downtime.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-navy-foreground/75">
            SAP talent, project delivery, and end-to-end S/4HANA implementation — built by senior
            consultants and vetted SAP specialists, not a generic staffing bench.
          </p>
          <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Button asChild variant="hero" size="xl">
              <Link to="/contact" search={{ pillar: "erp" }}>
                Book a Transformation Strategy Session <ArrowRight />
              </Link>
            </Button>
            <Link
              to="/enterprise-applications"
              hash="engagement-models"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-gradient-gold"
            >
              See our engagement models &amp; guarantees <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Primary services */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold sm:text-4xl">Primary services</h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="card-premium hover:card-premium-hover p-7">
              <div className="grid size-11 place-items-center rounded-lg bg-sap-soft text-sap">
                <service.icon className="size-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{service.copy}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Technology coverage */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">SAP technology coverage</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {coverage.map((group) => (
              <div key={group.title} className="card-premium p-7">
                <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-sap">
                  {group.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md bg-sap-soft px-2.5 py-1 text-xs font-medium text-sap"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                {group.title === "Technical Coverage" && (
                  <p className="mt-5 rounded-lg border border-primary/30 bg-grc-soft p-4 text-sm text-muted-foreground">
                    Running workloads on SAP BTP? Optro.ai&apos;s AI governance layer plugs directly
                    into BTP/CAP environments —{" "}
                    <Link to="/grc-ai-governance" className="font-semibold text-grc">
                      see GRC &amp; AI Governance
                    </Link>
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement models */}
      <section id="engagement-models" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold sm:text-4xl">Engagement models &amp; guarantees</h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {models.map((model) => (
            <article key={model.title} className="relative overflow-hidden card-premium p-7">
              <span className="absolute inset-x-0 top-0 h-1 bg-gradient-gold" aria-hidden />
              <h3 className="text-lg font-semibold">{model.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{model.copy}</p>
              <p className="mt-5 text-sm font-medium text-sap">{model.guarantee}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 rounded-xl border border-primary/35 bg-sap-soft p-6">
          <div className="flex items-center gap-2 text-sm font-semibold text-sap">
            <BadgeCheck className="size-4" /> How we protect the outcome
          </div>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>Multi-stage vetting by in-house SAP subject matter experts</li>
            <li>Transparent pricing with disclosed margins</li>
          </ul>
        </div>
      </section>

      {/* Proof */}
      <StatBand />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold">Industries served</h2>
        <ul className="mt-6 flex flex-wrap gap-2.5">
          {industries.map((industry) => (
            <li
              key={industry}
              className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground"
            >
              {industry}
            </li>
          ))}
        </ul>
      </section>

      {/* Closing cross-sell */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl navy-gradient px-8 py-14 text-navy-foreground sm:px-14">
          <div className="absolute inset-0 surface-grid opacity-50" aria-hidden />
          <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <p className="max-w-2xl text-lg text-navy-foreground/80">
              Every ERP program we deliver can be paired with continuous AI-governance monitoring
              via our Optro.ai partnership.{" "}
              <Link to="/grc-ai-governance" className="font-semibold text-gradient-gold">
                See GRC &amp; AI Governance
              </Link>
            </p>
            <Button asChild variant="hero" size="xl">
              <Link to="/contact" search={{ pillar: "erp" }}>
                Book a Transformation Strategy Session <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
