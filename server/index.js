import express from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import apiRouter from './routes/api.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 4000;
const distPath = path.join(__dirname, '../client/dist');
const distExists = fs.existsSync(path.join(distPath, 'index.html'));

app.use(cors({ origin: true }));
app.use(express.json({ limit: '96kb' }));

app.use('/api', apiRouter);

app.use('/api', (req, res) => {
  res.status(404).json({ error: 'Not found' });
});

if (distExists) {
  app.use(express.static(distPath, { index: false, maxAge: '7d' }));
  app.get('*', (req, res, next) => {
    return res.sendFile(path.join(distPath, 'index.html'), (err) => {
      if (err) next(err);
    });
  });
}

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error.' });
});

app.listen(PORT, () => {
  console.log(`Outpro.India API listening on http://localhost:${PORT}`);
  if (!distExists) {
    console.log('Tip: run `npm run build` in /client, then restart to serve the SPA from this process.');
  }
});
