import { NavLink } from "react-router-dom";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition duration-200 ease-material select-none";

const variants = {
  default:
    "bg-surface text-ink border border-line hover:shadow-md hover:-translate-y-px",
  solid: "bg-ink text-white border border-ink hover:shadow-lg hover:-translate-y-px",
  ghost: "text-ink hover:bg-surface",
};

export default function Button({
  to,
  href,
  onClick,
  children,
  variant = "default",
  className = "",
  ...props
}) {
  const cls = `${base} ${variants[variant] || variants.default} ${className}`;

  if (to) {
    return (
      <NavLink to={to} className={cls} {...props}>
        {children}
      </NavLink>
    );
  }
  if (href) {
    return (
      <a href={href} className={cls} {...props}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} className={cls} {...props}>
      {children}
    </button>
  );
}
