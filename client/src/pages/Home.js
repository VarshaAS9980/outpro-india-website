import { Link } from 'react-router-dom';
import LazyImage from '../components/LazyImage.js';
import ContactForm from '../components/ContactForm.js';
import { services } from '../data/services.js';
import { portfolioItems } from '../data/portfolio.js';
import { textTestimonials } from '../data/testimonials.js';
import { keyMetrics } from '../data/metrics.js';
import ServiceIcon from '../components/ServiceIcon.js';
import './Home.css';

export default function Home() {
  const featuredServices = services.slice(0, 3);
  const featuredProject = portfolioItems[0];
  const homeTestimonials = textTestimonials.slice(0, 2);

  return (
    <>
      <section className="hero">
        <div className="hero__inner section">
          <div className="hero__copy">
            <p className="section__eyebrow">Outpro.India</p>
            <h1>Corporate digital presence that converts attention into trust.</h1>
            <p className="hero__lead">
              Strategy, design, and engineering under one roof—optimized for speed, accessibility, and
              the metrics your board cares about.
            </p>
            <div className="hero__actions">
              <Link to="/services" className="btn btn--primary">
                View services
              </Link>
              <Link to="/portfolio" className="btn btn--ghost">
                See work
              </Link>
            </div>
            <ul className="hero__metrics" aria-label="Key metrics">
              {keyMetrics.map((m) => (
                <li key={m.label}>
                  <strong>{m.value}</strong>
                  <span>{m.label}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="hero__visual" aria-hidden="true">
            <div className="hero__orb" />
            <div className="hero__panel">
              <span className="hero__panel-label">Delivery health</span>
              <div className="hero__panel-row">
                <span>Velocity</span>
                <span className="hero__panel-pill">On track</span>
              </div>
              <div className="hero__panel-row">
                <span>Core Web Vitals</span>
                <span className="hero__panel-pill hero__panel-pill--accent">Green</span>
              </div>
              <div className="hero__panel-row">
                <span>Stakeholder NPS</span>
                <span className="hero__panel-pill">+62</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <p className="section__eyebrow">Services overview</p>
        <h2 className="section__title">What we deliver</h2>
        <p className="section__lead">
          Modular squads across strategy, experience, engineering, and growth—structured so you can
          scale scope without losing governance.
        </p>
        <div className="card-grid">
          {featuredServices.map((s) => (
            <article key={s.slug} className="card home-service-card">
              <ServiceIcon name={s.icon} className="home-service-card__icon" />
              <h3>{s.title}</h3>
              <p>{s.short}</p>
              <Link to={`/services/${s.slug}`} className="home-service-card__link">
                Service detail →
              </Link>
            </article>
          ))}
        </div>
        <div className="section__footer-link">
          <Link to="/services" className="btn btn--ghost">
            All services
          </Link>
        </div>
      </section>

      <section className="section section--alt">
        <div className="split">
          <div>
            <p className="section__eyebrow">Featured portfolio</p>
            <h2 className="section__title">{featuredProject.title}</h2>
            <p className="section__lead">{featuredProject.summary}</p>
            <ul className="kpi-list">
              {featuredProject.kpis.map((k) => (
                <li key={k.label}>
                  <span className="kpi-list__value">{k.value}</span>
                  <span className="kpi-list__label">{k.label}</span>
                </li>
              ))}
            </ul>
            <div className="hero__actions">
              <Link to={`/portfolio/${featuredProject.slug}`} className="btn btn--primary">
                Open featured case study
              </Link>
              <Link to="/portfolio" className="btn btn--ghost">
                All case studies
              </Link>
            </div>
          </div>
          <div className="split__media">
            <LazyImage
              src={`https://picsum.photos/seed/outpro-${featuredProject.id}/720/480`}
              alt={featuredProject.imageAlt}
              width={720}
              height={480}
              className="split__image"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <p className="section__eyebrow">Testimonials</p>
        <h2 className="section__title">Trusted by operating leaders</h2>
        <div className="card-grid">
          {homeTestimonials.map((t) => (
            <blockquote key={t.id} className="card quote-card">
              <p className="quote-card__text">“{t.quote}”</p>
              <footer>
                <strong>{t.name}</strong>
                <div className="quote-card__meta">
                  {t.role} · {t.company}
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
        <div className="section__footer-link">
          <Link to="/testimonials" className="btn btn--ghost">
            More testimonials
          </Link>
        </div>
      </section>

      <section id="contact" className="section section--contact">
        <div className="contact-panel card">
          <div>
            <p className="section__eyebrow">Call to action</p>
            <h2 className="section__title">Plan your next release with confidence.</h2>
            <p className="section__lead">
              Share context—we will respond with a concise engagement outline and timeline. This demo
              form posts to the Node API (`/api/contact`).
            </p>
          </div>
          <ContactForm source="home" submitLabel="Request follow-up" />
        </div>
        <p className="section__footer-link section__footer-link--center">
          <Link to="/contact" className="btn btn--ghost">
            Full contact &amp; office details
          </Link>
        </p>
      </section>
    </>
  );
}
