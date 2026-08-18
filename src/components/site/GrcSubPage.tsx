import { Link } from "@tanstack/react-router";
import { ArrowRight, ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";

interface GrcSubPageProps {
  eyebrow: string;
  title: string;
  body: string;
  externalLink?: { label: string; href: string };
}

export function GrcSubPage({ eyebrow, title, body, externalLink }: GrcSubPageProps) {
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
            {eyebrow}
          </span>
          <h1 className="rise mt-6 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-navy-foreground/75">{body}</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="card-premium p-10 text-center">
          <p className="text-sm uppercase tracking-[0.16em] text-muted-foreground">
            Detailed page content coming soon
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild variant="grc" size="lg">
              <Link to="/contact" search={{ pillar: "grc" }}>
                Request a GRC Readiness Assessment <ArrowRight />
              </Link>
            </Button>
            {externalLink && (
              <Button asChild variant="outline" size="lg">
                <a href={externalLink.href} target="_blank" rel="noreferrer noopener">
                  {externalLink.label} <ExternalLink />
                </a>
              </Button>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
