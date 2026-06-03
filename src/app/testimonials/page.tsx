import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { testimonials } from "@/content/testimonials";

export const metadata: Metadata = {
  title: "Client Testimonials",
  description: "Text and video testimonials from Outpro.India clients and partners.",
};

export default function TestimonialsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Testimonials"
        title="Social proof that matches how buyers actually decide."
        description="Pair written quotes with short-form video where possible. Host videos on YouTube or Vimeo unlisted, and embed responsively below."
      />

      <section className="mt-12">
        <h2 className="font-display text-xl font-semibold text-brand">Video testimonials</h2>
        <p className="mt-2 max-w-2xl text-sm text-brand-muted">
          Replace this block with approved embeds (for example, an iframe from your video host). Keep
          aspect ratio locked to 16:9 for layout stability on mobile.
        </p>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="flex aspect-video items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-surface text-sm text-brand-muted dark:border-slate-700">
            Video embed placeholder A
          </div>
          <div className="flex aspect-video items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-surface text-sm text-brand-muted dark:border-slate-700">
            Video embed placeholder B
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-xl font-semibold text-brand">Written testimonials</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, index) => (
            <figure
              key={`${t.author}-${index}`}
              className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-surface-elevated p-6 dark:border-slate-800"
            >
              <blockquote className="text-sm text-brand-muted">“{t.quote}”</blockquote>
              <figcaption className="mt-6 text-sm font-semibold text-brand">
                {t.author}
                <span className="mt-1 block text-xs font-normal text-brand-muted">
                  {t.title}, {t.company}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}
