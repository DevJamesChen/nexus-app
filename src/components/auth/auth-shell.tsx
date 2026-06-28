import { Check } from "lucide-react";

import { Logo } from "@/components/logo";

const brandPoints = [
  "Search every tool from one place",
  "Answers that cite their sources",
  "Permission-aware by default",
];

export function AuthShell({
  title,
  subtitle,
  children,
  footer,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  footer: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-background lg:flex-row">
      {/* Brand panel */}
      <aside className="relative isolate hidden overflow-hidden border-r border-border lg:flex lg:w-1/2 lg:flex-col lg:justify-between lg:p-12">
        <div
          className="pointer-events-none absolute inset-0 -z-30"
          style={{
            backgroundImage:
              "linear-gradient(155deg, oklch(0.22 0.06 285) 0%, oklch(0.18 0.03 300) 45%, oklch(0.15 0.012 285) 100%)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 -z-20"
          style={{
            backgroundImage:
              "linear-gradient(to right, oklch(1 0 0 / 5%) 1px, transparent 1px), linear-gradient(to bottom, oklch(1 0 0 / 5%) 1px, transparent 1px)",
            backgroundSize: "54px 54px",
            maskImage:
              "radial-gradient(130% 95% at 28% 22%, #000 32%, transparent 78%)",
            WebkitMaskImage:
              "radial-gradient(130% 95% at 28% 22%, #000 32%, transparent 78%)",
          }}
        />
        <div
          className="animate-float-slow pointer-events-none absolute -left-20 top-8 -z-10 size-80 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, color-mix(in oklch, var(--brand) 34%, transparent), transparent)",
          }}
        />
        <div
          className="pointer-events-none absolute -right-24 bottom-4 -z-10 size-72 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, oklch(0.68 0.15 330 / 0.22), transparent)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            backgroundImage:
              "radial-gradient(120% 120% at 50% 40%, transparent 55%, oklch(0 0 0 / 35%) 100%)",
          }}
        />

        <Logo href="/" />

        <div className="max-w-md">
          <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-gradient">
            One searchable brain for your whole team.
          </h2>
          <ul className="mt-8 flex flex-col gap-4">
            {brandPoints.map((p) => (
              <li
                key={p}
                className="flex items-start gap-3 text-sm text-foreground/85"
              >
                <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand">
                  <Check className="size-3.5" />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>

        <figure className="max-w-md">
          <blockquote className="text-sm leading-relaxed text-foreground/80">
            &ldquo;Onboarding used to mean pinging six people on Slack. Now new
            hires just ask Nexus and get the answer with a link to the
            source.&rdquo;
          </blockquote>
          <figcaption className="mt-3 text-xs text-muted-foreground">
            Maya Chen · Head of People, Driftwave
          </figcaption>
        </figure>
      </aside>

      {/* Form panel */}
      <main className="flex w-full flex-1 flex-col items-center justify-center px-6 py-12">
        <div className="w-full max-w-sm">
          <div className="mb-8 lg:hidden">
            <Logo href="/" />
          </div>

          <h1 className="text-2xl font-semibold tracking-tight text-foreground">
            {title}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>

          <div className="mt-8">{children}</div>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            {footer}
          </p>
        </div>
      </main>
    </div>
  );
}
