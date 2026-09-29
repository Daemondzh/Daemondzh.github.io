# Migration checklist

## Before replacing the live site

- [ ] Make a branch called `astro-refactor`
- [ ] Keep a copy/tag of the current Hexo site
- [ ] Add your real email/contact information
- [ ] Replace placeholder research descriptions with current projects
- [ ] Add `public/cv.pdf`
- [ ] Run `npm install`
- [ ] Run `npm run build`
- [ ] Check mobile layout with browser responsive mode
- [ ] Confirm `/about/`, `/archives/`, and the old Hello World URL work

## When ready to go live

- [ ] Set GitHub Pages source to **GitHub Actions**
- [ ] Merge the refactor into `master`
- [ ] Watch the `Deploy to GitHub Pages` workflow finish
- [ ] Open `https://daemondzh.github.io`
- [ ] Check all navigation links and the CV link
