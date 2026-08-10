# Claims AI Accelerator — Celsior

Healthcare intelligence platform for email campaign embedding. Interactive ROI calculator with HubSpot form integration.

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo
3. Vercel auto-detects static HTML — no build settings needed
4. Click Deploy

Your app will be live at `https://your-repo-name.vercel.app`

## Before going live

Replace the two logo placeholders in `index.html`:

| Line | Placeholder | Replace with |
|------|-------------|--------------|
| 257 | `CELSIOR_FULLCOLOR_URL` | HubSpot CDN URL of `2024_RGB_Celsior-FullColor.png` |
| 560 | `CELSIOR_WHITE_URL` | HubSpot CDN URL of `2024_RGB_Celsior-White.png` |

## HubSpot

- Portal ID: `40221584`
- Form ID: `0d11d9a3-0aa2-4ec2-acde-64587ae838e3`
- Hidden field `lead_source_intent` is injected automatically per CTA click

## Embed in email

Use an HTML button or linked image in your email campaign pointing to your Vercel URL. Works in any email client that allows external links.

## Files

```
index.html     → Full single-page app
vercel.json    → Vercel deployment config
README.md      → This file
```
