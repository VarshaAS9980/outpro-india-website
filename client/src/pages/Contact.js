import ContactForm from '../components/ContactForm.js';
import './Contact.css';

export default function Contact() {
  return (
    <>
      <section className="section section--tight-top page-hero">
        <p className="section__eyebrow">Contact</p>
        <h1 className="section__title">Tell us what “done” looks like on your roadmap.</h1>
        <p className="section__lead">
          This page centralizes lead capture for sales, partnerships, and careers. Wire the same endpoint
          to HubSpot or Zoho when your CRM contract is finalized.
        </p>
      </section>

      <section className="section section--pad-bottom">
        <div className="contact-layout">
          <div className="card contact-aside">
            <h2>Offices</h2>
            <p>
              <strong>India HQ (placeholder)</strong>
              <br />
              Business district address line 1
              <br />
              City, State — PIN
            </p>
            <h2>Channels</h2>
            <p>
              hello@outpro.india
              <br />
              +91 (000) 000-0000
            </p>
            <h2>Integrations checklist</h2>
            <ul className="contact-aside__list">
              <li>GA4 + Search Console verified domain</li>
              <li>CRM field mapping for `/api/contact`</li>
              <li>Optional: Tawk.to / Crisp snippet in `client/index.html`</li>
              <li>Optional: Mailchimp audience for `/api/newsletter`</li>
            </ul>
          </div>
          <div className="card contact-main">
            <h2>Project inquiry</h2>
            <p className="section__lead contact-main__lead">
              Submissions persist to <code>server/data/leads.json</code> in this reference implementation.
            </p>
            <ContactForm source="contact-page" submitLabel="Submit inquiry" />
          </div>
        </div>
      </section>
    </>
  );
}
