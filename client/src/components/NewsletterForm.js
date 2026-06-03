import { useState } from 'react';
import './NewsletterForm.css';

export default function NewsletterForm({ source = 'footer', compact = false, variant = 'on-dark' }) {
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    setStatus('loading');
    setMessage('');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'Request failed');
      setStatus('success');
      setMessage('Subscribed. Check your inbox for confirmation (when Mailchimp is connected).');
      form.reset();
    } catch (err) {
      setStatus('error');
      setMessage(err.message || 'Could not subscribe.');
    }
  }

  return (
    <form
      className={`newsletter-form ${compact ? 'newsletter-form--compact' : ''} ${
        variant === 'on-light' ? 'newsletter-form--on-light' : ''
      }`.trim()}
      onSubmit={handleSubmit}
    >
      <label className="newsletter-form__label">
        <span className="sr-only">Email</span>
        <input name="email" type="email" required placeholder="Work email" autoComplete="email" />
      </label>
      <button type="submit" className="btn btn--primary" disabled={status === 'loading'}>
        {status === 'loading' ? '…' : 'Subscribe'}
      </button>
      {message ? (
        <p className={`newsletter-form__msg newsletter-form__msg--${status}`}>{message}</p>
      ) : null}
    </form>
  );
}
