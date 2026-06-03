import { Link } from 'react-router-dom';
import LazyImage from '../components/LazyImage.js';
import { portfolioItems } from '../data/portfolio.js';
import './Portfolio.css';

export default function Portfolio() {
  return (
    <>
      <section className="section section--tight-top page-hero">
        <p className="section__eyebrow">Portfolio</p>
        <h1 className="section__title">Case studies with measurable outcomes.</h1>
        <p className="section__lead">
          Each project opens a dedicated case study with narrative, KPI highlights, technology tags, and a
          lazy-loaded gallery. Swap placeholder imagery for client-approved assets and CDN delivery.
        </p>
      </section>

      <section className="section section--pad-bottom">
        <div className="portfolio-grid">
          {portfolioItems.map((item, index) => (
            <article key={item.id} className="card portfolio-card">
              <Link to={`/portfolio/${item.slug}`} className="portfolio-card__media-link">
                <div className="portfolio-card__media">
                  <LazyImage
                    src={`https://picsum.photos/seed/outpro-portfolio-${item.id}/640/400`}
                    alt={item.imageAlt}
                    width={640}
                    height={400}
                  />
                  <span className="portfolio-card__badge">{item.sector}</span>
                </div>
              </Link>
              <div className="portfolio-card__body">
                <h2>
                  <Link to={`/portfolio/${item.slug}`}>{item.title}</Link>
                </h2>
                <p>{item.summary}</p>
                <div className="portfolio-card__kpis">
                  {item.kpis.map((k) => (
                    <div key={k.label} className="portfolio-kpi">
                      <span className="portfolio-kpi__value">{k.value}</span>
                      <span className="portfolio-kpi__label">{k.label}</span>
                    </div>
                  ))}
                </div>
                {index === 0 ? (
                  <p className="portfolio-card__note">
                    Optional: embed a hosted video walkthrough on the case page beneath the gallery.
                  </p>
                ) : null}
                <Link className="btn btn--primary portfolio-card__cta" to={`/portfolio/${item.slug}`}>
                  View case study
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
