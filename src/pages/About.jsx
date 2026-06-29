import Reveal from "../shared/Reveal";

const EXPERIENCE = [
  {
    role: "Brain-Computer Interface Software Engineer",
    company: "Blackrock Neurotech",
    location: "Salt Lake City, UT",
    dates: "May 2026 – Present",
    points: [
      "Building a VLM-based intent-to-action mapping system for agentic computer control by BCI users, designing the task schema, model architecture, and command-execution UI, reaching 92% task accuracy and sub-3s latency across 17 real-world control tasks.",
      "Developing an evaluation framework for BCI intent-mapping models measuring task success, latency, and robustness, supporting autonomous device control from intracranial neural signals.",
    ],
  },
  {
    role: "Data Engineer & Online Experimentation Lead",
    company: "Computational Memory Lab",
    location: "Philadelphia, PA",
    dates: "May 2025 – Present",
    points: [
      "Preparing a manuscript on a large-scale online directed free-recall experiment, leading experimental design, technical support, Python statistical analysis, and publication-ready visualizations.",
      "Built and deployed a jsPsych/JavaScript experiment with Prolific integration, randomized audio stimuli, attention-screening logic, and Flask REST endpoints storing data in SQL, supporting 470+ participant sessions.",
      "Processed 350+ high-dimensional EEG datasets through a Python pipeline for preprocessing, time-frequency feature extraction, and theta-band spectral analysis linked to memory encoding.",
    ],
  },
  {
    role: "AI Engineer",
    company: "Sound of Earth",
    location: "Los Angeles, CA",
    dates: "Jan 2026 – Present",
    points: [
      "Designing an LLM-powered submission intake assistant for Blossom, replacing a cumbersome 15-field form with a conversational workflow that extracts structured metadata for downstream curation.",
    ],
  },
  {
    role: "Computational Research Assistant",
    company: "Computational Cognitive Neuroscience Lab",
    location: "Philadelphia, PA",
    dates: "Jan 2024 – Feb 2025",
    points: [
      "Engineered a recurrent neural network in Go to model NREM2 sleep-dependent memory consolidation; analyzed and visualized sleep spindle activity with Python and Pandas.",
    ],
  },
  {
    role: "Web Developer",
    company: "Civic House, University of Pennsylvania",
    location: "Philadelphia, PA",
    dates: "Oct 2023 – Oct 2024",
    points: [
      "Revamped the web interface with HTML, CSS, and JavaScript, increasing site traffic by 76%.",
      "Ran UX tests and user feedback sessions to improve accessibility for diverse student users.",
    ],
  },
];

const EDUCATION = [
  {
    school: "University of Pennsylvania",
    degree: "B.S.E. in Artificial Intelligence · Minor in Neuroscience",
    extra: "M.S.E. in Bioengineering (Neuroengineering)",
    dates: "Expected May 2027",
    detail:
      "GPA 3.94 · Eta Kappa Nu Honor Society · Widjaja Entrepreneurship Fellow",
    coursework: [
      "Brain-Computer Interfaces",
      "Machine Learning",
      "Computer Vision",
      "Software Engineering",
      "Data Structures & Algorithms",
      "Dynamical Systems",
      "Big Data Analytics",
      "Linear Algebra",
      "Systems Neuroscience",
    ],
  },
];

const SKILL_COLORS = {
  sky: "bg-sky-50 text-sky-700 border-sky-200",
  violet: "bg-violet-50 text-violet-700 border-violet-200",
  emerald: "bg-emerald-50 text-emerald-700 border-emerald-200",
  rose: "bg-rose-50 text-rose-700 border-rose-200",
  amber: "bg-amber-50 text-amber-700 border-amber-200",
  teal: "bg-teal-50 text-teal-700 border-teal-200",
  fuchsia: "bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200",
};

const SKILLS = [
  {
    label: "Software",
    icon: "💻",
    color: "sky",
    items: [
      "Python",
      "Go",
      "JavaScript/TypeScript",
      "Java",
      "Node.js",
      "Linux",
      "Git",
    ],
  },
  {
    label: "Systems & Cloud",
    icon: "☁️",
    color: "violet",
    items: ["REST APIs", "Flask", "Docker", "AWS EC2"],
  },
  {
    label: "Data & ML",
    icon: "🤖",
    color: "emerald",
    items: [
      "PyTorch",
      "Hugging Face",
      "SQL",
      "Polars",
      "NumPy",
      "SciPy",
      "Pandas",
    ],
  },
  {
    label: "Neurotech",
    icon: "🧠",
    color: "rose",
    items: [
      "EEG & ECoG decoding",
      "BCI systems",
      "Neural signal processing",
      "Feature extraction",
      "Time-frequency analysis",
    ],
  },
  {
    label: "UX / UI",
    icon: "🎨",
    color: "amber",
    items: ["React Native", "HTML/CSS", "Vite", "Next.js", "Tailwind"],
  },
  {
    label: "Languages",
    icon: "🌏",
    color: "teal",
    items: ["Cantonese", "Mandarin", "German", "Indonesian"],
  },
  {
    label: "Interests",
    icon: "✨",
    color: "fuchsia",
    items: [
      "Memory athletics",
      "Morse code",
      "Videography",
      "Endurance running",
    ],
  },
];

// Add your projects here, they'll render as cards below.
// Example: { title: "NeuroRAVE", blurb: "EEG neurofeedback system.", link: "https://..." }
const PROJECTS = [];

export default function About() {
  return (
    <div className="mx-auto max-w-3xl">
      <section>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-4">
            <h1 className="text-3xl font-semibold tracking-tight">About</h1>
            <p className="text-secondary">
              My name is Andrew Stellis Wong. I am an engineer and researcher
              building the next generation of neurotechnology. I bring five years
              of computational research experience in the neural mechanisms of
              memory consolidation and statistical learning, and I've led/co-led
              the development of seven technical projects into production-ready
              systems. Outside of work, I enjoy reading philosophy, making
              videos and eating eggs.
            </p>
          </div>
          <img
            src="/headshot.jpeg"
            alt="Andrew S. Wong"
            className="h-44 w-44 shrink-0 rounded-2xl border border-line object-cover"
          />
        </div>
      </section>

      {/* Work experience */}
      <section className="mt-10 space-y-6">
        <h2 className="text-xl font-semibold tracking-tight">Experience</h2>
        <div className="space-y-7">
          {EXPERIENCE.map((job, i) => (
            <Reveal
              key={i}
              delay={i * 80}
              className="border-l-2 border-line pl-5"
            >
              <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-medium">
                  {job.role}{" "}
                  <span className="text-secondary">· {job.company}</span>
                </h3>
                <span className="whitespace-nowrap text-sm text-secondary">
                  {job.dates}
                </span>
              </div>
              <p className="text-sm text-secondary">{job.location}</p>
              <ul className="mt-2 list-disc space-y-1.5 pl-4 text-sm">
                {job.points.map((p, j) => (
                  <li key={j}>{p}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mt-14 space-y-6">
        <h2 className="text-xl font-semibold tracking-tight">Education</h2>
        <div className="space-y-7">
          {EDUCATION.map((edu, i) => (
            <Reveal
              key={i}
              delay={i * 80}
              className="border-l-2 border-line pl-5"
            >
              <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-medium">{edu.school}</h3>
                <span className="whitespace-nowrap text-sm text-secondary">
                  {edu.dates}
                </span>
              </div>
              <p className="text-sm">{edu.degree}</p>
              {edu.extra && <p className="text-sm">{edu.extra}</p>}
              <p className="mt-1 text-sm text-secondary">{edu.detail}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {edu.coursework.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-line bg-surface px-3 py-1 text-xs text-secondary"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mt-14 space-y-6">
        <h2 className="text-xl font-semibold tracking-tight">Skills</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {SKILLS.map((group) => (
            <div
              key={group.label}
              className="rounded-2xl border border-line bg-paper p-5 transition duration-200 ease-material hover:shadow-md"
            >
              <div className="mb-3 flex items-center gap-2">
                <span className="text-xl" aria-hidden="true">
                  {group.icon}
                </span>
                <h3 className="font-medium">{group.label}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className={`rounded-full border px-3 py-1 text-xs font-medium ${SKILL_COLORS[group.color]}`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects, add your own in the PROJECTS array above */}
      <section className="mt-14 space-y-6">
        <h2 className="text-xl font-semibold tracking-tight">Projects</h2>
        {PROJECTS.length === 0 ? (
          <p className="text-secondary">Projects coming soon.</p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            {PROJECTS.map((proj, i) => {
              const Tag = proj.link ? "a" : "div";
              return (
                <Tag
                  key={i}
                  href={proj.link}
                  target={proj.link ? "_blank" : undefined}
                  rel={proj.link ? "noreferrer" : undefined}
                  className="block rounded-2xl border border-line bg-paper p-6 transition duration-200 ease-material hover:-translate-y-0.5 hover:shadow-md"
                >
                  <h3 className="font-medium">{proj.title}</h3>
                  {proj.blurb && (
                    <p className="mt-1 text-sm text-secondary">{proj.blurb}</p>
                  )}
                </Tag>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}
