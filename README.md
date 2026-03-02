# My Personal Website

Professional website for Keegan Bailey, built with Next.js and Tailwind CSS.

This site acts as a digital business card, portfolio landing page, and includes a lightweight file-based blog CMS.

## Profile Links

- LinkedIn: `https://www.linkedin.com/in/keegan-bailey-b2463426/`

## Professional Snapshot

- Canadian cross-platform software developer
- Primary focus: AvaloniaUI
- Strong background in Xamarin and .NET MAUI
- Android, iOS, and Windows development plus DevOps

## Stack

- Next.js (App Router)
- Tailwind CSS
- Markdown blog posts parsed with `gray-matter` and `marked`

## Run Locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## GitHub Pages Hosting

This project is configured for GitHub Pages static hosting:

- `next.config.ts` uses `output: "export"` (build output in `out/`)
- `.github/workflows/deploy-github-pages.yml` deploys automatically on pushes to `main`
- `public/CNAME` is set to `keeganbailey.com`

### One-time GitHub setup

1. In your GitHub repo settings, open **Pages**.
2. Set **Source** to **GitHub Actions**.
3. Ensure your default branch is `main`.

### Namecheap DNS setup (for custom domain)

Point your domain to GitHub Pages with these records:

- `A` record for root (`@`) to:
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`
- `CNAME` record for `www` to `kbmobi.github.io`

GitHub automatically serves `keeganbailey.com` and `www.keeganbailey.com` once DNS is live.

## Simple Blog CMS

To publish a post:

1. Add a markdown file to `content/posts`.
2. Include frontmatter:

```md
---
title: "Post title"
date: "2026-03-02"
excerpt: "Short summary for blog listing."
---
```

3. Add your Markdown content below the frontmatter.
4. Commit and deploy.

Each filename becomes the URL slug:

- `content/posts/my-new-post.md` -> `/blog/my-new-post`
