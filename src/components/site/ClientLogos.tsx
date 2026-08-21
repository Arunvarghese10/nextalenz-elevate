import { useState } from "react";

import { CLIENTS } from "@/lib/site";

const token = import.meta.env["VITE_LOVABLE_CONNECTOR_LOGO_DEV_API_KEY"] as string | undefined;

function ClientLogo({ name, domain }: { name: string; domain: string }) {
  const [failed, setFailed] = useState(false);
  const src = token
    ? `https://img.logo.dev/${domain}?token=${token}&size=160&format=png&retina=true`
    : undefined;

  return (
    <div className="card-premium flex h-24 items-center justify-center px-6 py-4 text-center">
      {src && !failed ? (
        <img
          src={src}
          alt={`${name} logo`}
          loading="lazy"
          className="max-h-10 w-auto max-w-[140px] object-contain"
          onError={() => setFailed(true)}
        />
      ) : (
        <span className="text-sm font-semibold tracking-tight text-foreground/80">{name}</span>
      )}
    </div>
  );
}

export function ClientLogos() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {CLIENTS.map((client) => (
        <ClientLogo key={client.name} name={client.name} domain={client.domain} />
      ))}
    </div>
  );
}
