# SEBaid Foundation — Official Website

Official website for **SEBaid Foundation**: *Empowering Communities, Driving Change.* We bridge gaps in health, education, and opportunity across Ghana through health equity, skill development, and community support.

---

## Project overview

- **Stack:** React 19, TypeScript, Vite 6, Tailwind CSS 4, Motion
- **Purpose:** Public-facing site for programs, impact, events, media, and contact
- **Deploy:** Static build; designed for [Netlify](https://www.netlify.com/)

---

## Repository structure

See repo root. Key: `public/_headers` (security), `public/robots.txt`, `public/sitemap.xml`, `netlify.toml`, `index.html` (SEO).

---

## Prerequisites

Node.js 18+ (recommended 20), npm.

## Run locally

```bash
git clone https://github.com/dogahwisdom/sebaid-foundation.git
cd sebaid-foundation
npm install
npm run dev
```
Open http://localhost:3000

## Scripts

- `npm run dev` — dev server (port 3000)
- `npm run build` — production build → dist/
- `npm run preview` — preview build
- `npm run lint` — tsc --noEmit

## Security

- Headers in `public/_headers` (CSP, X-Frame-Options, etc.) on Netlify.
- No API keys in client bundle; use `.env.local` (gitignored) for server/build secrets.

## SEO

Meta, Open Graph, Twitter cards in `index.html`. Crawlers: `robots.txt`, `sitemap.xml`. After deploy, set your Netlify URL in those files.

## Deploy to Netlify

1. Netlify → Add new site → Import from GitHub → select this repo.
2. Build command: `npm run build`, Publish: `dist`, Node 20.
3. Deploy on push. Optionally set custom domain.

## Links

Contact: info@sebaid.org. Social: see `src/constants.ts`.
