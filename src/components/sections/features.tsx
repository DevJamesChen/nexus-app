import {
  Search,
  Quote,
  Wand2,
  ShieldCheck,
  Workflow,
  RefreshCw,
} from "lucide-react";

import { Container, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/reveal";

const features = [
  {
    icon: Search,
    title: "Search everything at once",
    body: "One box across Slack, Notion, Drive, GitHub, and more. Stop guessing which tool the answer lives in.",
  },
  {
    icon: Quote,
    title: "Answers you can trust",
    body: "Every response is grounded in your content and cites the exact source, so you can verify in one click.",
  },
  {
    icon: Wand2,
    title: "Organizes itself",
    body: "Nexus clusters related docs, tags topics, and surfaces duplicates automatically. No manual upkeep.",
  },
  {
    icon: ShieldCheck,
    title: "Respects permissions",
    body: "Nexus inherits the access controls you already have. People only ever see what they are allowed to.",
  },
  {
    icon: Workflow,
    title: "Lives where you work",
    body: "Ask from Slack, your browser, or the desktop app. Answers come to you without breaking your flow.",
  },
  {
    icon: RefreshCw,
    title: "Always up to date",
    body: "Edit a doc and Nexus re-indexes within seconds, so answers reflect the latest version every time.",
  },
];

export function Features() {
  return (
    <section id="features" className="bg-background py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Features"
          title="The fastest way to find what your team knows."
          description="Nexus reads your tools so your team does not have to. Connect once and turn scattered knowledge into instant, sourced answers."
        />

        <Reveal className="reveal-children mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="card-lift group flex flex-col rounded-xl border border-border bg-card/40 p-6 transition-colors hover:border-brand/30 hover:bg-card/60"
            >
              <f.icon strokeWidth={1.5} className="size-5 text-brand" />
              <div className="mt-4 h-px w-8 bg-gradient-to-r from-brand/70 to-transparent transition-all duration-300 group-hover:w-14" />
              <h3 className="mt-4 text-base font-semibold text-foreground">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {f.body}
              </p>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
