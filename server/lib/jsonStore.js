import fs from 'fs/promises';
import path from 'path';
import { randomUUID } from 'crypto';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.join(__dirname, '../data');

async function readJsonArray(fileName) {
  const filePath = path.join(DATA_DIR, fileName);
  try {
    const raw = await fs.readFile(filePath, 'utf8');
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

async function writeJsonArray(fileName, rows) {
  await fs.mkdir(DATA_DIR, { recursive: true });
  const filePath = path.join(DATA_DIR, fileName);
  await fs.writeFile(filePath, JSON.stringify(rows, null, 2), 'utf8');
}

export async function appendLead(entry) {
  const rows = await readJsonArray('leads.json');
  rows.push({
    id: randomUUID(),
    createdAt: new Date().toISOString(),
    ...entry,
  });
  await writeJsonArray('leads.json', rows);
}

export async function appendSubscriber(entry) {
  const rows = await readJsonArray('newsletter.json');
  rows.push({
    id: randomUUID(),
    createdAt: new Date().toISOString(),
    ...entry,
  });
  await writeJsonArray('newsletter.json', rows);
}
