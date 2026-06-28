import { Container, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/reveal";

const sources = [
  { name: "Slack", src: "/logos/slack.svg" },
  { name: "Notion", src: "/logos/notion.svg" },
  { name: "Google Drive", src: "/logos/googledrive.svg" },
  { name: "GitHub", src: "/logos/github.svg" },
  { name: "Confluence", src: "/logos/confluence.svg" },
  { name: "Jira", src: "/logos/jira.svg" },
  { name: "Figma", src: "/logos/figma.svg" },
  { name: "Linear", src: "/logos/linear.svg" },
  { name: "Gmail", src: "/logos/gmail.svg" },
  { name: "Salesforce", src: "/logos/salesforce.svg" },
  { name: "Zendesk", src: "/logos/zendesk.svg" },
  { name: "Dropbox", src: "/logos/dropbox.svg" },
];

export function Integrations() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <Container>
        <SectionHeading
          align="left"
          eyebrow="Integrations"
          title="Connects to the tools you already use."
          description="Thirty plus native connectors and a public API. If your team writes it down somewhere, Nexus can read it."
        />

        <Reveal className="reveal-children mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {sources.map((s) => (
            <div
              key={s.name}
              className="card-lift group flex items-center gap-3 rounded-xl border border-border bg-card/40 p-4 hover:border-brand/30 hover:bg-card/70"
            >
              <span className="inline-flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white p-2 ring-1 ring-border transition-transform group-hover:scale-110">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.src}
                  alt={`${s.name} logo`}
                  className="size-full object-contain"
                />
              </span>
              <span className="text-sm font-medium text-foreground/90">
                {s.name}
              </span>
            </div>
          ))}
        </Reveal>

        <p className="mt-6 text-sm text-muted-foreground">
          Plus a REST API, webhooks, and an MCP server for your own agents.
        </p>
      </Container>
    </section>
  );
}
