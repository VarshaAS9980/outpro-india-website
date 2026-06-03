# User manual — editing content and pages

## Where content lives (current build)

| Area | File(s) |
|------|---------|
| Global look (colors, fonts) | `client/src/index.css` (`:root` variables) |
| Services list + detail copy | `client/src/data/services.js` |
| Portfolio + case studies | `client/src/data/portfolio.js` |
| Testimonials | `client/src/data/testimonials.js` |
| Blog posts | `client/src/data/blog.js` |
| Careers | `client/src/data/careers.js` |
| Home metrics | `client/src/data/metrics.js` |

## Adding a new service

1. Open `client/src/data/services.js`.
2. Add an object with `slug`, `title`, `short`, `icon`, `bullets`, and `detail`. Use an existing `icon` key: `compass`, `layers`, `code`, `pen`, `chart`, or `shield` (see `ServiceIcon.js`).
3. The route `/services/:slug` is generated automatically.

## Adding a portfolio case study

1. Add an entry to `client/src/data/portfolio.js` with `slug`, narrative fields, `kpis`, `gallery`, and `techStack`.
2. Link it from the home page if you want it featured (`Home.js` uses the first item by default).
3. Append the new URL to `client/public/sitemap.xml` for SEO.

## Adding a blog article

1. Append to `blogPosts` in `client/src/data/blog.js`.
2. Add the URL to `sitemap.xml`.

## Adding a top-level page

1. Create `client/src/pages/YourPage.js` (+ optional `YourPage.css`).
2. Register a lazy route in `client/src/App.js`.
3. Add navigation links in `Navbar.js` and `Footer.js` as needed.

## Forms

- **Contact** submissions hit `POST /api/contact` with JSON `{ name, email, company, notes, source }`.
- **Newsletter** uses `POST /api/newsletter` with `{ email, source }`.
- Locally, responses are stored under `server/data/` (see `.gitignore`).

## Building after edits

From `client/`, run `npm run build` before deploying static assets or restarting the Node server that serves `client/dist`.
