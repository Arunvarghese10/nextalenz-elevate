import { createFileRoute } from "@tanstack/react-router";
import { Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/roadmap")({
  head: () => ({
    meta: [
      { title: "What's Next at NexTalenz" },
      {
        name: "description",
        content:
          "Digital Adoption and Global Delivery Expansion — the next capabilities entering the NexTalenz practice.",
      },
      { property: "og:title", content: "What's Next at NexTalenz" },
      {
        property: "og:description",
        content:
          "Digital Adoption & UX Enablement and expansion into Brunei and South East Asia.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RoadmapPage,
});

const cards = [
  {
    id: "digital-adoption",
    title: "Digital Adoption & UX Enablement",
    body: "Delivered via our WalkMe / DGTL partnership — helping teams actually adopt the ERP and enterprise systems we (or others) have implemented, not just go live on them.",
    badge: "In partner onboarding",
  },
  {
    id: "expansion",
    title: "Global Delivery Expansion: Brunei & South East Asia",
    body: "Extending delivery capability beyond our current Australia, India, and UAE footprint into Brunei and the wider SEA region — where GRC and AI governance regulatory scrutiny is accelerating fastest.",
    badge: "Planned expansion",
  },
];

function NotifyForm({ id }: { id: string }) {
  const [email, setEmail] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast.success("Thanks — we'll let you know when this launches.");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row">
      <Input
        id={`notify-${id}`}
        type="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="you@company.com"
        aria-label="Email address"
      />
      <Button type="submit" variant="hero">
        Notify me <Send />
      </Button>
    </form>
  );
}

function RoadmapPage() {
  return (
    <>
      <section className="relative overflow-hidden navy-gradient text-navy-foreground">
        <div className="absolute inset-0 surface-grid opacity-60" aria-hidden />
        <div className="pointer-events-none absolute -right-24 -top-32 size-[520px] gold-glow opacity-70" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/35 bg-navy-foreground/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gradient-gold">
            Coming Next
          </span>
          <h1 className="rise mt-6 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            What&apos;s next for <span className="text-gradient-gold">NexTalenz.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-navy-foreground/75">
            Two more capabilities are entering our practice — built and proven the same deliberate
            way everything above was, before we call them a pillar.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {cards.map((card) => (
            <article
              key={card.id}
              id={card.id}
              className="relative overflow-hidden card-premium scroll-mt-24 p-8"
            >
              <span className="absolute inset-x-0 top-0 h-1 bg-gradient-gold" aria-hidden />
              <span className="inline-flex rounded-full border border-primary/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-gradient-gold">
                {card.badge}
              </span>
              <h2 className="mt-4 text-xl font-semibold">{card.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{card.body}</p>
              <NotifyForm id={card.id} />
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
