# Daemond Zhang — personal site refactor

This is a clean Astro rebuild of `Daemondzh/Daemondzh.github.io`.

The main goal is to make the website easy to maintain: **edit source files, not generated HTML**.

## 1. Local setup

Install Node.js 22.12+ (Node 24 is also fine), then:

```bash
npm install
npm run dev
```

Astro will print a local address, usually:

```text
http://localhost:4321
```

Open it in your browser. The page updates automatically when you save files.

## 2. The files you will edit most often

### Personal info, research, and navigation

Edit:

```text
src/data/site.ts
```

This is where you update:

- your one-line bio
- MIT affiliation
- research projects
- GitHub link
- CV link
- the homepage writing list

### About page

Edit:

```text
src/pages/about/index.astro
```

Use ordinary HTML inside the page. The layout and navigation are already handled for you.

### Add a writing post

Create a Markdown file:

```text
src/pages/writing/my-new-note.md
```

Example:

```md
---
layout: ../../layouts/MarkdownLayout.astro
title: A note on something
description: A short description for search engines.
date: 2026-09-29
---

# A note on something

Write in Markdown here.
```

Then add the post to the `writing` array in:

```text
src/data/site.ts
```

### Change design

Edit:

```text
src/styles/global.css
```

The most useful variables are at the top:

```css
:root {
  --bg: #f7f6f2;
  --ink: #151515;
  --muted: #6d6a63;
  --line: #d9d6cf;
  --accent: #7a1f24;
}
```

Change these first before changing individual CSS rules.

## 3. Add your CV

Put a PDF here:

```text
public/cv.pdf
```

Then change `cvUrl` and the CV navigation link in `src/data/site.ts` from `/about/#cv` to `/cv.pdf`. It will be available at:

```text
https://daemondzh.github.io/cv.pdf
```

## 4. Test before publishing

Run:

```bash
npm run build
npm run preview
```

If `npm run build` succeeds, the site is ready to deploy.

## 5. Recommended migration workflow

Do not overwrite the current live site immediately.

```bash
git clone https://github.com/Daemondzh/Daemondzh.github.io.git
cd Daemondzh.github.io
git checkout -b astro-refactor
```

Then replace the old generated Hexo files with the files from this starter.

Commit:

```bash
git add .
git commit -m "Refactor personal site with Astro"
git push -u origin astro-refactor
```

Review it in a pull request before merging into `master`.

## 6. GitHub Pages setting

After the Astro version is ready to become the live site:

1. Repository → **Settings** → **Pages**
2. Under **Build and deployment**, set **Source** to **GitHub Actions**
3. Merge the refactor into `master`
4. The workflow in `.github/workflows/deploy.yml` will build and deploy the site

## 7. Preserved old routes

The starter keeps these routes intentionally:

```text
/about/
/archives/
/2024/02/24/hello-world/
```

So existing links do not suddenly become 404 pages.

## 8. One important difference from your current repository

Your current repository contains the **generated output** from Hexo. In this refactor, the repository contains the **source code**.

Do not edit `dist/`. Astro generates it automatically and GitHub Actions deploys it.
