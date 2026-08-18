import { Globe2 } from "lucide-react";

const BADGES = [
  { region: "APAC / ANZ", role: "Australia · New Zealand · Singapore · India · Philippines" },
  { region: "EMEA", role: "United Kingdom · Ireland · Germany · Netherlands · UAE" },
  { region: "Americas", role: "United States · Canada · Mexico" },
];

interface FootprintProps {
  headline?: string;
  body: string;
}

export function FootprintBadges({ headline, body }: FootprintProps) {
  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
      <div>
        {headline && <h2 className="text-3xl font-bold sm:text-4xl">{headline}</h2>}
        <p className="mt-4 text-muted-foreground">{body}</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        {BADGES.map((badge) => (
          <div key={badge.region} className="card-premium p-6 text-center">
            <Globe2 className="mx-auto size-5 text-sap" />
            <p className="mt-3 font-semibold">{badge.region}</p>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{badge.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
