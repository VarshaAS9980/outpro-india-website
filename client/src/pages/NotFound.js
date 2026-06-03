import { Link } from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {
  return (
    <section className="section not-found">
      <p className="section__eyebrow">404</p>
      <h1>Page not found</h1>
      <p className="section__lead">The URL may have changed, or the page may have been removed.</p>
      <div className="not-found__actions">
        <Link to="/" className="btn btn--primary">
          Return home
        </Link>
        <Link to="/contact" className="btn btn--ghost">
          Contact
        </Link>
      </div>
      <nav className="not-found__nav" aria-label="Popular destinations">
        <Link to="/services">Services</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/careers">Careers</Link>
      </nav>
    </section>
  );
}
