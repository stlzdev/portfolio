import { useEffect, useState } from "react";
import Button from "../shared/Button";

const Svg = ({ children }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {children}
  </svg>
);

// 12 distinct monochrome glyphs -> 12 pairs -> 24 cards.
const ICONS = [
  <Svg><circle cx="12" cy="12" r="8" /></Svg>,
  <Svg><rect x="5" y="5" width="14" height="14" rx="2" /></Svg>,
  <Svg><path d="M12 4 L20 19 L4 19 Z" /></Svg>,
  <Svg><path d="M12 3 L21 12 L12 21 L3 12 Z" /></Svg>,
  <Svg><path d="M12 3 l2.4 6 6.4 .4 -5 4.1 1.7 6.2 -5.5 -3.4 -5.5 3.4 1.7 -6.2 -5 -4.1 6.4 -.4 z" /></Svg>,
  <Svg><path d="M12 20s-7-4.5-7-9.5a4 4 0 0 1 7-2.6 4 4 0 0 1 7 2.6c0 5-7 9.5-7 9.5z" /></Svg>,
  <Svg><path d="M12 5 V19 M5 12 H19" /></Svg>,
  <Svg><path d="M7 4 H17 L21 12 L17 20 H7 L3 12 Z" /></Svg>,
  <Svg><path d="M20 14a8 8 0 1 1-9-11 6.5 6.5 0 0 0 9 11z" /></Svg>,
  <Svg><path d="M13 3 L5 14 H11 L10 21 L19 9 H13 Z" /></Svg>,
  <Svg><path d="M12 3 C12 3 5 11 5 15 a7 7 0 0 0 14 0 C19 11 12 3 12 3 Z" /></Svg>,
  <Svg><circle cx="12" cy="12" r="9" /><path d="M8.5 14 a4 4 0 0 0 7 0" /><path d="M9 9.7 h.01 M15 9.7 h.01" /></Svg>,
];

function makeDeck() {
  const deck = ICONS.flatMap((_, pairId) => [{ pairId }, { pairId }]).map(
    (c, id) => ({ ...c, id })
  );
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}

function formatTime(s) {
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${m}:${String(r).padStart(2, "0")}`;
}

export default function Play() {
  const [deck, setDeck] = useState(makeDeck);
  const [flipped, setFlipped] = useState([]); // indices currently face-up, unmatched
  const [matched, setMatched] = useState(() => new Set());
  const [moves, setMoves] = useState(0);
  const [lock, setLock] = useState(false);
  const [started, setStarted] = useState(false);
  const [seconds, setSeconds] = useState(0);

  const won = matched.size === ICONS.length;

  useEffect(() => {
    if (!started || won) return;
    const id = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, [started, won]);

  function reset() {
    setDeck(makeDeck());
    setFlipped([]);
    setMatched(new Set());
    setMoves(0);
    setLock(false);
    setStarted(false);
    setSeconds(0);
  }

  function handleFlip(index) {
    if (lock) return;
    const card = deck[index];
    if (matched.has(card.pairId) || flipped.includes(index)) return;
    if (!started) setStarted(true);

    if (flipped.length === 0) {
      setFlipped([index]);
      return;
    }

    const first = flipped[0];
    setFlipped([first, index]);
    setMoves((m) => m + 1);
    setLock(true);

    if (deck[first].pairId === card.pairId) {
      setTimeout(() => {
        setMatched((prev) => new Set(prev).add(card.pairId));
        setFlipped([]);
        setLock(false);
      }, 450);
    } else {
      setTimeout(() => {
        setFlipped([]);
        setLock(false);
      }, 850);
    }
  }

  return (
    <section className="space-y-6">
      <header className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-1">
          <h1 className="text-3xl font-semibold tracking-tight">Play</h1>
          <p className="text-secondary">
            Memory match, flip cards and find all 12 pairs. Good for the brain.
          </p>
        </div>
        <div className="flex items-center gap-3 text-sm text-secondary">
          <span>
            Moves <span className="font-medium text-ink">{moves}</span>
          </span>
          <span>
            Time <span className="font-medium text-ink">{formatTime(seconds)}</span>
          </span>
          <Button onClick={reset}>New game</Button>
        </div>
      </header>

      {won && (
        <div className="rounded-2xl border border-ink bg-surface p-4 text-center">
          <p className="font-medium">
            🎉 Solved in {moves} moves and {formatTime(seconds)}!
          </p>
          <div className="mt-3">
            <Button onClick={reset} variant="solid">
              Play again
            </Button>
          </div>
        </div>
      )}

      <div className="mx-auto grid max-w-xl grid-cols-4 gap-2.5 sm:grid-cols-6 sm:gap-3">
        {deck.map((card, index) => {
          const isUp = flipped.includes(index) || matched.has(card.pairId);
          const isMatched = matched.has(card.pairId);
          return (
            <button
              key={card.id}
              className={`mcard ${isUp ? "is-flipped" : ""} ${
                isMatched ? "is-matched" : ""
              }`}
              onClick={() => handleFlip(index)}
              disabled={isMatched}
              aria-label={isUp ? `card ${card.pairId + 1}` : "hidden card"}
            >
              <div className="mcard-inner">
                <div className="mcard-face mcard-cover">
                  <Svg>
                    <path d="M12 4 V20 M4 12 H20 M6.3 6.3 L17.7 17.7 M17.7 6.3 L6.3 17.7" />
                  </Svg>
                </div>
                <div className="mcard-face mcard-symbol">{ICONS[card.pairId]}</div>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
