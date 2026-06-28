import Link from "next/link";
import { Check } from "lucide-react";

import { Container, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/reveal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Free",
    price: "$0",
    cadence: "/user / month",
    description: "For individuals and small teams getting started.",
    cta: "Start free",
    href: "/sign-up?plan=free",
    variant: "outline" as const,
    featured: false,
    features: [
      "Up to 5 users",
      "3 connected sources",
      "200 questions / month",
      "7-day activity history",
      "Community support",
    ],
  },
  {
    name: "Team",
    price: "$10",
    cadence: "/user / month",
    description: "For growing teams that live in their tools.",
    cta: "Start 14-day trial",
    href: "/sign-up?plan=team",
    variant: "default" as const,
    featured: true,
    features: [
      "Unlimited users",
      "Unlimited sources",
      "Unlimited questions",
      "Slack & browser apps",
      "Permission sync",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "",
    description: "For organizations with security and scale needs.",
    cta: "Contact sales",
    href: "mailto:sales@nexus.app?subject=Nexus%20Enterprise",
    variant: "outline" as const,
    featured: false,
    features: [
      "SSO / SAML & SCIM",
      "Audit logs & data residency",
      "Custom data retention",
      "99.9% uptime SLA",
      "Dedicated success manager",
      "Self-hosted option",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-background py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Pricing"
          title="Simple pricing that scales with you."
          description="Start free, upgrade when your team feels it. No per-question metering games on paid plans."
        />

        <Reveal className="reveal-children mt-14 grid items-start gap-6 lg:grid-cols-3">
          {tiers.map((tier) => {
            const Cta = tier.href.startsWith("/") ? Link : "a";
            return (
              <div
                key={tier.name}
                className={cn(
                  "card-lift relative flex flex-col rounded-2xl border p-7",
                  tier.featured
                    ? "border-brand/40 bg-brand/[0.04] brand-glow lg:-mt-4 lg:mb-4"
                    : "border-border bg-card/40 hover:border-brand/30",
                )}
              >
                {tier.featured ? (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-brand-foreground">
                    Most popular
                  </span>
                ) : null}

                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  {tier.name}
                </h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-semibold tracking-tight text-foreground">
                    {tier.price}
                  </span>
                  {tier.cadence ? (
                    <span className="text-sm text-muted-foreground">
                      {tier.cadence}
                    </span>
                  ) : null}
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  {tier.description}
                </p>

                <Cta
                  href={tier.href}
                  className={cn(
                    buttonVariants({ variant: tier.variant }),
                    "mt-6 h-10 rounded-full transition-transform hover:-translate-y-0.5",
                  )}
                >
                  {tier.cta}
                </Cta>

                <ul className="mt-7 flex flex-col gap-3 border-t border-border pt-6">
                  {tier.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 text-sm text-foreground/85"
                    >
                      <Check className="mt-0.5 size-4 shrink-0 text-brand" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </Reveal>
      </Container>
    </section>
  );
}
