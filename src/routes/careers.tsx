import { createFileRoute } from "@tanstack/react-router";
import { Globe2, Send, Sparkles, Users } from "lucide-react";
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

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers & Talent Network | NexTalenz" },
      {
        name: "description",
        content:
          "Join the NexTalenz global consultant network — SAP consultants, GRC advisors and AI specialists working on high-impact enterprise projects.",
      },
      { property: "og:title", content: "Careers & Talent Network | NexTalenz" },
      {
        property: "og:description",
        content:
          "Register your profile and get matched to enterprise SAP, GRC and AI governance engagements worldwide.",
      },
    ],
  }),
  component: CareersPage,
});

const domains = ["SAP", "GRC", "AI", "Other"];

const benefits = [
  {
    icon: Globe2,
    title: "Global Engagements",
    copy: "Enterprise programs across APAC, India and the Middle East.",
  },
  {
    icon: Users,
    title: "Consultant-Led Vetting",
    copy: "Screened by practitioners who understand your module depth.",
  },
  {
    icon: Sparkles,
    title: "Emerging Practice Access",
    copy: "Early access to AI governance and continuous compliance projects.",
  },
];

function CareersPage() {
  const [domain, setDomain] = useState("");
  const [fileName, setFileName] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!domain) {
      toast.error("Please select your primary domain.");
      return;
    }
    toast.success("Profile submitted. Our talent team will be in touch shortly.");
    event.currentTarget.reset();
    setDomain("");
    setFileName("");
  };

  return (
    <>
      <section className="relative overflow-hidden navy-gradient text-navy-foreground">
        <div className="absolute inset-0 surface-grid opacity-60" aria-hidden />
        <div className="pointer-events-none absolute -right-24 -top-32 size-[520px] gold-glow opacity-70" aria-hidden />
        <div className="pointer-events-none absolute -bottom-40 -left-24 size-[420px] gold-glow opacity-40" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/35 bg-navy-foreground/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gradient-gold">
            Talent Network
          </span>
          <h1 className="rise mt-5 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Join the NexTalenz Global Consultant Network
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-navy-foreground/75">
            We connect top-tier SAP consultants, GRC advisors, and AI specialists with high-impact
            enterprise projects worldwide.
          </p>
        </div>
      </section>

      <section className="border-b border-border bg-surface">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-14 sm:px-6 lg:grid-cols-3 lg:px-8">
          {benefits.map((benefit) => (
            <article key={benefit.title} className="rounded-xl border border-border bg-background p-6">
              <benefit.icon className="size-5 text-grc" />
              <h2 className="mt-4 font-semibold">{benefit.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{benefit.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
        <form
          onSubmit={handleSubmit}
          className="card-premium p-8 shadow-[var(--shadow-card)]"
        >
          <h2 className="text-2xl font-bold">Candidate Registration</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Open submissions — we review every profile against current and upcoming mandates.
          </p>

          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input id="fullName" name="fullName" required placeholder="Jane Doe" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" required placeholder="jane@email.com" />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="linkedin">LinkedIn Profile URL</Label>
              <Input
                id="linkedin"
                name="linkedin"
                type="url"
                placeholder="https://linkedin.com/in/..."
              />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="domain">Primary Domain</Label>
              <Select value={domain} onValueChange={setDomain}>
                <SelectTrigger id="domain">
                  <SelectValue placeholder="Select your primary domain" />
                </SelectTrigger>
                <SelectContent>
                  {domains.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="resume">Resume Upload (.pdf, .docx)</Label>
              <Input
                id="resume"
                name="resume"
                type="file"
                accept=".pdf,.docx"
                className="cursor-pointer file:mr-3 file:rounded file:border-0 file:bg-secondary file:px-3 file:py-1 file:text-sm"
                onChange={(event) => setFileName(event.target.files?.[0]?.name ?? "")}
              />
              {fileName && <p className="text-xs text-muted-foreground">Selected: {fileName}</p>}
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Availability, preferred locations, key modules or frameworks."
              />
            </div>
          </div>

          <Button type="submit" variant="hero" size="lg" className="mt-7 w-full sm:w-auto">
            Submit Profile <Send />
          </Button>
        </form>
      </section>
    </>
  );
}
