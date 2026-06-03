# Integrations checklist

## Google Analytics 4 (GA4)

1. Create a GA4 property and web data stream.
2. Uncomment the snippet in `client/index.html` and set your `G-` measurement ID.
3. Define a concise **event taxonomy** (see sample posts under `/blog` for guidance).
4. Use **consent mode** where legally required.

## Google Search Console

1. Verify domain ownership (DNS TXT or HTML file).
2. Submit `https://www.outpro.india/sitemap.xml` (update hostnames in `client/public/sitemap.xml` and `robots.txt` to match production).
3. Monitor **Core Web Vitals** and coverage reports after launch.

## HubSpot / Zoho CRM

- Map `/api/contact` fields to CRM objects (Contact / Lead / Deal).
- Options: server-side API push on submit, or replace the form with the vendor’s embedded form while preserving styling in a wrapper component.

## Live chat (Tawk.to / Crisp)

- Paste the vendor script before `</body>` in `client/index.html` (placeholder comment is present).
- Load chat **after** consent if your policy requires it.

## Newsletter (Mailchimp)

- Replace `appendSubscriber` persistence with Mailchimp Marketing API or a double opt-in flow.
- Keep `source` to segment partner vs footer subscribers.
