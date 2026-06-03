import { textTestimonials, videoTestimonials } from '../data/testimonials.js';
import './Testimonials.css';

export default function Testimonials() {
  return (
    <>
      <section className="section section--tight-top page-hero">
        <p className="section__eyebrow">Testimonials</p>
        <h1 className="section__title">Proof from teams who run serious programs.</h1>
        <p className="section__lead">
          Combine written endorsements with hosted video for higher trust transfer. Below mirrors a
          structure suitable for CMS-managed entries.
        </p>
      </section>

      <section className="section">
        <h2 className="section__title">Written testimonials</h2>
        <div className="card-grid">
          {textTestimonials.map((t) => (
            <blockquote key={t.id} className="card quote-card quote-card--large">
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
      </section>

      <section className="section section--alt section--pad-bottom">
        <h2 className="section__title">Video testimonials</h2>
        <p className="section__lead">
          Replace placeholders with iframe embeds (YouTube/Vimeo) or a lightweight video CDN. Keep
          captions enabled for accessibility.
        </p>
        <div className="video-grid">
          {videoTestimonials.map((v) => (
            <article key={v.id} className="card video-card">
              <div className="video-card__frame" role="img" aria-label={v.title}>
                <span className="video-card__play">▶</span>
              </div>
              <div className="video-card__body">
                <h3>{v.title}</h3>
                <p className="video-card__duration">Duration: {v.duration}</p>
                <p className="video-card__note">{v.note}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
