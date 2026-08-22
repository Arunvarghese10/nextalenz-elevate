import { createFileRoute } from "@tanstack/react-router";
import { Clock, Globe, Mail, MapPin, Phone, Send } from "lucide-react";
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
      { title: "Contact Nextalenz — Talk to a Real Person" },
      {
        name: "description",
        content:
          "Tell us about your hiring need, workforce system project, or product build. We reply within 48 hours.",
      },
      { property: "og:title", content: "Contact Nextalenz — Talk to a Real Person" },
      {
        property: "og:description",
        content:
          "Tell us what you're trying to solve — we reply within 48 hours.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const OPTIONS = [
  { label: "Staff Augmentation", pillar: "talent" },
  { label: "Product Engineering & App Development", pillar: "engineering" },
  { label: "Consulting & Transformation", pillar: "consulting" },
  { label: "Managed Services & Outsourcing", pillar: "managed" },
  { label: "Something Else", pillar: "" },
] as const;

function ContactPage() {
  const [interest, setInterest] = useState("");

  const leadPillar = OPTIONS.find((option) => option.label === interest)?.pillar ?? "";

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!interest) {
      toast.error("Please tell us what you're looking for.");
      return;
    }
    toast.success("Enquiry received. A senior team member will reply within 48 hours.");
    event.currentTarget.reset();
    setInterest("");
  };

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
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h1 className="rise max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Ready to hire, build, or modernise?{" "}
            <span className="text-gradient-gold">Let&apos;s talk.</span>
          </h1>
          <ul className="mt-6 space-y-2 text-lg text-navy-foreground/75">
            <li>Talk to a partner, not a chatbot.</li>
            <li>A qualified shortlist in as little as 72 hours.</li>
            <li>We&apos;ll reply within 48 hours.</li>
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_1fr]">
          <form onSubmit={handleSubmit} className="card-premium p-8">
            <input type="hidden" name="lead_pillar" value={leadPillar} />
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input id="name" name="name" required placeholder="Jane Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Work Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="jane@company.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" name="company" required placeholder="Company name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" name="phone" type="tel" placeholder="+61 ..." />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="interest">What are you looking for?</Label>
                <Select value={interest} onValueChange={setInterest}>
                  <SelectTrigger id="interest">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    {OPTIONS.map((option) => (
                      <SelectItem key={option.label} value={option.label}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="message">Tell Us a Bit More</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Roles you need filled, systems you're moving to, or the product you want built."
                />
              </div>
            </div>
            <Button type="submit" variant="hero" size="lg" className="mt-7 w-full sm:w-auto">
              Send Enquiry <Send />
            </Button>
          </form>

          <div className="space-y-6">
            <div className="card-premium p-7">
              <h2 className="text-lg font-semibold">Replies within 48 hours.</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Every enquiry is read and responded to by a senior team member. No tickets. No
                queues.
              </p>
            </div>

            <div className="card-premium p-7">
              <h2 className="text-lg font-semibold">Contact details</h2>
              <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <Mail className="mt-0.5 size-4 shrink-0 text-sap" />
                  {SITE.email}
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 size-4 shrink-0 text-sap" />
                  <span>
                    {SITE.phone}
                    <br />
                    Toll Free: {SITE.tollFree}
                  </span>
                </li>
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-sap" />
                  Headquarters: {SITE.address}
                </li>
                <li className="flex gap-3">
                  <Globe className="mt-0.5 size-4 shrink-0 text-sap" />
                  {SITE.website}
                </li>
                <li className="flex gap-3">
                  <Clock className="mt-0.5 size-4 shrink-0 text-sap" />
                  Replies {SITE.responseSla.toLowerCase()}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p className="mt-14 text-center text-sm text-muted-foreground">
          Every Platform. One Partner.
        </p>
      </section>
    </>
  );
}
