import { createFileRoute } from "@tanstack/react-router";

import { GrcSubPage } from "@/components/site/GrcSubPage";

export const Route = createFileRoute("/grc-ai-governance/predictive-cyber-risk")({
  head: () => ({
    meta: [
      { title: "Predictive Cyber Risk | NexTalenz GRC & AI Governance" },
      {
        name: "description",
        content:
          "Predictive cyber risk from NexTalenz and Optro.ai — harness predictive insights to detect vulnerabilities and accelerate risk mitigation before audits begin.",
      },
      { property: "og:title", content: "Predictive Cyber Risk | NexTalenz" },
      {
        property: "og:description",
        content:
          "Predictive vulnerability detection and accelerated risk mitigation, powered by Optro.ai.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <GrcSubPage
      eyebrow="GRC & AI Governance"
      title="Predictive Cyber Risk"
      body="Harness predictive insights to detect vulnerabilities and accelerate risk mitigation before audits begin. Detailed page content is being finalised — in the meantime, our team can walk you through scope, timelines and deliverables directly."
    />
  ),
});
