import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[50vh] max-w-xl flex-col justify-center px-4 py-24 text-center sm:px-6">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-muted">404</p>
      <h1 className="mt-4 font-display text-3xl font-semibold text-brand">Page not found</h1>
      <p className="mt-3 text-sm text-brand-muted">
        The page you are looking for may have moved. Start again from the home page or main sections.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center self-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground"
      >
        Back to home
      </Link>
    </div>
  );
}
