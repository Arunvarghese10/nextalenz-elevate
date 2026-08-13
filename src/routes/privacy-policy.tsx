import { createFileRoute } from "@tanstack/react-router";

import { SITE } from "@/lib/site";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | NexTalenz" },
      {
        name: "description",
        content:
          "How NexTalenz Consulting collects, uses, stores and protects personal information for clients and candidates.",
      },
      { property: "og:title", content: "Privacy Policy | NexTalenz" },
      {
        property: "og:description",
        content: "NexTalenz privacy practices for client and candidate data.",
      },
    ],
  }),
  component: PrivacyPolicyPage,
});

const sections = [
  {
    title: "Information We Collect",
    body: "We collect information you provide directly — such as your name, email address, phone number, organization, resume and professional profile details — when you submit an enquiry or register with our talent network. We also collect limited technical data such as browser type and pages visited.",
  },
  {
    title: "How We Use Your Information",
    body: "Personal information is used to respond to enquiries, assess suitability for roles and engagements, present candidate profiles to clients with consent, and provide service updates. We do not sell personal information.",
  },
  {
    title: "Disclosure",
    body: "Candidate details are shared with prospective clients only with your consent. We may disclose information to service providers who support our operations, and where required by law.",
  },
  {
    title: "Data Storage & Security",
    body: "We apply reasonable technical and organizational safeguards to protect personal information against misuse, loss, unauthorized access, modification or disclosure. Data may be stored with reputable providers within Australia and other jurisdictions in our delivery network.",
  },
  {
    title: "Access, Correction & Retention",
    body: "You may request access to, correction of, or deletion of the personal information we hold about you. We retain candidate records only while relevant to current or foreseeable opportunities, unless a longer retention period is required by law.",
  },
  {
    title: "Cookies",
    body: "Our website may use cookies and similar technologies to understand site usage and improve the experience. You can control cookies through your browser settings.",
  },
  {
    title: "Contact",
    body: `For privacy enquiries, contact us at ${SITE.email} or write to ${SITE.address}.`,
  },
];

function PrivacyPolicyPage() {
  return (
    <>
      <section className="navy-gradient text-navy-foreground">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold sm:text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-navy-foreground/70">
            How we handle personal information across our SAP and GRC practices.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-10">
          {sections.map((section) => (
            <article key={section.title}>
              <h2 className="text-xl font-semibold">{section.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{section.body}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
