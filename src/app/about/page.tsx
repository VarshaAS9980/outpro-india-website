import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { leaders, team } from "@/content/people";

export const metadata: Metadata = {
  title: "About",
  description:
    "Company story, mission, vision, values, leadership, and team — Outpro.India corporate profile.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="About Outpro.India"
        title="Built for credibility in complex B2B buying journeys."
        description="Replace this narrative with the approved company story, origin, and proof points from leadership interviews and brand workshops."
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.1fr)]">
        <div className="space-y-6 text-base text-brand-muted">
          <p>
            This page is structured to carry long-form storytelling: how the firm started, the problems
            it obsesses over, and the operating principles that show up in delivery. Keep paragraphs
            short on the web; use sidebars or pull quotes for dense facts.
          </p>
          <p>
            When brand guidelines arrive from Figma, map headings to the typography scale (H1–H3, body,
            captions) and swap placeholder copy without touching layout primitives.
          </p>
        </div>
        <aside className="space-y-4 rounded-2xl border border-slate-200 bg-surface-elevated p-6 text-sm text-brand-muted dark:border-slate-800">
          <h2 className="font-display text-lg font-semibold text-brand">Mission</h2>
          <p>State the mission in one or two crisp sentences.</p>
          <h2 className="pt-4 font-display text-lg font-semibold text-brand">Vision</h2>
          <p>Describe the long-term market or client impact you are building toward.</p>
          <h2 className="pt-4 font-display text-lg font-semibold text-brand">Values</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Integrity in commitments and reporting.</li>
            <li>Craft in design and engineering details.</li>
            <li>Partnership with client teams, not black-box delivery.</li>
          </ul>
        </aside>
      </div>

      <section className="mt-20">
        <SectionHeading
          eyebrow="Leadership"
          title="Profiles that make the abstract concrete."
          description="Use consistent headshot ratios, naming, and role titling. Link to LinkedIn only where executives are comfortable."
        />
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {leaders.map((leader) => (
            <article
              key={leader.name + leader.role}
              className="rounded-2xl border border-slate-200 bg-surface-elevated p-6 dark:border-slate-800"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-200 text-sm font-semibold text-brand-muted dark:bg-slate-800">
                Photo
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold text-brand">{leader.name}</h3>
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-muted">
                {leader.role}
              </p>
              <p className="mt-3 text-sm text-brand-muted">{leader.bio}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <SectionHeading
          eyebrow="Team"
          title="The people behind delivery."
          description="A responsive grid works well here; consider lazy-loading images if the roster is large."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div
              key={member.name + member.role}
              className="rounded-2xl border border-slate-200 bg-surface p-4 text-center dark:border-slate-800"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-200 text-xs font-semibold text-brand-muted dark:bg-slate-800">
                Img
              </div>
              <p className="mt-4 text-sm font-semibold text-brand">{member.name}</p>
              <p className="text-xs text-brand-muted">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
