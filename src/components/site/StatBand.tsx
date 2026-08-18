import { STATS } from "@/lib/site";

interface StatBandProps {
  originLine?: string;
}

export function StatBand({ originLine }: StatBandProps) {
  return (
    <section className="relative bg-navy text-navy-foreground">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-gold opacity-70" aria-hidden />
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        {originLine && <p className="text-center text-sm text-navy-foreground/60">{originLine}</p>}
        <div className="mt-8 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold tracking-tight text-gradient-gold sm:text-5xl">
                {stat.value}
              </div>
              <p className="mt-2 text-xs font-medium uppercase tracking-[0.12em] text-navy-foreground/60">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
