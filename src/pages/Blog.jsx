import Card from "../shared/Card";

const POSTS = [
  { title: "Coming soon", blurb: "Thoughts on brains, memory, and building." },
  { title: "Coming soon", blurb: "Notes from things I'm learning." },
  { title: "Coming soon", blurb: "Ideas worth writing down." },
];

export default function Blog() {
  return (
    <section className="space-y-6">
      <header className="space-y-1">
        <h1 className="text-3xl font-semibold tracking-tight">Blog</h1>
        <p className="text-secondary">Writing on minds, memory, and making things.</p>
      </header>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {POSTS.map((post, i) => (
          <Card key={i} className="cursor-pointer">
            <h2 className="text-lg font-medium">{post.title}</h2>
            <p className="mt-1 text-sm text-secondary">{post.blurb}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
