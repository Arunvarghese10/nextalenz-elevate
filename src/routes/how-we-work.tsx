import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const Route = createFileRoute("/how-we-work")({
  head: () => ({
    meta: [
      { title: "How We Work | Commercial Engagement Models | NexTalenz" },
      {
        name: "description",
        content:
          "Managed RPO, Statement of Work, Retained Search, and Contingent Search — flexible commercial models built around how your enterprise buys.",
      },
      { property: "og:title", content: "How We Work | NexTalenz" },
      {
        property: "og:description",
        content: "Four commercial engagement models, matched to how your enterprise needs to buy.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HowWeWorkPage,
});

const models = [
  {
    name: "Managed RPO",
    bestFor: "Long-term or scaling teams",
    structure: "Dedicated talent function under a predictable monthly fee with SLAs.",
    popular: true,
  },
  {
    name: "Statement of Work (SOW)",
    bestFor: "Technology rollouts & engineering",
    structure: "Fixed-scope or Time & Materials (T&M) consulting for implementations and builds.",
    popular: false,
  },
  {
    name: "Retained Search",
    bestFor: "Executive & niche hires",
    structure: "Exclusive partnership with dedicated market-mapping consultants.",
    popular: false,
  },
  {
    name: "Contingent Search",
    bestFor: "Flexible hiring needs",
    structure: "Success-based model with zero upfront cost.",
    popular: false,
  },
];

function HowWeWorkPage() {
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
            How We Work
          </span>
          <h1 className="rise mt-6 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Commercial models built around{" "}
            <span className="text-gradient-gold">how you need to buy.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-navy-foreground/75">
            Whether you need a dedicated talent function, a fixed-scope delivery team, or a single
            confidential hire, we structure the engagement to match — not the other way around.
          </p>
        </div>
      </section>

      {/* Desktop table */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="hidden overflow-hidden rounded-xl border border-border lg:block">
          <Table>
            <TableHeader>
              <TableRow className="bg-surface hover:bg-surface">
                <TableHead className="text-sm font-semibold uppercase tracking-[0.1em] text-foreground">
                  Model
                </TableHead>
                <TableHead className="text-sm font-semibold uppercase tracking-[0.1em] text-foreground">
                  Best For
                </TableHead>
                <TableHead className="text-sm font-semibold uppercase tracking-[0.1em] text-foreground">
                  Engagement Structure
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {models.map((model) => (
                <TableRow key={model.name}>
                  <TableCell className="font-semibold">
                    <span className="inline-flex items-center gap-2">
                      {model.name}
                      {model.popular && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-primary/12 px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-primary">
                          <Star className="size-3" fill="currentColor" /> Most Popular
                        </span>
                      )}
                    </span>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{model.bestFor}</TableCell>
                  <TableCell className="text-muted-foreground">{model.structure}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Mobile cards */}
        <div className="grid gap-6 lg:hidden">
          {models.map((model) => (
            <article key={model.name} className="relative overflow-hidden card-premium p-7">
              <span className="absolute inset-x-0 top-0 h-1 bg-gradient-gold" aria-hidden />
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-lg font-semibold">{model.name}</h3>
                {model.popular && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-primary/12 px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-primary">
                    <Star className="size-3" fill="currentColor" /> Most Popular
                  </span>
                )}
              </div>
              <p className="mt-3 text-sm font-medium text-sap">{model.bestFor}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {model.structure}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl navy-gradient px-8 py-14 text-center text-navy-foreground sm:px-14">
          <div className="absolute inset-0 surface-grid opacity-50" aria-hidden />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold sm:text-4xl">Not sure which model fits?</h2>
            <p className="mt-4 text-navy-foreground/70">
              Tell us what you&apos;re trying to solve — we&apos;ll recommend the right structure,
              not just the one we sell hardest.
            </p>
            <div className="mt-8 flex justify-center">
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
