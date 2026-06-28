import { Plug, Brain, MessagesSquare } from "lucide-react";

import { Container, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/reveal";

const steps = [
  {
    n: "01",
    icon: Plug,
    title: "Connect your tools",
    body: "Link Slack, Notion, Google Drive, GitHub, and 30+ more in a couple of clicks. Read-only by default.",
  },
  {
    n: "02",
    icon: Brain,
    title: "Nexus builds your brain",
    body: "We index and embed everything your team can access, keeping permissions intact and content in sync.",
  },
  {
    n: "03",
    icon: MessagesSquare,
    title: "Ask anything",
    body: "Type a question in plain language and get a sourced answer in seconds, wherever you already work.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-background py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="Live in minutes, not a migration."
          description="No data to move and no schemas to maintain. Connect your existing tools and Nexus does the rest."
        />

        <Reveal className="reveal-children mt-14 grid gap-5 md:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.n}
              className="card-lift group relative flex flex-col rounded-xl border border-border bg-card/40 p-6 transition-colors hover:border-brand/30 hover:bg-card/60"
            >
              <div className="flex items-start justify-between">
                <s.icon strokeWidth={1.5} className="size-5 text-brand" />
                <span className="font-mono text-3xl font-semibold leading-none text-muted-foreground/20 transition-colors group-hover:text-brand/30">
                  {s.n}
                </span>
              </div>
              <h3 className="mt-5 text-base font-semibold text-foreground">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.body}
              </p>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
