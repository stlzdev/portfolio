import Button from "../shared/Button";

const LINKS = [
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
  { to: "/memory", label: "Memory" },
  { to: "/films", label: "Films" },
  { to: "/vision", label: "Vision" },
  { to: "/play", label: "Play" },
];

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-6 py-16 text-center">
      <img
        src="/logo.jpg"
        alt="Andrew S. Wong logo"
        className="h-28 w-28 object-contain"
      />
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
        Andrew S. Wong
      </h1>
      <p className="max-w-md text-lg text-secondary">
        I'm on a mission to{" "}
        <span className="font-medium text-ink underline decoration-2 underline-offset-4">
          build better brains.
        </span>
      </p>
      <div className="mt-2 flex flex-wrap items-center justify-center gap-2">
        {LINKS.map((l) => (
          <Button key={l.to} to={l.to}>
            {l.label}
          </Button>
        ))}
      </div>
    </section>
  );
}
