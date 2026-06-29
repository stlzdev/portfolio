export default function Card({ as: Tag = "div", className = "", children, ...props }) {
  return (
    <Tag
      className={`rounded-2xl border border-line bg-paper p-6 transition duration-200 ease-material hover:shadow-md ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
