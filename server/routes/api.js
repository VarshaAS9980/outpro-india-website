import { Router } from 'express';
import { appendLead, appendSubscriber } from '../lib/jsonStore.js';

const router = Router();

router.get('/health', (_req, res) => {
  res.json({ ok: true, service: 'outpro-india-api' });
});

router.post('/contact', async (req, res) => {
  const { name, email, company, notes, source } = req.body || {};
  if (!name || !email || !notes) {
    return res.status(400).json({ error: 'Name, email, and project notes are required.' });
  }
  const row = {
    name: String(name).slice(0, 200),
    email: String(email).slice(0, 200),
    company: company ? String(company).slice(0, 200) : '',
    notes: String(notes).slice(0, 8000),
    source: source ? String(source).slice(0, 120) : 'unknown',
  };
  try {
    await appendLead(row);
  } catch (err) {
    console.error('[contact] persist failed', err);
    return res.status(500).json({ error: 'Could not save your message. Please try again later.' });
  }
  console.log('[contact]', { email: row.email, source: row.source });
  return res.json({ ok: true });
});

router.post('/newsletter', async (req, res) => {
  const { email, source } = req.body || {};
  if (!email) {
    return res.status(400).json({ error: 'Email is required.' });
  }
  const row = {
    email: String(email).slice(0, 200),
    source: source ? String(source).slice(0, 120) : 'unknown',
  };
  try {
    await appendSubscriber(row);
  } catch (err) {
    console.error('[newsletter] persist failed', err);
    return res.status(500).json({ error: 'Could not subscribe right now. Please try again later.' });
  }
  console.log('[newsletter]', row.email);
  return res.json({ ok: true });
});

export default router;
