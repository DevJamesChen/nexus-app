import { Container, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/reveal";

const testimonials = [
  {
    quote:
      "Onboarding used to mean pinging six people on Slack. Now new hires just ask Nexus and get the answer with a link to the source. It paid for itself in a week.",
    name: "Maya Chen",
    role: "Head of People, Driftwave",
    initials: "MC",
    tint: "from-violet-300/60 to-violet-500/30",
  },
  {
    quote:
      "Support resolves tickets faster because the answer and its source show up together. Our deflection rate jumped without us writing a single new macro.",
    name: "Daniel Owusu",
    role: "Support Lead, Hearth",
    initials: "DO",
    tint: "from-sky-300/60 to-sky-500/30",
  },
  {
    quote:
      "I stopped maintaining a wiki nobody read. Nexus keeps everything current automatically, and engineers actually trust the answers because they are cited.",
    name: "Priya Nair",
    role: "Staff Engineer, Northwind",
    initials: "PN",
    tint: "from-emerald-300/60 to-emerald-500/30",
  },
];

export function Testimonials() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Loved by teams"
          title="Less searching. More shipping."
          description="From onboarding to support to engineering, teams use Nexus to turn institutional knowledge into instant answers."
        />

        <Reveal className="reveal-children mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="card-lift flex flex-col rounded-xl border border-border bg-card/50 p-6 hover:border-brand/25"
            >
              <blockquote className="flex-1 text-pretty text-sm leading-relaxed text-foreground/90">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <span
                  className={`inline-flex size-9 items-center justify-center rounded-full bg-gradient-to-br ${t.tint} text-xs font-semibold text-background`}
                >
                  {t.initials}
                </span>
                <div className="text-sm">
                  <p className="font-medium text-foreground">{t.name}</p>
                  <p className="text-muted-foreground">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
