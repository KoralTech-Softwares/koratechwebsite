# Koraltech Softwares Website

Production-ready Next.js 14 website for [Koraltech Softwares](https://www.koraltech.in) — IT consulting, AWS cloud services, and AI integration based in Bengaluru, India.

## Tech Stack

- **Framework:** Next.js 14 (App Router, SSR)
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Language:** TypeScript

## Features

- Server-side rendered pages for SEO and AI agent crawlability
- JSON-LD structured data (Corporation, ProfessionalService, TechArticle)
- AI agent discovery files (`/ai-plugin.json`, `/.well-known/ai-agents.txt`)
- Interactive AI Solution Estimator
- Hybrid Semantic Search Bar
- Programmatic meta tags and sitemap

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production Build

```bash
npm run build
npm start
```

## Deploy

Optimized for Vercel, AWS Amplify, or any Node.js hosting platform.

## Project Structure

```
src/
├── app/                  # App Router pages & layout
│   ├── layout.tsx        # Root layout with JSON-LD
│   ├── page.tsx          # Home page
│   ├── services/         # Services page
│   ├── about/            # About page
│   ├── contact/          # Contact page
│   └── sitemap.ts        # Dynamic sitemap
├── components/           # UI components
│   ├── Hero.tsx
│   ├── ServicesGrid.tsx
│   ├── AICapabilities.tsx
│   ├── SolutionEstimator.tsx
│   ├── SemanticSearchBar.tsx
│   └── ...
└── lib/                  # Utilities
    ├── structured-data.ts
    ├── metadata.ts
    ├── search-knowledge.ts
    └── estimator-engine.ts
public/
├── ai-plugin.json
├── .well-known/ai-agents.txt
└── robots.txt
```
