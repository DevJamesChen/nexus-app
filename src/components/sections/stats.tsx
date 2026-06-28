import { Container } from "@/components/ui/section";
import { Reveal } from "@/components/reveal";
import { CountUp } from "@/components/count-up";

const stats = [
  { to: 12, suffix: "k+", decimals: 0, label: "Teams run on Nexus" },
  { to: 60, suffix: "%", decimals: 0, label: "Less time spent searching" },
  { to: 4, suffix: "M+", decimals: 0, label: "Questions answered" },
  { to: 4.9, suffix: "/5", decimals: 1, label: "Average rating" },
];

export function Stats() {
  return (
    <section className="border-y border-border bg-card/30 py-14">
      <Container>
        <Reveal className="reveal-children grid grid-cols-2 gap-y-10 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-4xl font-semibold tracking-tight text-gradient tabular-nums sm:text-5xl">
                <CountUp to={s.to} decimals={s.decimals} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
