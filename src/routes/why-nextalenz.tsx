import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { StatCounter } from "@/components/site/StatCounter";
import { Button } from "@/components/ui/button";
import { DIFFERENTIATORS, STATS } from "@/lib/site";

export const Route = createFileRoute("/why-nextalenz")({
  head: () => ({
    meta: [
      { title: "Why Nextalenz — Every Platform. One Partner." },
      {
        name: "description",
        content:
          "Platform-agnostic workforce technology expertise, one partner for people, technology and support, and a shortlist in as little as 72 hours.",
      },
      { property: "og:title", content: "Why Nextalenz" },
      {
        property: "og:description",
        content: "Six reasons businesses choose Nextalenz for workforce technology and talent.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WhyPage,
});

function WhyPage() {
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
            Why <span className="text-gradient-gold">Nextalenz</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-navy-foreground/75">
            Every platform. One partner. Here&apos;s what that means in practice.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DIFFERENTIATORS.map((item) => (
            <div key={item.title} className="card-premium hover:card-premium-hover p-7">
              <h2 className="font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border navy-gradient text-navy-foreground">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold tracking-tight text-gradient-gold sm:text-5xl">
                {stat.value}
              </div>
              <p className="mt-2 text-xs font-medium uppercase tracking-[0.12em] text-navy-foreground/60">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <Button asChild variant="hero" size="lg">
          <Link to="/contact">
            Start a Conversation <ArrowRight />
          </Link>
        </Button>
      </section>
    </>
  );
}
