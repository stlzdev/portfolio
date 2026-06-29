import { useEffect, useState } from "react";
import { films } from "../../content/films";

function FilmLightbox({ film, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={film.title}
    >
      <div
        className="w-full max-w-4xl overflow-hidden rounded-2xl bg-paper shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative bg-black">
          <video
            src={film.src}
            poster={film.poster || undefined}
            controls
            autoPlay
            className="aspect-video w-full"
          />
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-black/60 text-white transition hover:bg-black/80"
          >
            ✕
          </button>
        </div>
        <div className="space-y-1 p-5">
          <h2 className="text-xl font-semibold">
            {film.title}{" "}
            <span className="font-normal text-secondary">{film.year}</span>
          </h2>
          <p className="text-sm text-secondary">
            {[film.role, film.runtime].filter(Boolean).join(" · ")}
          </p>
          {film.description && <p className="pt-1">{film.description}</p>}
        </div>
      </div>
    </div>
  );
}

export default function Films() {
  const [active, setActive] = useState(null);

  return (
    <section className="space-y-6">
      <header className="max-w-2xl space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Stellis Films</h1>
        <p className="text-secondary">
          I have been making short films under the Stellis Films brand since
          December 2024. I like making vox-pop street interviews, short
          documentaries, and uplifting short-form pieces that tell human
          stories. Through my films, I strive to capture the authenticity of
          everyday people: their struggles, kindness, and what defines us as a
          community. My work at Stellis Films contributes to a bigger life
          vision, which I have coined as The Stellis Way.
        </p>
      </header>

      {films.length === 0 ? (
        <p className="text-secondary">No films yet, check back soon.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {films.map((film) => (
            <button
              key={film.slug}
              onClick={() => setActive(film)}
              className="group block overflow-hidden rounded-2xl border border-line bg-paper text-left transition duration-200 ease-material hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="relative aspect-video overflow-hidden bg-ink">
                {film.poster ? (
                  <img
                    src={film.poster}
                    alt={film.title}
                    className="h-full w-full object-cover transition duration-300 ease-material group-hover:scale-105"
                  />
                ) : (
                  <div className="grid h-full w-full place-items-center p-4 text-center">
                    <span className="text-lg font-medium text-white">
                      {film.title}
                    </span>
                  </div>
                )}
                <span className="absolute right-2 top-2 rounded-full bg-black/60 px-2 py-0.5 text-xs text-white">
                  ▶ Play
                </span>
              </div>
              <div className="p-4">
                <h2 className="font-medium">{film.title}</h2>
                <p className="text-sm text-secondary">
                  {[film.year, film.role].filter(Boolean).join(" · ")}
                </p>
              </div>
            </button>
          ))}
        </div>
      )}

      {active && <FilmLightbox film={active} onClose={() => setActive(null)} />}
    </section>
  );
}
