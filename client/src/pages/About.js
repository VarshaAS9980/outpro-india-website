import './About.css';

const leaders = [
  {
    name: 'Placeholder Name',
    title: 'Chief Executive Officer',
    bio: 'Replace with leadership bios, photography, and LinkedIn profiles per brand guidelines.',
  },
  {
    name: 'Placeholder Name',
    title: 'Chief Delivery Officer',
    bio: 'Oversees program governance, quality bars, and client communication rhythms.',
  },
];

const values = [
  { title: 'Integrity', text: 'Transparent trade-offs, documented decisions, and accountable delivery.' },
  { title: 'Craft', text: 'We ship work we would proudly attach our names to—performance included.' },
  { title: 'Partnership', text: 'We optimize for client outcomes, not billable theater.' },
];

export default function About() {
  return (
    <>
      <section className="section section--tight-top page-hero">
        <p className="section__eyebrow">About us</p>
        <h1 className="section__title">Built for enterprises that cannot afford generic digital.</h1>
        <p className="section__lead">
          Outpro.India is a corporate digital studio focused on credible storytelling, disciplined
          engineering, and measurable growth. This page outlines mission, vision, values, leadership,
          and team structure—swap copy and imagery when brand assets are finalized.
        </p>
      </section>

      <section className="section">
        <p className="section__eyebrow">Company story</p>
        <h2 className="section__title">From campaigns to platforms</h2>
        <div className="about-story">
          <p>
            Outpro.India began as a specialist team helping B2B organizations untangle fragmented digital
            estates: inconsistent branding, slow pages, and analytics that could not support board-level
            decisions. Over time, engagements expanded from launches to long-running programs spanning
            strategy, product design, engineering, and growth.
          </p>
          <p>
            Today we operate as a single partner for the public digital surface—home, services, portfolio,
            proof, and conversion paths—while leaving room to extend into blogs, careers, and partner
            ecosystems without re-platforming.
          </p>
        </div>
      </section>

      <section className="section section--alt">
        <div className="about-grid">
          <article className="card about-mvv">
            <h2>Mission</h2>
            <p>
              Help ambitious organizations present their capabilities with clarity—so prospects understand
              differentiation in seconds, not meetings.
            </p>
          </article>
          <article className="card about-mvv">
            <h2>Vision</h2>
            <p>
              Become the default partner for B2B teams that treat their public digital surface as a revenue
              system, not a brochure.
            </p>
          </article>
          <article className="card about-mvv">
            <h2>Values</h2>
            <ul className="values-list">
              {values.map((v) => (
                <li key={v.title}>
                  <strong>{v.title}</strong> — {v.text}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section">
        <p className="section__eyebrow">Leadership</p>
        <h2 className="section__title">Profiles</h2>
        <p className="section__lead">
          Use consistent portrait ratios, neutral backgrounds, and accessible contrast for name/title
          treatments.
        </p>
        <div className="card-grid">
          {leaders.map((person) => (
            <article key={person.name} className="card leader-card">
              <div className="leader-card__avatar" aria-hidden="true">
                {person.name
                  .split(' ')
                  .map((p) => p[0])
                  .join('')}
              </div>
              <h3>{person.name}</h3>
              <p className="leader-card__title">{person.title}</p>
              <p>{person.bio}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--alt">
        <p className="section__eyebrow">Team</p>
        <h2 className="section__title">How we are organized</h2>
        <p className="section__lead">
          Pods combine strategy, UX, UI, full-stack engineering, QA, and analytics. You can later replace
          this block with headshots, disciplines, and office locations.
        </p>
        <div className="team-strip card">
          <div>
            <h3>Strategy &amp; Advisory</h3>
            <p>Principal consultants, solution architects, and engagement leads.</p>
          </div>
          <div>
            <h3>Product &amp; Design</h3>
            <p>Design directors, UX researchers, and brand designers.</p>
          </div>
          <div>
            <h3>Engineering</h3>
            <p>Full-stack engineers, DevOps, and quality analysts.</p>
          </div>
          <div>
            <h3>Growth</h3>
            <p>SEO, analytics engineers, and experimentation specialists.</p>
          </div>
        </div>
      </section>
    </>
  );
}
