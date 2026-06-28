import Link from "next/link";
import {
  ArrowUpRight,
  FileText,
  Sparkles,
  TrendingDown,
  TrendingUp,
} from "lucide-react";

import { cn } from "@/lib/utils";
import {
  account,
  activity,
  documents,
  sources,
  stats,
} from "@/lib/dashboard-data";

const statusStyles: Record<string, string> = {
  Synced: "bg-emerald-400/15 text-emerald-300 ring-emerald-400/25",
  Syncing: "bg-amber-400/15 text-amber-300 ring-amber-400/25",
  "Action needed": "bg-rose-400/15 text-rose-300 ring-rose-400/25",
};

export default function DashboardOverview() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-6">
      {/* header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-foreground">
            Good morning, {account.name.split(" ")[0]}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Here is what is happening across the {account.workspace} workspace.
          </p>
        </div>
        <button className="inline-flex h-10 items-center gap-2 self-start rounded-full bg-brand px-5 text-sm font-medium text-brand-foreground transition-transform hover:-translate-y-0.5 sm:self-auto">
          <Sparkles className="size-4" />
          Ask Nexus
        </button>
      </div>

      {/* stats */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="card-lift rounded-xl border border-border bg-card/50 p-5 hover:border-brand/30"
          >
            <p className="text-sm text-muted-foreground">{s.label}</p>
            <div className="mt-2 flex items-end justify-between gap-2">
              <span className="text-2xl font-semibold tracking-tight text-foreground tabular-nums">
                {s.value}
              </span>
              <span
                className={cn(
                  "inline-flex items-center gap-0.5 rounded-full px-1.5 py-0.5 text-[11px] font-medium",
                  s.trend === "up"
                    ? "bg-emerald-400/15 text-emerald-300"
                    : "bg-rose-400/15 text-rose-300",
                )}
              >
                {s.trend === "up" ? (
                  <TrendingUp className="size-3" />
                ) : (
                  <TrendingDown className="size-3" />
                )}
                {s.delta}
              </span>
            </div>
            <p className="mt-1 text-xs text-muted-foreground/70">{s.hint}</p>
          </div>
        ))}
      </div>

      {/* activity + sources */}
      <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
        {/* activity feed */}
        <section className="rounded-xl border border-border bg-card/50">
          <div className="flex items-center justify-between border-b border-border px-5 py-4">
            <h2 className="text-sm font-semibold text-foreground">
              Recent activity
            </h2>
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <span className="size-1.5 rounded-full bg-brand animate-pulse-soft" />
              Live
            </span>
          </div>
          <ul className="divide-y divide-border">
            {activity.map((a, i) => (
              <li key={i} className="flex items-start gap-3 px-5 py-3.5">
                <span
                  className={cn(
                    "mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-lg",
                    a.tint,
                  )}
                >
                  <a.icon className="size-4" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm text-foreground/90">
                    <span className="font-medium text-foreground">{a.who}</span>{" "}
                    {a.action}{" "}
                    <span className="text-muted-foreground">{a.target}</span>
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground/70">
                    {a.time}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* connected sources */}
        <section className="rounded-xl border border-border bg-card/50">
          <div className="flex items-center justify-between border-b border-border px-5 py-4">
            <h2 className="text-sm font-semibold text-foreground">
              Connected sources
            </h2>
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-0.5 text-xs text-brand transition-colors hover:text-violet-300"
            >
              Manage
              <ArrowUpRight className="size-3" />
            </Link>
          </div>
          <ul className="divide-y divide-border">
            {sources.map((s) => (
              <li
                key={s.name}
                className="flex items-center gap-3 px-5 py-3.5"
              >
                <span className="inline-flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white p-1.5 ring-1 ring-border">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s.src}
                    alt={`${s.name} logo`}
                    className="size-full object-contain"
                  />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-foreground/90">
                    {s.name}
                  </p>
                  <p className="text-xs text-muted-foreground/70">{s.docs}</p>
                </div>
                <span
                  className={cn(
                    "shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium ring-1 ring-inset",
                    statusStyles[s.status],
                  )}
                >
                  {s.status}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* recent documents */}
      <section className="rounded-xl border border-border bg-card/50">
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <h2 className="text-sm font-semibold text-foreground">
            Recently indexed
          </h2>
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-0.5 text-xs text-brand transition-colors hover:text-violet-300"
          >
            View library
            <ArrowUpRight className="size-3" />
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead className="text-[11px] uppercase tracking-wider text-muted-foreground/60">
              <tr className="border-b border-border">
                <th className="px-5 py-3 font-medium">Document</th>
                <th className="px-5 py-3 font-medium">Source</th>
                <th className="px-5 py-3 text-right font-medium">Chunks</th>
                <th className="px-5 py-3 text-right font-medium">Updated</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {documents.map((d) => (
                <tr key={d.title} className="transition-colors hover:bg-background/40">
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-2.5">
                      <FileText className="size-4 shrink-0 text-muted-foreground" />
                      <span className="font-medium text-foreground/90">
                        {d.title}
                      </span>
                    </div>
                  </td>
                  <td className="px-5 py-3.5 text-muted-foreground">
                    {d.source}
                  </td>
                  <td className="px-5 py-3.5 text-right tabular-nums text-muted-foreground">
                    {d.chunks}
                  </td>
                  <td className="px-5 py-3.5 text-right tabular-nums text-muted-foreground">
                    {d.updated}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
