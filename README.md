# Outpro.India — Corporate Digital Presence (complete reference build)

Single repository covering the **full module list** from your brief: core marketing pages, **portfolio case studies with detail views**, **blog** (list + article), **careers**, **partner program**, **dedicated contact**, **testimonials** (text + video placeholders), **scalable routing**, **Node API** with **JSON persistence** (swappable for MySQL/PostgreSQL/Mongo), **lazy-loaded** images, **code-split** routes, **SEO** (`robots.txt`, `sitemap.xml`), and **handover documentation** under `docs/`.

**Stack:** React **`.js` only** (no TypeScript), HTML, CSS, Vite · Node.js **Express** · optional file store → database.

## Repository layout

| Path | Role |
|------|------|
| `client/` | React SPA, static data modules, styles, public assets |
| `server/` | Express API, JSON store under `server/data/` |
| `docs/` | Architecture, database reference, integrations, user manual, maintenance |

## Prerequisites

- **Node.js 18+** (LTS recommended). Ensure `node` and `npm` are on your `PATH` in PowerShell.

## Install

```powershell
cd C:\Users\Darshan\outpro-india-website\client
npm install
cd ..\server
npm install
```

## Local development

**Terminal A — API**

```powershell
cd C:\Users\Darshan\outpro-india-website\server
npm run dev
```

**Terminal B — client (Vite proxies `/api` → port 4000)**

```powershell
cd C:\Users\Darshan\outpro-india-website\client
npm run dev
```

Open the URL Vite prints (typically `http://localhost:5173`).

## Production

```powershell
cd C:\Users\Darshan\outpro-india-website\client
npm run build
cd ..\server
npm start
```

The server serves `client/dist` and `/api/*` on the same port. Place the stack behind **HTTPS** (reverse proxy or platform TLS). Put **Cloudflare / Akamai** in front for CDN caching and PageSpeed gains.

## GitHub Actions + GitHub Pages deployment

This repository includes a standard GitHub Actions workflow at `.github/workflows/deploy-gh-pages.yml` that:

- checks out the repository
- installs dependencies for the `client/` app
- builds the Vite client
- publishes the generated `client/dist` folder to the `gh-pages` branch

The project is configured for GitHub Pages at:

- `https://DarshanMS8197.github.io/outpro-india-website/`

GitHub Pages is designed to host your personal, organization, or project pages from a GitHub repository.

When the repository Pages setting is active, GitHub should show a message like:

> Your site is live at `https://DarshanMS8197.github.io/outpro-india-website/`

This project also includes a GitHub Pages SPA fallback so direct links like `/services`, `/portfolio`, and `/blog` work correctly.

How it works:

1. Push to `main`.
2. GitHub Actions runs the `GitHub Pages Deploy` workflow.
3. The workflow builds the app and deploys the static files.
4. GitHub Pages serves the site from the `gh-pages` branch.

To activate it in GitHub:

- Open repository `Settings` → `Pages`
- Set the source to `gh-pages` branch
- Set the folder to `/ (root)`
- Save and wait a few minutes for the site to publish

If the workflow fails with a `403` permission error when pushing to `gh-pages`:

- open repository `Settings` → `Actions` → `General`
- ensure `GitHub Actions permissions` allows `Read and write permissions`
- if your org requires it, allow `Workflow permissions` for this repository

If you want to change the deployment branch, update the workflow `publish_branch` value and the Pages source setting accordingly.

## API endpoints

| Method | Path | Purpose |
|--------|------|---------|
| GET | `/api/health` | Liveness |
| POST | `/api/contact` | Lead capture → `server/data/leads.json` |
| POST | `/api/newsletter` | Newsletter opt-in → `server/data/newsletter.json` |

Payload shapes are documented in `docs/USER_MANUAL.md`.

## Deliverables mapping (RFP)

| Deliverable | Location |
|-------------|----------|
| Source code | This repository |
| Architecture + tech overview | `docs/ARCHITECTURE.md` |
| Database schema (reference) | `docs/DATABASE.md` |
| User manual (editing content) | `docs/USER_MANUAL.md` |
| Maintenance plan | `docs/MAINTENANCE.md` |
| Integrations (GA4, GSC, CRM, chat, Mailchimp) | `docs/INTEGRATIONS.md` |
| Live site | Your hosting pipeline (Vercel/Netlify static + serverless API, or Node on AWS/GCP/Azure) |

## Brand and Figma

Replace placeholder palette in `client/src/index.css` and swap copy or imagery once **approved Figma** assets are delivered.
