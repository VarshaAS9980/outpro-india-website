import { Link } from 'react-router-dom';
import { openings } from '../data/careers.js';
import './Careers.css';

export default function Careers() {
  return (
    <>
      <section className="section section--tight-top page-hero">
        <p className="section__eyebrow">Careers</p>
        <h1 className="section__title">Build with teams who respect craft and calendars.</h1>
        <p className="section__lead">
          We hire principals and makers across strategy, design, engineering, and program leadership.
          Listings below are representative—connect for active openings and referral paths.
        </p>
      </section>

      <section className="section section--pad-bottom">
        <div className="careers-grid">
          {openings.map((job) => (
            <article key={job.id} className="card careers-card">
              <p className="careers-card__badge">
                {job.type} · {job.location}
              </p>
              <h2>{job.title}</h2>
              <p>{job.summary}</p>
              <h3 className="careers-card__sub">Responsibilities</h3>
              <ul>
                {job.responsibilities.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
              <Link to="/contact" className="btn btn--primary careers-card__cta">
                Apply via contact
              </Link>
            </article>
          ))}
        </div>
        <p className="section__lead careers-footnote">
          When you move to an ATS (Greenhouse, Lever, Ashby), embed listings here or link out while
          preserving this route for SEO continuity.
        </p>
      </section>
    </>
  );
}
