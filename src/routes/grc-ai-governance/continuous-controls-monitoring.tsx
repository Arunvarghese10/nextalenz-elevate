import { createFileRoute } from "@tanstack/react-router";

import { GrcSubPage } from "@/components/site/GrcSubPage";

export const Route = createFileRoute("/grc-ai-governance/continuous-controls-monitoring")({
  head: () => ({
    meta: [
      { title: "Continuous Controls Monitoring | NexTalenz GRC & AI Governance" },
      {
        name: "description",
        content:
          "Continuous controls monitoring from NexTalenz and Optro.ai — deploy AI-driven recommendations and pre-built templates to automate control verification.",
      },
      { property: "og:title", content: "Continuous Controls Monitoring | NexTalenz" },
      {
        property: "og:description",
        content: "Always-on control testing and evidence collection, powered by Optro.ai.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <GrcSubPage
      eyebrow="GRC & AI Governance"
      title="Continuous Controls Monitoring"
      body="Deploy AI-driven recommendations and pre-built templates to automate control verification. Detailed page content is being finalised — in the meantime, our team can walk you through scope, timelines and deliverables directly."
    />
  ),
});
