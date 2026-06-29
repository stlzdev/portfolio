// Your personal films. To add one:
//   1. Drop the video at  public/films/<slug>.mp4
//   2. (optional) Drop a poster at  public/films/<slug>.jpg
//   3. Add an entry below. That's it — the gallery updates automatically.
//
// Example entry:
//   {
//     slug: "first-light",
//     title: "First Light",
//     year: 2025,
//     role: "Director, Editor",
//     runtime: "8 min",
//     poster: "/films/first-light.jpg", // omit/null to show a title card instead
//     src: "/films/first-light.mp4",
//     description: "A short about chasing sunrises.",
//   },

export const films = [
  {
    slug: "first-light",
    title: "First Light",
    year: 2025,
    role: "Director, Editor",
    runtime: "8 min",
    poster: null,
    src: "/films/first-light.mp4",
    description: "A short about chasing sunrises. (Placeholder — replace with your film.)",
  },
  {
    slug: "in-between",
    title: "In Between",
    year: 2024,
    role: "Writer, Director",
    runtime: "12 min",
    poster: null,
    src: "/films/in-between.mp4",
    description: "Two strangers, one long train ride. (Placeholder — replace with your film.)",
  },
  {
    slug: "static",
    title: "Static",
    year: 2023,
    role: "Cinematographer",
    runtime: "5 min",
    poster: null,
    src: "/films/static.mp4",
    description: "An experiment in noise and silence. (Placeholder — replace with your film.)",
  },
];
