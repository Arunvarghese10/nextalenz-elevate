import { createFileRoute } from "@tanstack/react-router";

import { SITE } from "@/lib/site";

export const Route = createFileRoute("/code-of-conduct")({
  head: () => ({
    meta: [
      { title: "Code of Conduct | NexTalenz" },
      {
        name: "description",
        content:
          "The professional, ethical and compliance standards NexTalenz Consulting upholds with clients, candidates and consultants.",
      },
      { property: "og:title", content: "Code of Conduct | NexTalenz" },
      {
        property: "og:description",
        content: "Our standards for integrity, fairness, confidentiality and compliance.",
      },
    ],
  }),
  component: CodeOfConductPage,
});

const sections = [
  {
    title: "Integrity & Honesty",
    body: "We represent roles, rates and candidate capability accurately. We never misstate experience, availability or credentials to win an engagement.",
  },
  {
    title: "Fairness & Non-Discrimination",
    body: "Selection decisions are based on capability and fit. We do not discriminate on the basis of gender, age, ethnicity, religion, disability, sexual orientation or any other protected attribute.",
  },
  {
    title: "Confidentiality",
    body: "Client program details and candidate information are treated as confidential and shared only with explicit consent or where legally required.",
  },
  {
    title: "Compliance & Right to Work",
    body: "We verify right-to-work status, contracting arrangements and applicable employment obligations in every jurisdiction we operate in.",
  },
  {
    title: "Conflicts of Interest",
    body: "Actual or perceived conflicts are disclosed promptly and managed transparently with all affected parties.",
  },
  {
    title: "Responsible Technology & AI Use",
    body: "Where AI tools support sourcing or assessment, they operate under human oversight, documented controls and our AI governance framework. Automated systems never make final hiring decisions alone.",
  },
  {
    title: "Raising Concerns",
    body: `Clients, candidates and consultants can raise concerns confidentially at ${SITE.email}. Reports are investigated without retaliation.`,
  },
];

function CodeOfConductPage() {
  return (
    <>
      <section className="navy-gradient text-navy-foreground">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold sm:text-5xl">Code of Conduct</h1>
          <p className="mt-4 text-navy-foreground/70">
            The standards we hold ourselves to across every engagement.
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
