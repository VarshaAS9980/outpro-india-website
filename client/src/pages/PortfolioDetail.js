import { Link, useParams } from 'react-router-dom';
import LazyImage from '../components/LazyImage.js';
import { getPortfolioBySlug } from '../data/portfolio.js';
import './PortfolioDetail.css';

export default function PortfolioDetail() {
  const { slug } = useParams();
  const item = getPortfolioBySlug(slug);

  if (!item) {
    return (
      <section className="section section--tight-top">
        <h1>Case study not found</h1>
        <Link to="/portfolio" className="btn btn--primary">
          Back to portfolio
        </Link>
      </section>
    );
  }

  return (
    <>
      <section className="section section--tight-top case-hero">
        <Link to="/portfolio" className="back-link">
          ← Portfolio
        </Link>
        <p className="section__eyebrow">{item.sector}</p>
        <h1>{item.title}</h1>
        <p className="section__lead">{item.summary}</p>
        <ul className="kpi-list">
          {item.kpis.map((k) => (
            <li key={k.label}>
              <span className="kpi-list__value">{k.value}</span>
              <span className="kpi-list__label">{k.label}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="section section--alt">
        <div className="case-split">
          <div>
            <h2>Challenge</h2>
            <p>{item.challenge}</p>
            <h2>Approach</h2>
            <p>{item.approach}</p>
            <h2>Outcome</h2>
            <p>{item.outcome}</p>
          </div>
          <aside className="card case-aside">
            <h3>Technology</h3>
            <ul className="case-aside__tags">
              {item.techStack.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            {item.clientQuote ? (
              <>
                <h3>Client voice</h3>
                <blockquote className="case-quote">“{item.clientQuote}”</blockquote>
              </>
            ) : null}
            <Link to="/contact" className="btn btn--primary case-aside__cta">
              Discuss a similar program
            </Link>
          </aside>
        </div>
      </section>

      <section className="section section--pad-bottom">
        <h2 className="section__title">Gallery</h2>
        <p className="section__lead">
          Replace remote placeholders with compressed WebP/AVIF in your CDN bucket; keep aspect ratios
          explicit to protect CLS.
        </p>
        <div className="case-gallery">
          {item.gallery.map((g) => (
            <figure key={g.seed} className="case-gallery__item">
              <LazyImage
                src={`https://picsum.photos/seed/${g.seed}/800/520`}
                alt={g.alt}
                width={800}
                height={520}
                className="case-gallery__img"
              />
              <figcaption>{g.alt}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
