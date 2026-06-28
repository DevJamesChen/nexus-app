"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Library,
  LineChart,
  Plug,
  Settings,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";

type Item = {
  label: string;
  href: string;
  icon: LucideIcon;
  soon?: boolean;
};

const groups: { title: string; items: Item[] }[] = [
  {
    title: "Workspace",
    items: [
      { label: "Overview", href: "/dashboard", icon: LayoutDashboard },
      { label: "Library", href: "/dashboard", icon: Library, soon: true },
      { label: "Insights", href: "/dashboard", icon: LineChart, soon: true },
    ],
  },
  {
    title: "Manage",
    items: [
      { label: "Integrations", href: "/dashboard", icon: Plug, soon: true },
      { label: "Settings", href: "/dashboard/settings", icon: Settings },
    ],
  },
];

export function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  return (
    <div className="flex h-full w-64 flex-col border-r border-sidebar-border bg-sidebar">
      <div className="flex h-16 items-center border-b border-sidebar-border px-5">
        <Logo href="/dashboard" />
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-5">
        {groups.map((group) => (
          <div key={group.title} className="mb-6">
            <p className="px-3 pb-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground/60">
              {group.title}
            </p>
            <ul className="flex flex-col gap-0.5">
              {group.items.map((item) => {
                const active = !item.soon && pathname === item.href;
                if (item.soon) {
                  return (
                    <li key={item.label}>
                      <span className="flex cursor-default items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground/60">
                        <item.icon className="size-4" />
                        {item.label}
                        <span className="ml-auto rounded-full border border-border px-1.5 py-0.5 text-[9px] font-medium uppercase tracking-wide">
                          Soon
                        </span>
                      </span>
                    </li>
                  );
                }
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={onNavigate}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                        active
                          ? "bg-brand/15 font-medium text-foreground ring-1 ring-brand/25"
                          : "text-muted-foreground hover:bg-sidebar-accent hover:text-foreground",
                      )}
                    >
                      <item.icon className="size-4" />
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      <div className="border-t border-sidebar-border p-3">
        <div className="rounded-xl border border-brand/25 bg-brand/[0.06] p-4">
          <div className="flex items-center gap-2 text-sm font-medium text-foreground">
            <Sparkles className="size-4 text-brand" />
            Upgrade to Business
          </div>
          <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
            Unlock SSO, audit logs, and unlimited history for your whole org.
          </p>
          <Link
            href="/sign-up?plan=enterprise"
            onClick={onNavigate}
            className="mt-3 inline-flex h-8 w-full items-center justify-center rounded-lg bg-brand text-xs font-medium text-brand-foreground transition-transform hover:-translate-y-0.5"
          >
            View plans
          </Link>
        </div>
      </div>
    </div>
  );
}
