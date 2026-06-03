# Database schema (reference)

Today, leads and newsletter signups append to JSON files under `server/data/`. For production, map the same payloads to relational tables or a document store.

## PostgreSQL-style schema

```sql
CREATE TABLE leads (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
  name          VARCHAR(200) NOT NULL,
  email         VARCHAR(200) NOT NULL,
  company       VARCHAR(200),
  notes         TEXT NOT NULL,
  source        VARCHAR(120)
);

CREATE INDEX leads_created_at_idx ON leads (created_at DESC);

CREATE TABLE newsletter_subscribers (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
  email         VARCHAR(200) NOT NULL,
  source        VARCHAR(120)
);

CREATE UNIQUE INDEX newsletter_subscribers_email_lower_idx
  ON newsletter_subscribers (lower(email));
```

## MongoDB (sketch)

- Collection `leads`: documents `{ name, email, company, notes, source, createdAt }`.
- Collection `newsletter_subscribers`: documents `{ email, source, createdAt }` with unique index on normalized `email`.

Wire `appendLead` / `appendSubscriber` equivalents in `server/routes/api.js` when the database is provisioned.
