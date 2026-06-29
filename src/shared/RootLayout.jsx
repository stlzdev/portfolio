import { NavLink, Outlet } from "react-router-dom";
import Intro from "./Intro";

const NAV = [
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
  { to: "/memory", label: "Memory" },
  { to: "/films", label: "Films" },
  { to: "/vision", label: "Vision" },
  { to: "/play", label: "Play" },
];

const LinkItem = ({ to, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `rounded-full px-3 py-2 text-sm transition duration-200 ease-material ${
        isActive ? "bg-surface text-ink font-medium" : "text-secondary hover:bg-surface"
      }`
    }
  >
    {label}
  </NavLink>
);

export default function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Intro />

      <header className="sticky top-0 z-10 border-b border-line bg-paper/80 backdrop-blur">
        <div className="wrap flex items-center justify-between py-3">
          <NavLink to="/" className="flex items-center gap-2 font-semibold text-ink">
            <img src="/logo.jpg" alt="" className="h-8 w-8 object-contain" />
            <span>Andrew S. Wong</span>
          </NavLink>
          <nav className="flex flex-wrap items-center justify-end gap-1">
            {NAV.map((item) => (
              <LinkItem key={item.to} {...item} />
            ))}
          </nav>
        </div>
      </header>

      <main className="wrap flex-1 py-10">
        <Outlet />
      </main>

      <footer className="border-t border-line">
        <div className="wrap flex flex-col items-center justify-between gap-2 py-6 text-sm text-secondary sm:flex-row">
          <span>© {2026} Andrew S. Wong</span>
          <span>build better brains.</span>
        </div>
      </footer>
    </div>
  );
}
