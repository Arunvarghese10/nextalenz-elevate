import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Layers, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { StatBand } from "@/components/site/StatBand";
import { FootprintBadges } from "@/components/site/FootprintBadges";
import { TestimonialCarousel } from "@/components/site/TestimonialCarousel";
import { TRUST_BAR } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NexTalenz — SAP Talent, ERP Delivery & AI Governance (Optro.ai)" },
      {
        name: "description",
        content:
          "NexTalenz pairs the world's best SAP talent and ERP delivery with Optro.ai-powered AI Governance, Risk & Compliance.",
      },
      { property: "og:title", content: "NexTalenz — SAP Talent, ERP Delivery & AI Governance" },
      {
        property: "og:description",
        content:
          "SAP talent, project delivery and S/4HANA implementation paired with continuous AI governance, risk and compliance.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const values = [
  {
    title: "Integrity",
    copy: "We say what we mean. If we can't deliver, we tell you on day one.",
  },
  {
    title: "Depth",
    copy: "SAP and AI governance are all we do. That depth shows up in every conversation.",
  },
  {
    title: "Patience",
    copy: "We'd rather take an extra week than place the wrong person, or ship the wrong control.",
  },
  {
    title: "Partnership",
    copy: "We invest in long-term client relationships, not transactions.",
  },
];

const nextUp = [
  {
    title: "Digital Adoption & UX Enablement",
    body: "Via WalkMe / DGTL — helping teams actually use the systems you just implemented.",
    badge: "In partner onboarding",
    hash: "digital-adoption",
  },
  {
    title: "Global Delivery Expansion",
    body: "Brunei & South East Asia — extending delivery capability into our next regional market.",
    badge: "Planned expansion",
    hash: "expansion",
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
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/35 bg-navy-foreground/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gradient-gold">
              Optro.ai Alliance Partner
            </span>
            <h1 className="rise mt-6 text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl">
              The world&apos;s best SAP talent.{" "}
              <span className="text-gradient-gold">Now AI-governed by design.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-foreground/75">
              NexTalenz pairs proven SAP talent, project delivery, and ERP implementation with
              Optro.ai-powered AI Governance, Risk &amp; Compliance — so your transformation program
              ships fast and stays defensible.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact" search={{ pillar: "erp" }}>
                  Book a Transformation Strategy Session <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="onNavy" size="xl">
                <Link to="/contact" search={{ pillar: "grc" }}>
                  Request a GRC Readiness Assessment
                </Link>
              </Button>
            </div>
            <p className="mt-8 text-sm text-navy-foreground/60">{TRUST_BAR}</p>
          </div>
        </div>
      </section>

      {/* Two-pillar framework */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gradient-gold">
            One consultancy. Two disciplines.
          </span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            The talent and delivery you already trust — now paired with{" "}
            <span className="text-gradient-gold">governance that never goes stale.</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <article className="order-2 relative overflow-hidden card-premium hover:card-premium-hover p-8 lg:order-1">
            <span className="absolute inset-x-0 top-0 h-1 bg-gradient-gold" aria-hidden />
            <div className="grid size-11 place-items-center rounded-lg bg-sap-soft text-sap">
              <Layers className="size-5" />
            </div>
            <h3 className="mt-5 text-xl font-semibold">Enterprise Applications &amp; Modern ERP</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              SAP talent acquisition, project consulting, and end-to-end S/4HANA delivery — for
              enterprises that can&apos;t afford downtime or the wrong hire.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {["SAP/ERP Delivery", "Talent Acquisition", "Engagement Models"].map((badge) => (
                <li
                  key={badge}
                  className="rounded-md bg-sap-soft px-2.5 py-1 text-xs font-medium text-sap"
                >
                  {badge}
                </li>
              ))}
            </ul>
            <Button asChild variant="outline" className="mt-7">
              <Link to="/enterprise-applications">
                Explore Enterprise Applications <ArrowRight />
              </Link>
            </Button>
          </article>

          <article className="order-1 relative overflow-hidden card-premium hover:card-premium-hover p-8 lg:order-2">
            <span className="absolute inset-x-0 top-0 h-1 bg-gradient-gold opacity-60" aria-hidden />
            <div className="grid size-11 place-items-center rounded-lg bg-grc-soft text-grc">
              <ShieldCheck className="size-5" />
            </div>
            <h3 className="mt-5 text-xl font-semibold">
              GRC &amp; AI Governance, powered by Optro.ai
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              AI-powered governance, risk, and compliance — continuous auditing, cyber risk,
              controls testing, and AI governance built in.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {[
                "AI Risk Assessment",
                "Continuous Controls Monitoring",
                "Optro.ai Partnership",
              ].map((badge) => (
                <li
                  key={badge}
                  className="rounded-md bg-grc-soft px-2.5 py-1 text-xs font-medium text-grc"
                >
                  {badge}
                </li>
              ))}
            </ul>
            <Button asChild variant="outline" className="mt-7">
              <Link to="/grc-ai-governance">
                Explore GRC &amp; AI Governance <ArrowRight />
              </Link>
            </Button>
          </article>
        </div>
      </section>

      {/* Proof */}
      <StatBand originLine="Founded 2024. From a single SAP-focused desk to a two-pillar enterprise consultancy." />

      {/* Why the pairing matters */}
      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold sm:text-4xl">Why pair SAP delivery with AI governance?</h2>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          Enterprise transformation programs increasingly fail not on delivery, but on trust —
          regulators, boards, and risk committees now expect continuous evidence of control, not a
          point-in-time audit. NexTalenz is built so the same team that places your SAP talent or
          delivers your ERP program also proves, continuously, that it&apos;s governed correctly —
          through our Optro.ai Alliance Partnership.
        </p>
      </section>

      {/* Values */}
      <section className="relative overflow-hidden border-y border-border bg-surface">
        <div className="absolute inset-0 dot-grid opacity-40" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">What hasn&apos;t changed.</h2>
          <p className="mt-3 text-muted-foreground">Four values, unchanged since day one:</p>
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
          <p className="mt-8 text-sm font-medium text-sap">
            30% of our clients come back to us for their next hire — partnership, not a one-off
            placement.
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
            headline="Delivering from Brisbane, focused on the region."
            body="Brisbane HQ, with active delivery in India and the UAE — where our SAP talent and, increasingly, our AI governance work is concentrated. Brunei and the wider SEA region are next."
          />
        </div>
      </section>

      {/* What's next */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold sm:text-4xl">What&apos;s next for NexTalenz.</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Two more capabilities are entering our practice this year — built the same way everything
          else here was: proven before we put it on the homepage as a pillar.
        </p>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {nextUp.map((item) => (
            <article key={item.title} className="card-premium p-7">
              <span className="inline-flex rounded-full border border-primary/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-gradient-gold">
                {item.badge}
              </span>
              <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              <Link
                to="/roadmap"
                hash={item.hash}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-sap"
              >
                Learn more <ArrowRight className="size-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl navy-gradient px-8 py-16 text-center text-navy-foreground sm:px-14">
          <div className="absolute inset-0 surface-grid opacity-50" aria-hidden />
          <div className="pointer-events-none absolute -right-24 -top-32 size-[420px] gold-glow opacity-50" aria-hidden />
          <div className="relative mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Let&apos;s find out which pillar you need — or both.
            </h2>
            <p className="mt-4 text-navy-foreground/70">
              A 30-minute conversation to scope your next SAP hire, your governance gap, or both.
              We&apos;ll come back within one business day with a clear, honest plan — talk to a
              partner, not a chatbot.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact" search={{ pillar: "erp" }}>
                  Book a Transformation Strategy Session <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="onNavy" size="xl">
                <Link to="/contact" search={{ pillar: "grc" }}>
                  Request a GRC Readiness Assessment
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
