import { Link, useParams } from 'react-router-dom';
import { getServiceBySlug } from '../data/services.js';
import ServiceIcon from '../components/ServiceIcon.js';
import './ServiceDetail.css';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <section className="section section--tight-top">
        <h1>Service not found</h1>
        <p>The requested service does not exist.</p>
        <Link to="/services" className="btn btn--primary">
          Back to services
        </Link>
      </section>
    );
  }

  return (
    <>
      <section className="section section--tight-top service-detail-hero">
        <Link to="/services" className="back-link">
          ← All services
        </Link>
        <div className="service-detail-hero__row">
          <ServiceIcon name={service.icon} className="service-detail-hero__icon" />
          <div>
            <p className="section__eyebrow">Service</p>
            <h1>{service.title}</h1>
            <p className="section__lead">{service.short}</p>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="detail-layout card">
          <div>
            <h2>Overview</h2>
            <p>{service.detail}</p>
          </div>
          <div>
            <h2>Typical deliverables</h2>
            <ul className="detail-list">
              {service.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <Link to="/contact" className="btn btn--primary">
              Discuss this service
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
