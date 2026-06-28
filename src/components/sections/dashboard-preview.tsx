import {
  LayoutDashboard,
  Library,
  LineChart,
  Plug,
  Search,
  Settings,
  Sparkles,
  TrendingDown,
  TrendingUp,
} from "lucide-react";

import { LogoMark } from "@/components/logo";
import { cn } from "@/lib/utils";
import { activity, sources, stats } from "@/lib/dashboard-data";

const nav = [
  { label: "Overview", icon: LayoutDashboard, active: true },
  { label: "Library", icon: Library, active: false },
  { label: "Insights", icon: LineChart, active: false },
  { label: "Integrations", icon: Plug, active: false },
  { label: "Settings", icon: Settings, active: false },
];

const statusDot: Record<string, string> = {
  Synced: "bg-emerald-400",
  Syncing: "bg-amber-400",
  "Action needed": "bg-rose-400",
};

export function DashboardPreview() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute -inset-x-10 -top-10 bottom-0 -z-10 bg-[radial-gradient(40rem_20rem_at_50%_0%,color-mix(in_oklch,var(--brand)_18%,transparent),transparent)]" />

      <div className="overflow-hidden rounded-xl border border-border bg-card/80 shadow-2xl shadow-black/40 ring-1 ring-white/5 backdrop-blur">
        {/* window chrome */}
        <div className="flex items-center gap-4 border-b border-border bg-background/40 px-4 py-2.5">
          <div className="flex gap-1.5">
            <span className="size-3 rounded-full bg-red-400/70" />
            <span className="size-3 rounded-full bg-amber-400/70" />
            <span className="size-3 rounded-full bg-emerald-400/70" />
          </div>
          <span className="font-mono text-xs text-muted-foreground">
            nexus.app/dashboard
          </span>
          <div className="ml-auto size-6 rounded-full bg-gradient-to-br from-brand/60 to-violet-300/40" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-[164px_1fr]">
          {/* sidebar */}
          <aside className="hidden flex-col border-r border-border bg-background/30 p-3 sm:flex">
            <div className="flex items-center gap-2 px-2 pb-4">
              <LogoMark className="size-6" />
              <span className="text-[13px] font-semibold tracking-tight">
                Nexus
              </span>
            </div>
            <nav className="flex flex-col gap-0.5">
              {nav.map((n) => (
                <div
                  key={n.label}
                  className={cn(
                    "flex items-center gap-2.5 rounded-md px-2 py-1.5 text-[12px]",
                    n.active
                      ? "bg-brand/15 font-medium text-foreground ring-1 ring-brand/25"
                      : "text-muted-foreground",
                  )}
                >
                  <n.icon className="size-3.5" />
                  {n.label}
                </div>
              ))}
            </nav>
            <div className="mt-auto rounded-lg border border-brand/25 bg-brand/[0.06] p-3">
              <div className="flex items-center gap-1.5 text-[11px] font-medium text-foreground">
                <Sparkles className="size-3 text-brand" />
                Upgrade
              </div>
              <p className="mt-1 text-[10px] leading-snug text-muted-foreground">
                SSO, audit logs, and more.
              </p>
            </div>
          </aside>

          {/* main */}
          <div className="min-w-0 p-4">
            {/* topbar */}
            <div className="mb-4 flex items-center gap-3">
              <div className="flex w-full max-w-xs items-center gap-2 rounded-lg border border-border bg-background/60 px-2.5 py-1.5 text-[11px] text-muted-foreground">
                <Search className="size-3.5" />
                Ask Nexus or search your workspace…
              </div>
              <span className="ml-auto inline-flex size-7 items-center justify-center rounded-full bg-gradient-to-br from-brand/70 to-violet-300/40 text-[10px] font-semibold text-background">
                AL
              </span>
            </div>

            <p className="text-sm font-semibold text-foreground">
              Good morning, Ada
            </p>
            <p className="mb-3 text-[11px] text-muted-foreground">
              Here is what is happening across Driftwave.
            </p>

            {/* stats */}
            <div className="grid grid-cols-2 gap-2.5 lg:grid-cols-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-lg border border-border bg-background/40 p-3"
                >
                  <p className="truncate text-[10px] text-muted-foreground">
                    {s.label}
                  </p>
                  <div className="mt-1 flex items-end justify-between gap-1">
                    <span className="text-base font-semibold tabular-nums text-foreground">
                      {s.value}
                    </span>
                    <span
                      className={cn(
                        "inline-flex items-center gap-0.5 rounded-full px-1 py-0.5 text-[9px] font-medium",
                        s.trend === "up"
                          ? "bg-emerald-400/15 text-emerald-300"
                          : "bg-rose-400/15 text-rose-300",
                      )}
                    >
                      {s.trend === "up" ? (
                        <TrendingUp className="size-2.5" />
                      ) : (
                        <TrendingDown className="size-2.5" />
                      )}
                      {s.delta}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* activity + sources */}
            <div className="mt-3 grid gap-3 lg:grid-cols-[1.5fr_1fr]">
              <div className="rounded-lg border border-border bg-background/40">
                <div className="flex items-center justify-between border-b border-border px-3 py-2">
                  <span className="text-[11px] font-semibold text-foreground">
                    Recent activity
                  </span>
                  <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
                    <span className="size-1.5 rounded-full bg-brand animate-pulse-soft" />
                    Live
                  </span>
                </div>
                <ul className="divide-y divide-border">
                  {activity.slice(0, 4).map((a, i) => (
                    <li key={i} className="flex items-start gap-2 px-3 py-2">
                      <span
                        className={cn(
                          "mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-md",
                          a.tint,
                        )}
                      >
                        <a.icon className="size-3" />
                      </span>
                      <p className="text-[11px] leading-snug text-foreground/85">
                        <span className="font-medium text-foreground">
                          {a.who}
                        </span>{" "}
                        {a.action}{" "}
                        <span className="text-muted-foreground">{a.target}</span>
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg border border-border bg-background/40">
                <div className="border-b border-border px-3 py-2 text-[11px] font-semibold text-foreground">
                  Connected sources
                </div>
                <ul className="divide-y divide-border">
                  {sources.slice(0, 4).map((s) => (
                    <li
                      key={s.name}
                      className="flex items-center gap-2 px-3 py-2"
                    >
                      <span className="inline-flex size-6 shrink-0 items-center justify-center overflow-hidden rounded-md bg-white p-1 ring-1 ring-border">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={s.src}
                          alt={`${s.name} logo`}
                          className="size-full object-contain"
                        />
                      </span>
                      <span className="flex-1 truncate text-[11px] font-medium text-foreground/85">
                        {s.name}
                      </span>
                      <span
                        className={cn(
                          "size-1.5 shrink-0 rounded-full",
                          statusDot[s.status],
                        )}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
