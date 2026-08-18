import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Blocks,
  Briefcase,
  Layers,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | NexTalenz — HCT & ERP, GRC, Talent & Product Engineering" },
      {
        name: "description",
        content:
          "Four practices, one consultancy: Human Capital Technology & Modern ERP, GRC & AI Governance, Talent Solutions, and Product Engineering.",
      },
      { property: "og:title", content: "Services | NexTalenz" },
      {
        property: "og:description",
        content:
          "Enterprise platforms, AI governance, precision hiring, and full-stack product engineering — delivered by one consultancy.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

const practiceNav = [
  { label: "HCT & Modern ERP", hash: "hct-modern-erp" },
  { label: "GRC & AI Governance", hash: "grc-ai-governance" },
  { label: "Talent Solutions", hash: "talent-solutions" },
  { label: "Product Engineering", hash: "product-engineering" },
];

const erpPlatforms = [
  {
    title: "SAP & SuccessFactors",
    tags: [
      "Employee Central (EC)",
      "EC Payroll",
      "PMGM",
      "LMS",
      "Recruiting",
      "Onboarding",
      "Compensation",
    ],
  },
  {
    title: "Workday HCM",
    tags: ["Core HCM", "Payroll", "Time & Absence", "Talent", "Learning", "Recruiting"],
  },
  {
    title: "Ceridian Dayforce",
    tags: ["HR", "Payroll", "Time", "Scheduling", "Benefits", "Analytics"],
  },
  {
    title: "UKG Pro / Ready & WFS",
    tags: [
      "Pro WFM",
      "Dimensions",
      "Workforce Central",
      "WorkForce Software (EmpCenter, Compliance, Forecasting)",
    ],
  },
];

const erpDelivery = [
  "Greenfield rollouts, module activation, and cloud migrations.",
  "Data migration, QA testing, hypercare, and multi-tier AMS (L1–L3 support).",
  "Managed multi-country payroll and Employer of Record (EOR) services across APAC, EMEA, the Americas, and MENA.",
];

const grcPillars = [
  {
    icon: Target,
    title: "Unified AI Governance",
    copy: "Establish an orchestration layer bridging enterprise AI stacks, risk policy frameworks, and human oversight.",
  },
  {
    icon: ShieldCheck,
    title: "Continuous Controls Monitoring",
    copy: "Deploy AI-driven recommendations and pre-built templates to automate control verification.",
  },
  {
    icon: Sparkles,
    title: "Predictive Cyber Risk",
    copy: "Harness predictive insights to detect vulnerabilities and accelerate risk mitigation before audits begin.",
  },
];

const talentModels = [
  {
    title: "Enterprise & Project RPO",
    copy: "Full-function outsourced talent acquisition for high-volume surges, market expansions, and transformations.",
  },
  {
    title: "Function-Specific Teams",
    copy: "Embedded hiring pods dedicated to SAP, Data & AI, Cloud/DevOps, Cybersecurity, and Software Engineering.",
  },
  {
    title: "Executive Search",
    copy: "Retained leadership search backed by rigorous talent and market mapping.",
  },
];

const talentAdvantage = [
  { value: "72hr", label: "Average time-to-shortlist on specialized enterprise roles" },
  { value: "94%", label: "Offer acceptance rate" },
  { value: "91%", label: "12-month placed talent retention" },
];

const engineeringBench = [
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "Go",
  "iOS / Android / Flutter",
  "PostgreSQL",
  "AWS / Azure / GCP",
  "Kubernetes",
  "LangChain / Vector DB architectures",
];

const engineeringLifecycle = [
  {
    phase: "Discovery",
    time: "2–4 weeks",
    copy: "Scoping, feasibility, and technical roadmapping.",
  },
  {
    phase: "Design & Architecture",
    time: "3–6 weeks",
    copy: "UX design systems and cloud architecture.",
  },
  { phase: "Build", time: "8–24 weeks", copy: "Agile, sprint-based full-stack engineering." },
  {
    phase: "Launch",
    time: "2–4 weeks",
    copy: "QA validation, production deployment, and go-live.",
  },
  {
    phase: "Run & Scale",
    time: "Ongoing",
    copy: "Platform optimization, DevOps, and continuous enhancements.",
  },
];

function ServicesPage() {
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
            Our Services
          </span>
          <h1 className="rise mt-6 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Four practices. <span className="text-gradient-gold">One consultancy.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-navy-foreground/75">
            End-to-end consulting, rollout, and managed services across market-leading enterprise
            systems — paired with the governance, talent, and engineering capacity to run them.
          </p>
          <nav className="mt-9 flex flex-wrap gap-2.5">
            {practiceNav.map((item) => (
              <Link
                key={item.hash}
                to="/services"
                hash={item.hash}
                className="rounded-full border border-navy-foreground/25 bg-navy-foreground/5 px-4 py-2 text-sm font-medium text-navy-foreground/85 backdrop-blur transition-colors hover:bg-navy-foreground/15"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </section>

      {/* Practice 1: HCT & Modern ERP */}
      <section
        id="hct-modern-erp"
        className="mx-auto max-w-7xl scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="flex items-center gap-3">
          <div className="grid size-11 place-items-center rounded-lg bg-sap-soft text-sap">
            <Layers className="size-5" />
          </div>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-sap">
            Practice 1
          </span>
        </div>
        <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
          Human Capital Technology (HCT) &amp; Modern ERP
        </h2>
        <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
          End-to-end consulting, rollout, and managed services across market-leading enterprise
          systems.
        </p>

        <h3 className="mt-12 text-sm font-semibold uppercase tracking-[0.14em] text-sap">
          Enterprise platforms supported
        </h3>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {erpPlatforms.map((platform) => (
            <div key={platform.title} className="card-premium p-7">
              <h4 className="font-semibold">{platform.title}</h4>
              <ul className="mt-4 flex flex-wrap gap-2">
                {platform.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md bg-sap-soft px-2.5 py-1 text-xs font-medium text-sap"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h3 className="mt-12 text-sm font-semibold uppercase tracking-[0.14em] text-sap">
          Delivery capabilities
        </h3>
        <ul className="mt-6 space-y-3">
          {erpDelivery.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-sap" aria-hidden />
              {item}
            </li>
          ))}
        </ul>

        <Button asChild variant="hero" size="lg" className="mt-10">
          <Link to="/contact" search={{ pillar: "erp" }}>
            Talk to an ERP Specialist <ArrowRight />
          </Link>
        </Button>
      </section>

      {/* Practice 2: GRC & AI Governance */}
      <section id="grc-ai-governance" className="border-y border-border bg-surface">
        <div className="mx-auto max-w-7xl scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="grid size-11 place-items-center rounded-lg bg-grc-soft text-grc">
              <ShieldCheck className="size-5" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-grc">
              Practice 2 — Powered by Optro.ai
            </span>
          </div>
          <h2 className="mt-5 text-3xl font-bold sm:text-4xl">GRC &amp; AI Governance</h2>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
            Moving organizations from static compliance reporting to proactive, real-time risk
            defense.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {grcPillars.map((pillar) => (
              <article
                key={pillar.title}
                className="relative overflow-hidden card-premium hover:card-premium-hover p-7"
              >
                <span className="absolute inset-x-0 top-0 h-1 bg-gradient-gold" aria-hidden />
                <div className="grid size-11 place-items-center rounded-lg bg-grc-soft text-grc">
                  <pillar.icon className="size-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pillar.copy}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-primary/35 bg-grc-soft p-6">
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-grc">
              Why NexTalenz
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              We deliver the complete ecosystem — pairing modern GRC platform implementation with
              the specialized cybersecurity and compliance talent required to manage it.
            </p>
          </div>

          <Button asChild variant="grc" size="lg" className="mt-10">
            <Link to="/grc-ai-governance">
              Explore GRC &amp; AI Governance <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>

      {/* Practice 3: Talent Solutions */}
      <section
        id="talent-solutions"
        className="mx-auto max-w-7xl scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="flex items-center gap-3">
          <div className="grid size-11 place-items-center rounded-lg bg-primary/12 text-primary">
            <Briefcase className="size-5" />
          </div>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Practice 3
          </span>
        </div>
        <h2 className="mt-5 text-3xl font-bold sm:text-4xl">Talent Solutions</h2>
        <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
          Flexible, SLA-driven hiring models backed by deep enterprise domain knowledge.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {talentModels.map((model) => (
            <article key={model.title} className="card-premium hover:card-premium-hover p-7">
              <h3 className="text-lg font-semibold">{model.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{model.copy}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-primary/35 bg-sap-soft p-8">
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-sap">
            The NexTalenz advantage
          </h3>
          <div className="mt-6 grid gap-8 sm:grid-cols-3">
            {talentAdvantage.map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <div className="text-3xl font-bold text-sap">{stat.value}</div>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <Button asChild variant="hero" size="lg" className="mt-10">
          <Link to="/contact" search={{ pillar: undefined }}>
            Start a Talent Search <ArrowRight />
          </Link>
        </Button>
      </section>

      {/* Practice 4: Product Engineering */}
      <section id="product-engineering" className="border-y border-border bg-surface">
        <div className="mx-auto max-w-7xl scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="grid size-11 place-items-center rounded-lg bg-secondary text-secondary-foreground">
              <Blocks className="size-5" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Practice 4
            </span>
          </div>
          <h2 className="mt-5 text-3xl font-bold sm:text-4xl">Product Engineering</h2>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
            Full-stack, cross-functional engineering pods delivering scalable digital products.
          </p>

          <h3 className="mt-12 text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Technology bench
          </h3>
          <ul className="mt-6 flex flex-wrap gap-2.5">
            {engineeringBench.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground"
              >
                {tech}
              </li>
            ))}
          </ul>

          <h3 className="mt-12 text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Linear delivery lifecycle
          </h3>
          <div className="mt-6 grid gap-4 lg:grid-cols-5">
            {engineeringLifecycle.map((stage, index) => (
              <div key={stage.phase} className="relative card-premium p-6">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-gradient-gold">
                  0{index + 1}
                </span>
                <h4 className="mt-3 font-semibold">{stage.phase}</h4>
                <p className="mt-1 text-xs font-medium text-sap">{stage.time}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{stage.copy}</p>
              </div>
            ))}
          </div>

          <Button asChild variant="hero" size="lg" className="mt-10">
            <Link to="/contact" search={{ pillar: undefined }}>
              Discuss Your Product Roadmap <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl navy-gradient px-8 py-14 text-navy-foreground sm:px-14">
          <div className="absolute inset-0 surface-grid opacity-50" aria-hidden />
          <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <p className="max-w-2xl text-lg text-navy-foreground/80">
              Not sure which practice fits? See how our commercial engagement models work — or talk
              to a partner directly.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="onNavy" size="xl">
                <Link to="/how-we-work">
                  <Rocket className="size-4" /> See How We Work
                </Link>
              </Button>
              <Button asChild variant="hero" size="xl">
                <Link to="/contact" search={{ pillar: undefined }}>
                  Talk to an Expert <ArrowRight />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
