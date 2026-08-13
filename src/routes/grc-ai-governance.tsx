import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Activity, Bot, ClipboardCheck, Network, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/grc-ai-governance")({
  head: () => ({
    meta: [
      { title: "GRC & AI Governance Solutions | NexTalenz" },
      {
        name: "description",
        content:
          "Automate compliance, streamline audit cycles, and safely accelerate AI adoption with continuous monitoring, ISO 42001 alignment and SAP GRC integration.",
      },
      { property: "og:title", content: "GRC & AI Governance Solutions | NexTalenz" },
      {
        property: "og:description",
        content:
          "Autonomous GRC and enterprise AI governance for global organizations: continuous compliance, automated control testing, responsible AI frameworks.",
      },
    ],
  }),
  component: GrcPage,
});

const pillars = [
  {
    icon: Activity,
    title: "Continuous Risk & Compliance Monitoring",
    copy: "Real-time automated tracking of internal controls, continuous compliance monitoring, and instant risk visibility across enterprise infrastructure.",
  },
  {
    icon: Bot,
    title: "AI Governance & Risk Frameworks",
    copy: "Operationalizing Responsible AI. Aligning enterprise AI deployments with ISO 42001, NIST AI RMF, and global AI safety standards.",
  },
  {
    icon: ClipboardCheck,
    title: "Automated Control Testing & Audit Readiness",
    copy: "Replace manual compliance audits with automated control verification, reducing audit prep cycles by up to 60%.",
  },
  {
    icon: Network,
    title: "SAP GRC & Enterprise Integration",
    copy: "Unifying corporate risk policies and access controls directly into core ERP and cloud application workflows.",
  },
];

const serviceModels = [
  {
    title: "Strategic GRC Advisory",
    copy: "Architecture & policy setup.",
    detail:
      "Risk taxonomy, control framework design, and governance operating models mapped to your regulatory landscape.",
  },
  {
    title: "Managed Compliance Operations",
    copy: "End-to-end risk monitoring.",
    detail:
      "Ongoing control monitoring, evidence collection, exception triage and audit-ready reporting as a managed service.",
  },
  {
    title: "AI Safety & Alignment Implementations",
    copy: "Framework deployment for genAI & enterprise models.",
    detail:
      "Model inventories, evaluation pipelines, human-oversight controls and ISO 42001 / NIST AI RMF alignment.",
  },
];

function GrcPage() {
  return (
    <>
      <section className="relative overflow-hidden navy-gradient text-navy-foreground">
        <div className="absolute inset-0 surface-grid opacity-60" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-grc/40 bg-grc/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]">
            <ShieldCheck className="size-3.5" />
            Enterprise Risk &amp; Compliance Automation
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Autonomous GRC &amp; Enterprise AI Governance
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-navy-foreground/75">
            Empowering global enterprises to automate compliance, streamline audit cycles, and
            safely accelerate AI adoption.
          </p>
          <div className="mt-8">
            <Button asChild variant="grc" size="xl">
              <Link to="/contact">
                Schedule a Compliance Discovery Session <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold sm:text-4xl">Capability Pillars</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="relative overflow-hidden rounded-xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-lift)]"
            >
              <span className="absolute inset-x-0 top-0 h-1 bg-grc" aria-hidden />
              <div className="grid size-11 place-items-center rounded-lg bg-grc-soft text-grc">
                <pillar.icon className="size-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{pillar.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">Service Models</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {serviceModels.map((model, index) => (
              <article
                key={model.title}
                className="rounded-xl border border-border bg-background p-7"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-grc">
                  0{index + 1}
                </span>
                <h3 className="mt-4 text-lg font-semibold">{model.title}</h3>
                <p className="mt-2 text-sm font-medium text-foreground/80">{model.copy}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{model.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl navy-gradient px-8 py-14 text-navy-foreground sm:px-14">
          <div className="absolute inset-0 surface-grid opacity-50" aria-hidden />
          <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Ready to make compliance continuous?
              </h2>
              <p className="mt-3 text-navy-foreground/70">
                We will map your current control landscape and identify the fastest path to
                automated assurance and responsible AI adoption.
              </p>
            </div>
            <Button asChild variant="grc" size="xl">
              <Link to="/contact">
                Book a Discovery Session <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
