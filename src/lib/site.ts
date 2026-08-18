export const SITE = {
  name: "NexTalenz Consulting",
  tagline: "Enterprise Technology, Talent & Governance",
  address: "Brisbane, Australia",
  footprint: "Brisbane (HQ) · 14 global delivery countries across APAC, EMEA & the Americas",
  responseSla: "Within 1 business day",
  email: "sales@nextalenz.com",
  phone: "+61 721 436 778",
  tollFree: "1300-355-154",
  website: "nextalenz.com",
} as const;

export const STATS = [
  { value: "28+", label: "Companies scaled worldwide" },
  { value: "14", label: "Global delivery countries" },
  { value: "160+", label: "Specialized placements delivered" },
  { value: "96%", label: "Trailing 12-month client satisfaction" },
] as const;

export const TRUST_BAR =
  "28+ companies scaled worldwide · 14 global delivery countries · 160+ specialized placements delivered · 96% trailing 12-month client satisfaction";

export const NAV_LINKS = [
  { label: "Services", to: "/services" },
  { label: "How We Work", to: "/how-we-work" },
  { label: "About", to: "/about" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
] as const;
