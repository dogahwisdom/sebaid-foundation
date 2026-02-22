# SebAid Foundation — Official Website

Official website for **SebAid Foundation**: *Empowering Lives, Building Futures.* We bridge gaps in health, education, and opportunity across Ghana through health equity, skill development, and community support.

---

## Project overview

- **Stack:** React 19, TypeScript, Vite 6, Tailwind CSS 4, Motion
- **Purpose:** Public-facing site for programs, impact, events, media, and contact
- **Deploy:** Static build; designed for [Netlify](https://www.netlify.com/)

---

## Repository structure

```
sebaid-foundation/
├── public/           # Static assets (copied to dist as-is)
│   ├── _headers      # Security & CSP headers (Netlify)
│   ├── robots.txt    # Crawler rules
│   └── sitemap.xml   # Sitemap for SEO
├── src/
│   ├── components/   # React sections (Hero, Programs, Contact, etc.)
│   ├── App.tsx       # Main layout
│   ├── constants.ts  # Links, nav, programs, events, videos
│   ├── main.tsx
│   └── index.css     # Tailwind + base styles
├── index.html        # Entry HTML (SEO meta, OG, Twitter cards)
├── vite.config.ts
├── netlify.toml      # Netlify build & publish config
├── .env.example      # Env template (no secrets in repo)
└── README.md         # This file
```

---

## Prerequisites

- **Node.js** 18+ (recommended 20)
- **npm** (or yarn/pnpm)

---

## Run locally

1. **Clone and install**
   ```bash
   git clone https://github.com/dogahwisdom/sebaid-foundation.git
   cd sebaid-foundation
   npm install
   ```

2. **Environment (optional)**  
   For local runs you don’t need env vars. If you add server/API features later:
   - Copy `.env.example` to `.env.local`
   - Set only server-side or build-time secrets there — **never** expose API keys in client-side code.

3. **Start dev server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000).

---

## Scripts

| Command        | Description                |
|----------------|----------------------------|
| `npm run dev`  | Start dev server (port 3000) |
| `npm run build`| Production build → `dist/` |
| `npm run preview` | Preview production build |
| `npm run clean`| Remove `dist/`             |
| `npm run lint` | Type-check (`tsc --noEmit`) |

---

## Security

- **Headers:** `public/_headers` defines security headers on Netlify:
  - `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`
  - **Content-Security-Policy** to limit script/style/img/frame sources
- **Secrets:** No API keys or secrets in the front-end bundle. Use `.env.local` (gitignored) for any server/build-only keys.
- **Dependencies:** Run `npm audit` periodically and update dependencies as needed.

---

## SEO

- **Meta:** Title, description, keywords, canonical, theme-color in `index.html`.
- **Open Graph & Twitter:** OG and Twitter Card meta tags for rich previews.
- **Crawlers:** `public/robots.txt` allows all crawlers; `public/sitemap.xml` lists the main URL.
- **After deploy:** Replace `https://sebaid-foundation.netlify.app` in `public/robots.txt` and `public/sitemap.xml` with your real Netlify URL or custom domain.

---

## Deploy to Netlify

1. **Connect repo**
   - Log in to [Netlify](https://app.netlify.com).
   - **Add new site** → **Import an existing project** → choose **GitHub** and this repo.

2. **Build settings** (usually auto-detected from `netlify.toml`)
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Node version:** 20 (set in `netlify.toml` or in Netlify UI).

3. **Deploy**
   - Push to the connected branch (e.g. `main`); Netlify builds and deploys.
   - Optional: set a **custom domain** in Site settings → Domain management.

4. **Update SEO URLs**
   - Edit `public/robots.txt` and `public/sitemap.xml` and replace `https://sebaid-foundation.netlify.app` with your live site URL, then commit and push.

---

## Links

- **Website (after deploy):** your Netlify URL or custom domain  
- **Contact:** [info@sebaid.org](mailto:info@sebaid.org)  
- **Social:** See `src/constants.ts` for LinkedIn, Instagram, Facebook, YouTube.

---

## License

See repository license file (if present). Content and branding belong to SebAid Foundation.
