import { Container, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How is Nexus different from a wiki?",
    a: "A wiki is something your team has to write and maintain. Nexus reads the tools you already use and keeps itself current automatically, so the knowledge stays fresh without anyone curating it. And instead of returning a page, Nexus answers the actual question and cites its sources.",
  },
  {
    q: "Does Nexus respect our existing permissions?",
    a: "Yes. Nexus inherits the access controls from each connected tool and enforces them at query time. A person only ever sees answers drawn from content they already have permission to view.",
  },
  {
    q: "Where does our data go, and is it used to train models?",
    a: "Your content stays in your workspace and is never used to train shared models. Nexus is SOC 2 Type II certified, encrypts data in transit and at rest, and offers regional data residency and a self-hosted option on Enterprise.",
  },
  {
    q: "Which tools can I connect?",
    a: "Slack, Notion, Google Drive, GitHub, Confluence, Jira, Figma, Linear, Gmail, Salesforce, Zendesk, Dropbox, and 30 plus more. Anything not on the list can be connected through our REST API or MCP server.",
  },
  {
    q: "How long does setup take?",
    a: "Most teams are answering questions within minutes. Connecting a source takes a couple of clicks, and Nexus indexes in the background while you keep working.",
  },
  {
    q: "Can I try it before paying?",
    a: "Yes. The Free plan is free forever, and every paid plan starts with a 14-day trial. No credit card required to begin.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="bg-background py-20 sm:py-28">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, answered."
          description="Everything you need to know before you connect your first tool."
        />

        <Reveal>
          <Accordion multiple={false} defaultValue={["item-0"]} className="mt-12">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`}>
                <AccordionTrigger className="text-base">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <p>{f.a}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </Container>
    </section>
  );
}
