import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/enterprise-applications")({
  beforeLoad: () => {
    throw redirect({ to: "/services", hash: "hct-modern-erp" });
  },
});
