import { createFileRoute } from "@tanstack/react-router";

import { GrcSubPage } from "@/components/site/GrcSubPage";

export const Route = createFileRoute("/grc-ai-governance/optro-ai-partnership")({
  head: () => ({
    meta: [
      { title: "Optro.ai Alliance Partnership | NexTalenz" },
      {
        name: "description",
        content:
          "NexTalenz is an Optro.ai Alliance Partner, delivering AI-powered governance, risk and compliance for enterprise clients.",
      },
      { property: "og:title", content: "Optro.ai Alliance Partnership | NexTalenz" },
      {
        property: "og:description",
        content: "Co-branded AI governance delivery through the NexTalenz + Optro.ai alliance.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <GrcSubPage
      eyebrow="Alliance Partnership"
      title="Optro.ai Partnership"
      body="NexTalenz is an Optro.ai Alliance Partner. The full co-branded overview is being finalised — in the meantime, explore the partner experience directly."
      externalLink={{
        label: "Visit partner-experience.optro.ai",
        href: "https://partner-experience.optro.ai",
      }}
    />
  ),
});
