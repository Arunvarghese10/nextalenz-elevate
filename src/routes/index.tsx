import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Blocks, Briefcase, Layers, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { StatBand } from "@/components/site/StatBand";
import { FootprintBadges } from "@/components/site/FootprintBadges";
import { TestimonialCarousel } from "@/components/site/TestimonialCarousel";
import { TRUST_BAR } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NexTalenz — Enterprise Technology, Talent & Governance" },
      {
        name: "description",
        content:
          "NexTalenz helps global enterprises modernize core ERP systems, scale engineering teams, and automate AI-powered risk and compliance.",
      },
      { property: "og:title", content: "NexTalenz — Enterprise Technology, Talent & Governance" },
      {
        property: "og:description",
        content:
          "Specialist by design. Generalist by reach. Modern ERP, GRC & AI governance, talent solutions and product engineering — one consultancy.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const offerings = [
  {
    icon: Layers,
    accent: "sap" as const,
    title: "Human Capital Technology (HCT) & Modern ERP",
    copy: "Full-lifecycle implementations and managed services across SAP SuccessFactors, Workday, Dayforce, UKG, and modern cloud ERP platforms.",
    to: "/services",
    hash: "hct-modern-erp",
  },
  {
    icon: ShieldCheck,
    accent: "grc" as const,
    title: "GRC & AI Governance",
    copy: "Next-generation risk, compliance automation, and AI governance powered by our alliance with Optro.ai.",
    to: "/services",
    hash: "grc-ai-governance",
  },
  {
    icon: Briefcase,
    accent: "primary" as const,
    title: "Talent Solutions",
    copy: "Precision hiring, from Executive Search to full Enterprise Recruitment Process Outsourcing (RPO).",
    to: "/services",
    hash: "talent-solutions",
  },
  {
    icon: Blocks,
    accent: "secondary" as const,
    title: "Product Engineering",
    copy: "Dedicated full-stack pods transforming ideas into scalable, production-grade applications.",
    to: "/services",
    hash: "product-engineering",
  },
];

const accentClasses: Record<string, string> = {
  sap: "bg-sap-soft text-sap",
  grc: "bg-grc-soft text-grc",
  primary: "bg-primary/12 text-primary",
  secondary: "bg-secondary text-secondary-foreground",
};

function Home() {
  return (
    <>
      {/* Hero */}
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
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/35 bg-navy-foreground/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gradient-gold">
              Optro.ai Alliance Partner
            </span>
            <h1 className="rise mt-6 text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl">
              Enterprise Technology, Talent &amp; Governance{" "}
              <span className="text-gradient-gold">— Built for What&apos;s Next.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-foreground/75">
              Specialist by design. Generalist by reach. We help global enterprises modernize core
              ERP systems, scale engineering teams, and automate AI-powered risk and compliance.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="hero" size="xl">
                <Link to="/services">
                  Explore Our Services <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="onNavy" size="xl">
                <Link to="/contact" search={{ pillar: undefined }}>
                  Talk to an Expert
                </Link>
              </Button>
            </div>
            <p className="mt-8 text-sm text-navy-foreground/60">{TRUST_BAR}</p>
          </div>
        </div>
      </section>

      {/* Key metrics banner */}
      <StatBand />

      {/* Core offerings overview */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gradient-gold">
            Core offerings
          </span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            A unified approach combining{" "}
            <span className="text-gradient-gold">modern enterprise platforms</span> with the
            specialized talent to run them.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {offerings.map((offering) => (
            <article
              key={offering.title}
              className="relative overflow-hidden card-premium hover:card-premium-hover p-8"
            >
              <span className="absolute inset-x-0 top-0 h-1 bg-gradient-gold" aria-hidden />
              <div
                className={`grid size-11 place-items-center rounded-lg ${accentClasses[offering.accent]}`}
              >
                <offering.icon className="size-5" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">{offering.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{offering.copy}</p>
              <Link
                to={offering.to}
                hash={offering.hash}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-sap"
              >
                Learn more <ArrowRight className="size-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Why the pairing matters */}
      <section className="border-y border-border bg-surface">
        <div className="relative mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">
            One consultancy. Every discipline your transformation needs.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Enterprise transformation programs increasingly fail not on delivery, but on trust —
            regulators, boards, and risk committees now expect continuous evidence of control, not a
            point-in-time audit. NexTalenz is built so the same team that modernizes your ERP
            platform, staffs your engineering roadmap, or builds your product can also prove,
            continuously, that it&apos;s governed correctly — through our Optro.ai Alliance
            Partnership.
          </p>
        </div>
      </section>

      {/* Client voice */}
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <TestimonialCarousel />
      </section>

      {/* Regional footprint */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <FootprintBadges
            headline="Delivering from Brisbane, reaching the globe."
            body="Headquartered in Brisbane with regional delivery partners across APAC/ANZ, EMEA, and the Americas — 14 countries and counting."
          />
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl navy-gradient px-8 py-16 text-center text-navy-foreground sm:px-14">
          <div className="absolute inset-0 surface-grid opacity-50" aria-hidden />
          <div
            className="pointer-events-none absolute -right-24 -top-32 size-[420px] gold-glow opacity-50"
            aria-hidden
          />
          <div className="relative mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Ready to modernize your enterprise stack, scale your team, or secure your AI
              governance?
            </h2>
            <p className="mt-4 text-navy-foreground/70">
              A 30-minute conversation to scope your next ERP program, hiring need, or governance
              gap. We&apos;ll come back within one business day with a clear, honest plan — talk to
              a partner, not a chatbot.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild variant="hero" size="xl">
                <Link to="/services">
                  Explore Our Services <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="onNavy" size="xl">
                <Link to="/contact" search={{ pillar: undefined }}>
                  Talk to an Expert
                </Link>
              </Button>
            </div>
            <p className="mt-6 text-xs uppercase tracking-[0.14em] text-navy-foreground/50">
              Tailored proposal within 48 hours · No obligation
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
