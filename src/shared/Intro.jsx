import { useEffect, useState } from "react";

function initialPhase() {
  if (typeof window === "undefined") return "done";
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  return reduce ? "done" : "spin";
}

// Full-screen intro overlay:
//   spin   -> logo spinwheel winds down
//   settle -> smooth rotate-to-rest with a slight overshoot
//   open   -> theater curtain splits apart, logo lifts away
export default function Intro() {
  const [phase, setPhase] = useState(initialPhase);

  useEffect(() => {
    if (phase !== "spin") return;
    const timers = [
      setTimeout(() => setPhase("settle"), 1100),
      setTimeout(() => setPhase("open"), 1700),
      setTimeout(() => setPhase("done"), 2700),
    ];
    return () => timers.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (phase === "done") return null;

  const isOpen = phase === "open";

  return (
    <div className="intro" data-phase={phase} aria-hidden="true">
      <div className={`intro-panel intro-left ${isOpen ? "is-open" : ""}`} />
      <div className={`intro-panel intro-right ${isOpen ? "is-open" : ""}`} />
      <div className={`intro-logo intro-logo--${phase}`}>
        <img src="/logo.jpg" alt="" />
      </div>
      <button className="intro-skip" onClick={() => setPhase("done")}>
        Skip
      </button>
    </div>
  );
}
