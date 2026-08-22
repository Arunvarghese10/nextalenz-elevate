import { Link } from "@tanstack/react-router";
import { MapPin, Mail, Clock, Phone } from "lucide-react";

import { SITE } from "@/lib/site";

const columns = [
  {
    title: "Services",
    links: [
      { label: "Staff Augmentation", to: "/services" as const, hash: "staff-augmentation" },
      { label: "Product Engineering", to: "/services" as const, hash: "product-engineering" },
      { label: "Consulting & Transformation", to: "/services" as const, hash: "consulting" },
      { label: "Managed Services", to: "/services" as const, hash: "managed-services" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "Industries", to: "/industries" as const },
      { label: "Why Nextalenz", to: "/why-nextalenz" as const },
      { label: "How We Work", to: "/how-we-work" as const },
      { label: "Contact", to: "/contact" as const },
    ],
  },
  {
    title: "Company & Legal",
    links: [
      { label: "About Us", to: "/about" as const },
      { label: "Privacy Policy", to: "/privacy-policy" as const },
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
            {SITE.name} helps global enterprises modernize core ERP systems, scale engineering
            teams, and automate AI-powered risk and compliance.
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
            <h3 className="text-sm font-semibold uppercase tracking-wider text-sap">{col.title}</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    {...("hash" in link ? { hash: link.hash } : {})}
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
