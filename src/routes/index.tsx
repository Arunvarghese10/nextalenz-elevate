import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Blocks, Briefcase, Layers, Settings2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { StatBand } from "@/components/site/StatBand";
import { ClientLogos } from "@/components/site/ClientLogos";
import { SERVICES } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nextalenz — Every Platform. One Partner." },
      {
        name: "description",
        content:
          "Nextalenz helps companies find the right people and build the right technology for how they manage their workforce — whatever systems they use.",
      },
      { property: "og:title", content: "Nextalenz — Every Platform. One Partner." },
      {
        property: "og:description",
        content:
          "Talent, product engineering, consulting and managed services for workforce technology.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const icons = [Briefcase, Blocks, Settings2, Layers];

function Home() {
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
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/35 bg-navy-foreground/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gradient-gold">
              Australian-owned · Founded 2024
            </span>
            <h1 className="rise mt-6 text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl">
              Every Platform. <span className="text-gradient-gold">One Partner.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-foreground/75">
              Nextalenz helps companies find the right people and build the right technology for how
              they manage their workforce — no matter which systems they use.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">
                  Talk to Us <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="onNavy" size="xl">
                <Link to="/services">See Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gradient-gold">
          Who We Are
        </span>
        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
          An Australian company built around people and the systems they work in.
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          Nextalenz is an Australian, home-grown company founded in 2024. We started out helping
          businesses hire SAP specialists. Today, we&apos;ve grown into a complete partner for
          workforce technology and talent — covering everything from finding the right people, to
          building the software that supports them, to running the systems that keep a
          business&apos;s workforce running smoothly.
        </p>
        <Link
          to="/about"
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-sap"
        >
          Learn more about us <ArrowRight className="size-4" />
        </Link>
      </section>

      {/* How We Can Help */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">
            How We Can <span className="text-gradient-gold">Help</span>
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {SERVICES.map((service, index) => {
              const Icon = icons[index] ?? Briefcase;
              return (
                <article
                  key={service.id}
                  className="relative overflow-hidden card-premium hover:card-premium-hover p-8"
                >
                  <span className="absolute inset-x-0 top-0 h-1 bg-gradient-gold" aria-hidden />
                  <div className="grid size-11 place-items-center rounded-lg bg-sap-soft text-sap">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {service.teaser}
                  </p>
                  <Link
                    to="/services"
                    hash={service.id}
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-sap"
                  >
                    Learn more <ArrowRight className="size-4" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* By the numbers */}
      <StatBand originLine="Trusted by Businesses Like Yours" />

      {/* Clients */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Some of the Companies We&apos;ve Worked With
        </h2>
        <p className="mt-3 text-sm text-muted-foreground">
          A selection of the businesses we&apos;ve supported — with more added all the time.
        </p>
        <div className="mt-10">
          <ClientLogos />
        </div>
        <p className="mt-8 text-sm text-muted-foreground">...and 28 companies and counting.</p>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl navy-gradient px-8 py-16 text-center text-navy-foreground sm:px-14">
          <div className="absolute inset-0 surface-grid opacity-50" aria-hidden />
          <div
            className="pointer-events-none absolute -right-24 -top-32 size-[420px] gold-glow opacity-50"
            aria-hidden
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold sm:text-4xl">Ready to talk?</h2>
            <p className="mt-4 text-navy-foreground/70">
              Tell us what you need — we&apos;ll get back to you with a clear plan within 48 hours.
            </p>
            <div className="mt-8 flex justify-center">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">
                  Contact Us <ArrowRight />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
