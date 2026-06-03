import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getServiceBySlug, services } from "@/content/services";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-muted">
        <Link href="/services" className="hover:text-brand">
          Services
        </Link>{" "}
        / {service.title}
      </p>
      <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-brand">
        {service.title}
      </h1>
      <p className="mt-4 text-lg text-brand-muted">{service.summary}</p>

      <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <div className="space-y-4 text-base text-brand-muted">
          {service.body.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <aside className="space-y-4 rounded-2xl border border-slate-200 bg-surface-elevated p-6 text-sm dark:border-slate-800">
          <h2 className="font-display text-base font-semibold text-brand">Typical outcomes</h2>
          <ul className="space-y-3 text-brand-muted">
            {service.outcomes.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-brand" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="pt-4 text-xs text-brand-muted">
            Swap the “Icon” placeholder on the listing page for SVG marks exported from Figma. Keep stroke
            widths aligned with the design system.
          </p>
        </aside>
      </div>

      <div className="mt-12 rounded-2xl border border-dashed border-slate-300 bg-surface p-6 text-sm text-brand-muted dark:border-slate-700">
        <h2 className="font-display text-lg font-semibold text-brand">Optional deep content blocks</h2>
        <p className="mt-2">
          Process diagrams, timelines, deliverable tables, and embedded Loom walkthroughs can live here
          without changing routing.
        </p>
      </div>
    </div>
  );
}
