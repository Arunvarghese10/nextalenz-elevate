import { createFileRoute } from "@tanstack/react-router";

import { GrcSubPage } from "@/components/site/GrcSubPage";

export const Route = createFileRoute("/grc-ai-governance/unified-ai-governance")({
  head: () => ({
    meta: [
      { title: "Unified AI Governance | NexTalenz GRC & AI Governance" },
      {
        name: "description",
        content:
          "Unified AI governance from NexTalenz and Optro.ai — an orchestration layer bridging enterprise AI stacks, risk policy frameworks, and human oversight.",
      },
      { property: "og:title", content: "Unified AI Governance | NexTalenz" },
      {
        property: "og:description",
        content:
          "An orchestration layer for enterprise AI stacks, risk policy, and human oversight.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <GrcSubPage
      eyebrow="GRC & AI Governance"
      title="Unified AI Governance"
      body="Establish an orchestration layer bridging enterprise AI stacks, risk policy frameworks, and human oversight. Detailed page content is being finalised — in the meantime, our team can walk you through scope, timelines and deliverables directly."
    />
  ),
});
