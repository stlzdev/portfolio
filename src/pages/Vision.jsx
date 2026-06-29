import { useEffect, useRef } from "react";
import Typed from "typed.js";
import Card from "../shared/Card";
import Reveal from "../shared/Reveal";

const BELIEFS = [
  {
    title: "Universal Humanity",
    body: "I believe in a world where our differences unite rather than divide us, where we embrace our commonalities while celebrating what makes us unique. Whatever your background, race, or ethnicity; whatever your gender or whom you love; whatever your nationality, beliefs, or abilities, you belong.",
  },
  {
    title: "Radical Hope",
    body: "I believe hope can outlast the hardest of times. Where there is hope, there is a way. There is a way through every hardship, no matter how hard it feels at times. Take it one step at a time, and remember that every step counts.",
  },
  {
    title: "Innate Goodness",
    body: "I believe that all humans are born good, and we have the free will to do good or bad. Rather than condemning others for their wrongdoings, I believe in the power of bringing out the good in each other. Always assume the best of intentions; one kind word or act can go a long way.",
  },
];

const PRINCIPLES = [
  {
    title: "Be a good person",
    body: "Live humbly, help others, and be genuine. Altruism isn't a checklist of items; it's a way of life. Strive to be a better version of yourself every day.",
  },
  {
    title: "Stay curious",
    body: "Learning is humanity's greatest gift. Ask questions, challenge yourself, and don't let pride get in the way of seeking help or advice.",
  },
  {
    title: "Be grateful",
    body: "Work, school, relationships: all are opportunities, not burdens. If you undertake a new endeavor, try to find joy in the process, not just the outcome. Gratitude fuels perseverance.",
  },
  {
    title: "Strive for impact, not fame",
    body: "Legacy isn't about titles or recognition; it's about the positive change you leave behind. Embrace change, take risks, and discover the unexpected.",
  },
  {
    title: "Love yourself",
    body: "People come and go; not everyone will stay forever, and that's okay. Be comfortable just being yourself. Prioritize your health and follow your heart.",
  },
];

const VALUES = ["Health", "Compassion", "Contribution", "Openness", "Inner Peace"];

function TypedTitle() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["The Stellar", "The Stellis Way"],
      typeSpeed: 75,
      backSpeed: 45,
      backDelay: 300,
      smartBackspace: true,
      loop: false,
      showCursor: true,
      cursorChar: "|",
      onComplete: (self) => {
        if (self.cursor) self.cursor.remove();
      },
    });
    return () => typed.destroy();
  }, []);

  return <span ref={el} />;
}

function SectionLabel({ children }) {
  return (
    <Reveal>
      <div className="mb-8 flex items-center gap-4">
        <span className="whitespace-nowrap text-xs font-semibold uppercase tracking-widest text-secondary">
          {children}
        </span>
        <div className="h-px flex-1 bg-line" />
      </div>
    </Reveal>
  );
}

export default function Vision() {
  return (
    <div>

      {/* ── Hero ── */}
      <section className="py-16 text-center">
        <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">
          <TypedTitle />
        </h1>
        <Reveal delay={300}>
          <div className="mx-auto mt-8 max-w-sm rounded-xl border border-line bg-paper p-5 text-left">
            <div className="mb-3 flex items-baseline gap-2 border-b border-line pb-3">
              <span className="text-sm font-medium text-ink">stel · lis way</span>
              <span className="text-xs italic text-secondary">noun phrase</span>
            </div>
            <p className="text-sm leading-relaxed text-secondary">
              a blend of <em>stellar</em> and <em>ellis</em>, a foundational
              principle of living that strives for excellence while being
              grounded in benevolence; a mindset that helps us reach for the
              stars without losing sight of the human.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ── Core Beliefs ── */}
      <section className="mt-4">
        <SectionLabel>Core Beliefs</SectionLabel>
        <div className="grid gap-4 sm:grid-cols-3">
          {BELIEFS.map((belief, i) => (
            <Reveal key={belief.title} delay={i * 80} className="h-full">
              <Card className="flex h-full flex-col gap-3">
                <h3 className="text-base font-semibold tracking-tight text-ink">
                  {belief.title}
                </h3>
                <p className="text-sm leading-relaxed text-secondary">{belief.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Principles for Action ── */}
      <section className="mt-14">
        <SectionLabel>Principles for Action</SectionLabel>
        <div className="divide-y divide-line">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.title} delay={i * 60}>
              <div className="flex gap-6 py-6">
                <span className="min-w-[2.5rem] pt-0.5 text-2xl font-semibold tabular-nums leading-none text-line">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className="text-base font-semibold tracking-tight text-ink">
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-secondary">{p.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="mt-14 pb-16">
        <SectionLabel>Core Values</SectionLabel>
        <Reveal delay={60}>
          <p className="flex flex-wrap items-baseline gap-x-4 gap-y-2 text-2xl font-semibold tracking-tight text-ink">
            {VALUES.map((v, i) => (
              <span key={v} className="flex items-baseline gap-4">
                {v}
                {i < VALUES.length - 1 && (
                  <span className="select-none text-line">·</span>
                )}
              </span>
            ))}
          </p>
        </Reveal>
      </section>

    </div>
  );
}
