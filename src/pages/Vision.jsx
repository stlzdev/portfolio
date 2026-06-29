import { useEffect, useRef, useState } from "react";
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

function HeartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}
function HandsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 11V6a2 2 0 0 0-2-2 2 2 0 0 0-2 2" />
      <path d="M14 10V4a2 2 0 0 0-2-2 2 2 0 0 0-2 2v2" />
      <path d="M10 10.5V6a2 2 0 0 0-2-2 2 2 0 0 0-2 2v8" />
      <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34L3 18" />
    </svg>
  );
}
function SparkleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L9.5 9.5 2 12l7.5 2.5L12 22l2.5-7.5L22 12l-7.5-2.5z" />
    </svg>
  );
}
function OpenIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}
function LeafIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 22c1.25-1.25 2.5-2.5 3.75-3.75" />
      <path d="M17 3C7 3 3 13 3 19c3-3 6-4 9-4 5 0 9-4 9-9 0-1.14-.23-2.26-.68-3.32" />
    </svg>
  );
}

const VALUES = [
  { label: "Health", icon: HeartIcon },
  { label: "Compassion", icon: HandsIcon },
  { label: "Contribution", icon: SparkleIcon },
  { label: "Openness", icon: OpenIcon },
  { label: "Inner Peace", icon: LeafIcon },
];

function ValueCard({ label, icon: Icon }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? "scale(1.15)" : "scale(1)",
        transition: isHovered
          ? "transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1), background-color 0.2s ease, color 0.2s ease"
          : "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.2s ease, color 0.2s ease",
      }}
      className={`flex items-center gap-2 rounded-full border px-4 py-2 ${
        isHovered
          ? "border-line bg-surface text-ink"
          : "border-transparent text-secondary"
      }`}
    >
      <Icon />
      <span className="text-xl font-semibold tracking-tight">{label}</span>
    </div>
  );
}

function TypedTitle() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["The Vision", "The Stellis Way"],
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
              a foundational principle of living that strives for excellence while being
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
          <div className="flex flex-wrap gap-3">
            {VALUES.map((v) => (
              <ValueCard key={v.label} label={v.label} icon={v.icon} />
            ))}
          </div>
        </Reveal>
      </section>

    </div>
  );
}
