import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
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

function HomeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

export default function RootLayout() {
  const location = useLocation();
  const [animKey, setAnimKey] = useState(0);
  const isFirstMount = useRef(true);

  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }
    if (location.pathname === "/") {
      setAnimKey((k) => k + 1);
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Intro key={animKey} />

      <header className="sticky top-0 z-10 border-b border-line bg-paper/80 backdrop-blur">
        <div className="wrap flex items-center justify-between py-3">
          <NavLink to="/" className="flex items-center gap-2 font-semibold text-ink">
            <img src="/logo.jpg" alt="" className="h-8 w-8 object-contain" />
            <span>Andrew S. Wong</span>
          </NavLink>
          <nav className="flex flex-wrap items-center justify-end gap-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `rounded-full px-3 py-2 text-sm transition duration-200 ease-material ${
                  isActive ? "bg-surface text-ink font-medium" : "text-secondary hover:bg-surface"
                }`
              }
              aria-label="Home"
            >
              <HomeIcon />
            </NavLink>
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
