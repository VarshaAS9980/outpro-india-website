import { copyFile, mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = resolve(__dirname, '..', 'dist');
const source = resolve(distDir, 'index.html');
const target = resolve(distDir, '404.html');

try {
  await mkdir(distDir, { recursive: true });
  await copyFile(source, target);
  console.log('Created 404.html fallback for GitHub Pages.');
} catch (error) {
  console.error('Failed to create 404 fallback:', error);
  process.exit(1);
}
