import { useState } from 'react';
import './ContactForm.css';

export default function ContactForm({ source = 'contact-page', submitLabel = 'Send message' }) {
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const payload = {
      name: form.name.value,
      email: form.email.value,
      company: form.company.value,
      notes: form.notes.value,
      source,
    };
    setStatus('loading');
    setMessage('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'Request failed');
      setStatus('success');
      setMessage('Thank you—we received your message.');
      form.reset();
    } catch (err) {
      setStatus('error');
      setMessage(err.message || 'Something went wrong.');
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label className="contact-form__field">
        <span>Name</span>
        <input name="name" type="text" required autoComplete="name" />
      </label>
      <label className="contact-form__field">
        <span>Work email</span>
        <input name="email" type="email" required autoComplete="email" />
      </label>
      <label className="contact-form__field">
        <span>Company</span>
        <input name="company" type="text" autoComplete="organization" />
      </label>
      <label className="contact-form__field contact-form__field--full">
        <span>Project notes</span>
        <textarea name="notes" rows={4} required />
      </label>
      <div className="contact-form__actions">
        <button type="submit" className="btn btn--primary" disabled={status === 'loading'}>
          {status === 'loading' ? 'Sending…' : submitLabel}
        </button>
        {message ? <p className={`contact-form__status contact-form__status--${status}`}>{message}</p> : null}
      </div>
    </form>
  );
}
