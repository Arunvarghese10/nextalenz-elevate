import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact NexTalenz | Enterprise Enquiries" },
      {
        name: "description",
        content:
          "Talk to NexTalenz about SAP staffing, GRC & AI governance, or project consulting. Southport, Queensland based, responding within 24 hours.",
      },
      { property: "og:title", content: "Contact NexTalenz | Enterprise Enquiries" },
      {
        property: "og:description",
        content: "Share your brief and receive a verified shortlist within 14 days.",
      },
    ],
  }),
  component: ContactPage,
});

const pillarOptions = [
  "SAP & Enterprise Apps Staffing",
  "GRC & AI Governance Solutions",
  "Consulting / Project Engagement",
  "Careers / Join Talent Network",
];

const timeline = [
  { step: "Day 1", title: "24h Initial Response & Discovery Call" },
  { step: "Days 2–3", title: "Scope Definition & Capability Mapping" },
  { step: "Days 4–10", title: "Targeted Candidate / Capability Search" },
  { step: "Day 14", title: "Verified Shortlist Presentation" },
];

function ContactPage() {
  const [pillar, setPillar] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!pillar) {
      toast.error("Please select a preferred pillar.");
      return;
    }
    toast.success("Enquiry received. Our team will respond within 24 hours.");
    event.currentTarget.reset();
    setPillar("");
  };

  return (
    <>
      <section className="relative overflow-hidden navy-gradient text-navy-foreground">
        <div className="absolute inset-0 surface-grid opacity-60" aria-hidden />
        <div className="pointer-events-none absolute -right-24 -top-32 size-[520px] gold-glow opacity-70" aria-hidden />
        <div className="pointer-events-none absolute -bottom-40 -left-24 size-[420px] gold-glow opacity-40" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Let&apos;s scope your next enterprise engagement
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-navy-foreground/75">
            Share your requirement and our practice leads will respond {SITE.responseSla.toLowerCase()}.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_1fr]">
          <form
            onSubmit={handleSubmit}
            className="card-premium p-8 shadow-[var(--shadow-card)]"
          >
            <h2 className="text-2xl font-bold">Enquiry Form</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" required placeholder="Jane Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="jane@company.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="organization">Organization</Label>
                <Input id="organization" name="organization" required placeholder="Company name" />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="pillar">Preferred Pillar</Label>
                <Select value={pillar} onValueChange={setPillar}>
                  <SelectTrigger id="pillar">
                    <SelectValue placeholder="Select an area of interest" />
                  </SelectTrigger>
                  <SelectContent>
                    {pillarOptions.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us about the roles, program, or compliance challenge."
                />
              </div>
            </div>
            <Button type="submit" variant="hero" size="lg" className="mt-7 w-full sm:w-auto">
              Send Enquiry <Send />
            </Button>
          </form>

          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-7">
              <h2 className="text-lg font-semibold">Contact Details</h2>
              <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-sap" />
                  {SITE.address}
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 size-4 shrink-0 text-sap" />
                  {SITE.email}
                </li>
                <li className="flex gap-3">
                  <Clock className="mt-0.5 size-4 shrink-0 text-sap" />
                  Response SLA: {SITE.responseSla}
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-card p-7">
              <h2 className="text-lg font-semibold">{SITE.sla}</h2>
              <ol className="mt-6 space-y-6">
                {timeline.map((item, index) => (
                  <li key={item.step} className="relative flex gap-4">
                    {index < timeline.length - 1 && (
                      <span
                        className="absolute left-[13px] top-8 h-full w-px bg-border"
                        aria-hidden
                      />
                    )}
                    <span className="z-10 grid size-7 shrink-0 place-items-center rounded-full bg-sap text-xs font-bold text-sap-foreground">
                      {index + 1}
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-sap">
                        {item.step}
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">{item.title}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
