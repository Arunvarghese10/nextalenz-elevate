import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Search, Users, Workflow } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "SAP & Enterprise Apps Practice | NexTalenz" },
      {
        name: "description",
        content:
          "Specialized SAP staffing, retained executive search, and project consulting across S/4HANA, SuccessFactors, FICO, ABAP/Fiori and BTP.",
      },
      { property: "og:title", content: "SAP & Enterprise Apps Practice | NexTalenz" },
      {
        property: "og:description",
        content:
          "Flexible engagement models engineered for speed, technical depth, and enterprise execution.",
      },
    ],
  }),
  component: ServicesPage,
});

const models = [
  {
    id: "contingent-staffing",
    icon: Users,
    title: "Contingent Staffing",
    copy: "On-demand access to pre-vetted SAP specialists with a guaranteed 14-day shortlist SLA.",
    points: [
      "Pre-qualified consultant bench across core modules",
      "Rate-benchmarked, compliance-checked submissions",
      "Contract, contract-to-hire, and rapid backfill cover",
    ],
  },
  {
    id: "retained-executive-search",
    icon: Search,
    title: "Retained Executive Search",
    copy: "Dedicated headhunting for niche, high-stakes enterprise leadership roles.",
    points: [
      "Mapped market research and confidential approach",
      "Structured competency and stakeholder assessment",
      "Offer management and onboarding assurance",
    ],
  },
  {
    id: "project-advisory-consulting",
    icon: Workflow,
    title: "Project & Advisory Consulting",
    copy: "Outcome-driven consulting teams built for S/4HANA migrations and enterprise digital transformations.",
    points: [
      "Blended onshore / offshore delivery pods",
      "Statement-of-work engagements with defined outcomes",
      "Architecture, migration, and hypercare support",
    ],
  },
];

const capabilities = [
  "S/4HANA Cloud",
  "SAP FICO",
  "SAP MM/SD/PP",
  "SAP SuccessFactors",
  "ABAP & Fiori",
  "SAP BTP",
  "Enterprise Cloud Architecture",
];

function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden navy-gradient text-navy-foreground">
        <div className="absolute inset-0 surface-grid opacity-60" aria-hidden />
        <div className="pointer-events-none absolute -right-24 -top-32 size-[520px] gold-glow opacity-70" aria-hidden />
        <div className="pointer-events-none absolute -bottom-40 -left-24 size-[420px] gold-glow opacity-40" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/35 bg-navy-foreground/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gradient-gold">
            Pillar 1 · SAP &amp; Enterprise Apps
          </span>
          <h1 className="rise mt-5 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Specialized SAP &amp; Enterprise Application Talent
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-navy-foreground/75">
            Flexible engagement models engineered for speed, technical depth, and enterprise
            execution.
          </p>
          <div className="mt-8">
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">
                Request a Shortlist <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="talent-acquisition" className="scroll-mt-20 border-b border-border bg-surface">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Talent Acquisition</h2>
            <p className="mt-4 text-muted-foreground">
              A rigorous, evidence-based vetting process built for enterprise programs where a wrong
              hire costs a milestone. Every submission arrives with verified module depth, project
              history, and availability.
            </p>
            <p className="mt-4 font-medium text-sap">{SITE.sla}</p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {[
              "Technical screening by practicing SAP consultants",
              "Reference and right-to-work verification",
              "Rate and market intelligence with every brief",
              "Diversity-conscious sourcing across APAC, India & Middle East",
            ].map((item) => (
              <li
                key={item}
                className="card-premium p-4 text-sm text-muted-foreground"
              >
                <CheckCircle2 className="mb-2 size-4 text-sap" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="engagement-models" className="scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">Engagement Models</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {models.map((model) => (
              <article
                key={model.id}
                id={model.id}
                className="scroll-mt-20 card-premium hover:card-premium-hover p-7"
              >
                <div className="grid size-11 place-items-center rounded-lg bg-sap-soft text-sap">
                  <model.icon className="size-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{model.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{model.copy}</p>
                <ul className="mt-5 space-y-2.5">
                  {model.points.map((point) => (
                    <li key={point} className="flex gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-sap" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="project-consulting"
        className="scroll-mt-20 border-y border-border bg-surface"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Project Consulting</h2>
            <p className="mt-4 text-muted-foreground">
              Assembled delivery teams for S/4HANA migrations, module rollouts, and enterprise
              integration programs — accountable to outcomes, not timesheets.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Migration Programs", "Brownfield and greenfield S/4HANA transitions."],
              ["Module Rollouts", "FICO, MM/SD/PP and SuccessFactors implementations."],
              ["Integration & BTP", "Extension, API and cloud architecture delivery."],
              ["Hypercare & Support", "Stabilization squads post go-live."],
            ].map(([title, copy]) => (
              <div key={title} className="card-premium p-5">
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold sm:text-4xl">SAP Ecosystem Capability</h2>
        <ul className="mt-8 flex flex-wrap gap-3">
          {capabilities.map((cap) => (
            <li
              key={cap}
              className="rounded-lg border border-sap/20 bg-sap-soft px-4 py-2 text-sm font-medium text-sap"
            >
              {cap}
            </li>
          ))}
        </ul>
        <div className="mt-12 card-premium p-8">
          <h3 className="text-xl font-semibold">Need governance alongside delivery?</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Our GRC &amp; AI Governance practice embeds access controls and continuous compliance
            directly into your ERP program.
          </p>
          <Button asChild variant="grc" size="lg" className="mt-6">
            <Link to="/grc-ai-governance">
              Explore GRC &amp; AI Governance <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
