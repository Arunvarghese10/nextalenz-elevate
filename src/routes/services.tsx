import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "What We Do — Services | Nextalenz" },
      {
        name: "description",
        content:
          "Staff augmentation, product engineering, consulting & transformation, and managed services for workforce technology.",
      },
      { property: "og:title", content: "What We Do — Services | Nextalenz" },
      {
        property: "og:description",
        content:
          "Four ways we help businesses manage their people and the technology behind them.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden navy-gradient text-navy-foreground">
        <div className="absolute inset-0 surface-grid opacity-60" aria-hidden />
        <div
          className="pointer-events-none absolute -right-24 -top-32 size-[520px] gold-glow opacity-70"
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/35 bg-navy-foreground/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gradient-gold">
            Services
          </span>
          <h1 className="rise mt-6 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            What We <span className="text-gradient-gold">Do</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-navy-foreground/75">
            Four ways we help businesses manage their people and the technology behind them.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {SERVICES.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className={`scroll-mt-24 py-16 ${index > 0 ? "border-t border-border" : ""}`}
          >
            <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gradient-gold">
                  0{index + 1}
                </span>
                <h2 className="mt-3 text-3xl font-bold">{service.title}</h2>
                <p className="mt-4 text-muted-foreground">{service.intro}</p>
              </div>
              <div className="grid gap-4">
                {service.points.map((point) => (
                  <div key={point.title} className="card-premium hover:card-premium-hover p-6">
                    <div className="flex items-start gap-3">
                      <Check className="mt-0.5 size-5 shrink-0 text-sap" />
                      <div>
                        <h3 className="font-semibold">{point.title}</h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                          {point.body}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="card-premium p-10 text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">Not sure which one you need?</h2>
          <p className="mt-3 text-muted-foreground">
            Tell us what you&apos;re trying to solve — we&apos;ll come back within 48 hours.
          </p>
          <div className="mt-7 flex justify-center">
            <Button asChild variant="hero" size="lg">
              <Link to="/contact">
                Contact Us <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
