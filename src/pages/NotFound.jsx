import Button from "../shared/Button";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-24 text-center">
      <h1 className="text-3xl font-semibold tracking-tight">Page not found</h1>
      <p className="text-secondary">This page wandered off somewhere.</p>
      <Button to="/" variant="solid">
        Back to Home
      </Button>
    </section>
  );
}
