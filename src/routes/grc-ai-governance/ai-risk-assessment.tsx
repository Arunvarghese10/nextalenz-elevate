import { createFileRoute } from "@tanstack/react-router";

import { GrcSubPage } from "@/components/site/GrcSubPage";

export const Route = createFileRoute("/grc-ai-governance/ai-risk-assessment")({
  head: () => ({
    meta: [
      { title: "AI Risk Assessment | NexTalenz GRC & AI Governance" },
      {
        name: "description",
        content:
          "AI risk assessment from NexTalenz and Optro.ai — model inventory, exposure mapping and regulator-ready evidence. Detailed page content coming soon.",
      },
      { property: "og:title", content: "AI Risk Assessment | NexTalenz" },
      {
        property: "og:description",
        content: "AI risk assessment powered by the NexTalenz + Optro.ai alliance.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <GrcSubPage
      eyebrow="GRC & AI Governance"
      title="AI Risk Assessment"
      body="Detailed service content for this capability is being finalised. In the meantime, our team can walk you through scope, timelines and deliverables directly."
    />
  ),
});
