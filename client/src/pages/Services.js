import { Link } from 'react-router-dom';
import { services } from '../data/services.js';
import ServiceIcon from '../components/ServiceIcon.js';
import './Services.css';

export default function Services() {
  return (
    <>
      <section className="section section--tight-top page-hero">
        <p className="section__eyebrow">Services</p>
        <h1 className="section__title">Capability depth without vendor sprawl.</h1>
        <p className="section__lead">
          Each service below opens a dedicated detail page with iconography, scope notes, and
          representative outcomes. Content is data-driven for easy CMS migration later.
        </p>
      </section>

      <section className="section section--pad-bottom">
        <div className="services-grid">
          {services.map((s) => (
            <article key={s.slug} className="card service-card">
              <div className="service-card__head">
                <ServiceIcon name={s.icon} />
                <h2>{s.title}</h2>
              </div>
              <p>{s.short}</p>
              <ul className="service-card__bullets">
                {s.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <Link className="btn btn--primary service-card__cta" to={`/services/${s.slug}`}>
                View detail
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
