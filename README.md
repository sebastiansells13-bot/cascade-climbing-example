# cascade-climbing-example

A live example site for a fictional indoor climbing gym — **Cascade Climbing Co.**

**Live site:** https://sebastiansells13-bot.github.io/cascade-climbing-example/

## How this differs

Eleventy + Sass again, but a bold, dark "outdoor/adventure" visual language —
condensed uppercase display type (`Anton`), a subtle topographic-contour hero
background, angled clip-path buttons — nothing like any of the other four sites in
this batch.

## Two features, not one

- **Membership pricing toggle** (`src/membership.njk` + `src/_includes/js/membership-toggle.js`)
  — a monthly/annual switch that swaps displayed prices instantly. Both prices are
  server-rendered as data attributes on each price element; the toggle just picks
  which one to show, no client-side math needed since the numbers are actual
  business-set prices, not derived.
- **Route grade chart** (`src/_data/grades.json`, shown on the homepage and the full
  `/routes/` page) — a bouldering-to-roped-climbing grade conversion, rendered as
  color-coded bars. Static/informational rather than interactive — not every feature
  needs to be a calculator.
- **Class schedule day filter** (`src/classes.njk` + `src/_includes/js/class-filter.js`)
  — show/hide rows by day, server-rendered list, no re-fetch.

## Local development

```bash
npm install
npm start
```
