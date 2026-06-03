import './PageLoader.css';

export default function PageLoader() {
  return (
    <div className="page-loader" role="status" aria-live="polite">
      <span className="page-loader__dot" />
      <span className="page-loader__label">Loading</span>
    </div>
  );
}
