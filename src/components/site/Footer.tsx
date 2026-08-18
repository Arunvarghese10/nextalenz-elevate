import { Link } from "@tanstack/react-router";
import { MapPin, Mail, Clock, Phone } from "lucide-react";

import { SITE } from "@/lib/site";

const columns = [
  {
    title: "Enterprise Applications",
    links: [
      { label: "Contract & Permanent Placement", to: "/enterprise-applications" as const },
      { label: "SAP Talent Acquisition", to: "/enterprise-applications" as const },
      { label: "SAP Project Consulting", to: "/enterprise-applications" as const },
    ],
  },
  {
    title: "GRC & AI Governance",
    links: [
      { label: "AI Risk Assessment", to: "/grc-ai-governance/ai-risk-assessment" as const },
      {
        label: "Continuous Controls Monitoring",
        to: "/grc-ai-governance/continuous-controls-monitoring" as const,
      },
      { label: "Optro.ai Partnership", to: "/grc-ai-governance/optro-ai-partnership" as const },
    ],
  },
  {
    title: "Company & Legal",
    links: [
      { label: "About Us", to: "/about" as const },
      { label: "Careers", to: "/careers" as const },
      { label: "Coming Next →", to: "/roadmap" as const },
      { label: "Privacy Policy", to: "/privacy-policy" as const },
      { label: "Code of Conduct", to: "/code-of-conduct" as const },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative bg-navy text-navy-foreground">
      <div className="h-px w-full bg-gradient-gold" aria-hidden />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <Link to="/" className="text-xl font-extrabold tracking-[0.14em]">
            NEX<span className="text-sap">TALENZ</span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-navy-foreground/60">
            {SITE.name} pairs proven SAP talent and ERP delivery with Optro.ai-powered AI
            Governance, Risk &amp; Compliance.
          </p>
          <ul className="mt-5 space-y-2 text-sm text-navy-foreground/60">

            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-sap" />
              {SITE.address}
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 size-4 shrink-0 text-sap" />
              {SITE.email}
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 size-4 shrink-0 text-sap" />
              <span>
                {SITE.phone}
                <br />
                Toll Free: {SITE.tollFree}
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Clock className="mt-0.5 size-4 shrink-0 text-sap" />
              Replies {SITE.responseSla.toLowerCase()}
            </li>
          </ul>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-sap">
              {col.title}
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-navy-foreground/60 transition-colors hover:text-sap"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-navy-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-navy-foreground/45 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>{SITE.footprint}</p>
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
