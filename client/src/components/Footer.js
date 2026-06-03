import { Link } from 'react-router-dom';
import NewsletterForm from './NewsletterForm.js';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__newsletter card">
        <div>
          <h3 className="site-footer__heading">Insights newsletter</h3>
          <p className="site-footer__newsletter-copy">
            Product updates, playbooks, and event invites. Connect Mailchimp or another ESP on the server
            when ready.
          </p>
        </div>
        <NewsletterForm source="footer" />
      </div>

      <div className="site-footer__grid">
        <div>
          <div className="site-footer__brand">Outpro.India</div>
          <p className="site-footer__tagline">
            Corporate digital presence, engineered for credibility, performance, and scale.
          </p>
        </div>
        <div>
          <h3 className="site-footer__heading">Company</h3>
          <ul className="site-footer__links">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/testimonials">Testimonials</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="site-footer__heading">Grow</h3>
          <ul className="site-footer__links">
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/careers">Careers</Link>
            </li>
            <li>
              <Link to="/partners">Partners</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="site-footer__heading">Contact</h3>
          <p className="site-footer__contact">
            hello@outpro.india
            <br />
            +91 (000) 000-0000
          </p>
          <p className="site-footer__fineprint">
            Replace placeholders with production details. Forms write to <code>server/data/</code> in
            this build.
          </p>
        </div>
      </div>
      <div className="site-footer__bar">
        <span>© {new Date().getFullYear()} Outpro.India. All rights reserved.</span>
        <span className="site-footer__bar-note">GA4 · Search Console · optional CRM &amp; live chat</span>
      </div>
    </footer>
  );
}
