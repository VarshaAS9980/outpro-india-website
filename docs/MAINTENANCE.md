# Maintenance plan

## Cadence

| Activity | Frequency |
|----------|-----------|
| Dependency updates (`npm audit`, minor bumps) | Monthly |
| Security patches (Node LTS, transitive CVEs) | As released |
| Accessibility regression pass (keyboard, contrast) | Each major UI change |
| Performance budget review (LCP, INP, CLS) | Quarterly |
| Backup verification (DB or JSON exports) | Weekly in production |

## Backups

- If using JSON files, archive `server/data/*.json` to encrypted object storage on a schedule.
- If using a database, enable automated snapshots and test restores quarterly.

## Incident response

1. Triage severity (site down vs degraded vs data issue).
2. Roll back the last deployment or toggle feature flags if applicable.
3. Patch and redeploy; document root cause in a post-incident note.

## Bug workflow

- Reproduce on staging with the same Node version as production.
- Add a regression check (manual or automated) before closing the ticket.

## Ownership

- Assign a **primary** and **secondary** owner for DNS, hosting, GA4/GSC, and CRM integrations.
