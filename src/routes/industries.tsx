import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { INDUSTRIES } from "@/lib/site";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Serve | Nextalenz" },
      {
        name: "description",
        content:
          "We work across insurance, resources & energy, public sector, healthcare, retail, logistics, telco, higher education and tech.",
      },
      { property: "og:title", content: "Industries We Serve | Nextalenz" },
      {
        property: "og:description",
        content: "Workforce technology and talent expertise across nine major industries.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <>
      <section className="relative overflow-hidden navy-gradient text-navy-foreground">
        <div className="absolute inset-0 surface-grid opacity-60" aria-hidden />
        <div
          className="pointer-events-none absolute -right-24 -top-32 size-[520px] gold-glow opacity-70"
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h1 className="rise max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Industries We <span className="text-gradient-gold">Serve</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-navy-foreground/75">
            Every industry runs on people and the systems behind them. Here&apos;s where we work
            most.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((industry) => (
            <div key={industry} className="card-premium hover:card-premium-hover p-7">
              <div className="grid size-11 place-items-center rounded-lg bg-sap-soft text-sap">
                <Building2 className="size-5" />
              </div>
              <h2 className="mt-5 text-lg font-semibold">{industry}</h2>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button asChild variant="hero" size="lg">
            <Link to="/contact">
              Talk to Us <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
