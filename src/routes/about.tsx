import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Eye, Globe2, Handshake, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { COUNTRIES, DIFFERENTIATORS } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Nextalenz — Workforce Technology & Talent Partner" },
      {
        name: "description",
        content:
          "Founded in 2024 in Southport, Queensland, Nextalenz is an Australian partner for workforce technology, talent, consulting and managed services.",
      },
      { property: "og:title", content: "About Nextalenz" },
      {
        property: "og:description",
        content: "An Australian company built around people and the systems they work in.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const PROMISES = [
  {
    icon: ShieldCheck,
    title: "Trust",
    body: "We handle your information with complete confidentiality.",
  },
  { icon: Eye, title: "Transparency", body: "You're kept in the loop at every stage." },
  { icon: Handshake, title: "Commitment", body: "We deliver on time, every time." },
];

function AboutPage() {
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
            About <span className="text-gradient-gold">Nextalenz</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-navy-foreground/75">
            An Australian company built around people and the systems they work in.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gradient-gold">
          Our Story
        </span>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          Nextalenz was founded in 2024 in Southport, Queensland. We started as a specialist
          recruiter for SAP roles. Since then, we&apos;ve grown into a full partner for workforce
          technology — helping businesses hire the right people, build the right tools, set up the
          right systems, and keep everything running. We now work across every major workforce
          platform, not just one.
        </p>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Our <span className="text-gradient-gold">Promise</span>
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {PROMISES.map((item) => (
              <div key={item.title} className="card-premium hover:card-premium-hover p-8">
                <div className="grid size-11 place-items-center rounded-lg bg-sap-soft text-sap">
                  <item.icon className="size-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold sm:text-4xl">Why Businesses Choose Us</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DIFFERENTIATORS.map((item) => (
            <div key={item.title} className="card-premium hover:card-premium-hover p-7">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">Where We Work</h2>
              <p className="mt-4 text-muted-foreground">
                We&apos;re headquartered in Australia, with teams delivering work in:
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {COUNTRIES.map((country) => (
                <div key={country} className="card-premium p-6 text-center">
                  <Globe2 className="mx-auto size-5 text-sap" />
                  <p className="mt-3 font-semibold">{country}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <Button asChild variant="hero" size="lg">
          <Link to="/contact">
            Contact Us <ArrowRight />
          </Link>
        </Button>
      </section>
    </>
  );
}
