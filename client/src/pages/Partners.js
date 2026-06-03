import { Link } from 'react-router-dom';
import NewsletterForm from '../components/NewsletterForm.js';
import './Partners.css';

const tiers = [
  {
    title: 'Referral partners',
    text: 'Introduce clients who need delivery depth; we protect your relationship with transparent scopes.',
  },
  {
    title: 'Technology partners',
    text: 'Joint solutions across cloud, identity, analytics, and marketing automation with shared playbooks.',
  },
  {
    title: 'Agency collaborators',
    text: 'White-label engineering and performance remediation when your creative wins outgrow bandwidth.',
  },
];

export default function Partners() {
  return (
    <>
      <section className="section section--tight-top page-hero">
        <p className="section__eyebrow">Partner program</p>
        <h1 className="section__title">Structured collaboration, clean commercial boundaries.</h1>
        <p className="section__lead">
          Outpro.India partners with consultancies, agencies, and product vendors to deliver outcomes
          without channel conflict. Use this page to explain tiers, onboarding, and co-marketing rules.
        </p>
      </section>

      <section className="section section--alt">
        <div className="card-grid">
          {tiers.map((t) => (
            <article key={t.title} className="card">
              <h2>{t.title}</h2>
              <p>{t.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section__title">Partner onboarding (outline)</h2>
        <ol className="partners-steps">
          <li>Mutual NDA and light diligence on delivery references.</li>
          <li>Joint positioning session and conflict map (accounts, geos, industries).</li>
          <li>Enablement kit: capabilities deck, estimation templates, and security pack.</li>
          <li>Quarterly business reviews with pipeline transparency.</li>
        </ol>
        <div className="partners-cta card">
          <div>
            <h3>Request the partner pack</h3>
            <p className="section__lead partners-cta__lead">
              We route partner inquiries through the same API-backed contact form for auditability. Mention
              “partner program” in your notes.
            </p>
            <Link to="/contact" className="btn btn--primary">
              Contact partnerships
            </Link>
          </div>
          <div>
            <h3>Newsletter for partners</h3>
            <p className="section__lead partners-cta__lead">
              Optional Mailchimp sync: today this form persists to <code>server/data/newsletter.json</code>{' '}
              for demonstration.
            </p>
            <NewsletterForm source="partners" variant="on-light" />
          </div>
        </div>
      </section>
    </>
  );
}
