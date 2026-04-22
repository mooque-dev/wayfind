# Changelog

All notable changes to Wayfind are documented here.
Format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/). Versions follow [Semantic Versioning](https://semver.org/).

---

## [0.2.0] — 2026-04-22

### Added
- Design system via Tailwind CSS `@theme` in `globals.css` — single source of truth for all colors
- Named tokens: `bg-base`, `bg-elevated`, `bg-surface` for the three elevation levels
- Named tokens: `text-accent` / `bg-accent` / `text-accent-subtle` for the amber gold accent
- Named foreground scale: `text-fg` → `text-fg-secondary` → `text-fg-tertiary` → `text-fg-muted` → `text-fg-faint` → `text-fg-ghost`
- Named semantic tokens: `text-success`, `text-danger`, `text-info`, `text-warning`

### Changed
- Migrated all 9 component and page files from hardcoded hex values and scattered Tailwind utilities to design tokens
- Accent color, background levels, and status colors can now be updated globally from one place in `globals.css`

---

## [0.1.0] — 2026-04-22

### Added
- Initial app — Europe Design & Jazz Trip (Apr 25 – May 8, 2026)
- **Plan screen** — scrollable 14-day timeline with sticky date picker; event cards with type badges, location, notes, and Google Maps deep links
- **Map screen** — full places directory (26 locations across 4 cities) with city + category filters; each place links to Google Maps
- **Budget screen** — spend vs. budget progress bar, per-category breakdown, editable budget limit, quick-add expense modal, delete expenses
- **Alerts screen** — dismissible alert cards for trip advisories (Eurostar delays, public holidays, departure reminders)
- Zustand store with `localStorage` persistence for expenses, budget, selected date, and alerts
- Full TypeScript type system: `ItineraryEvent`, `Location`, `Place`, `Expense`, `Alert`
- Trip data for all 4 cities: London, Frankfurt, Berlin, Copenhagen
- Mobile-first layout (max 430px), dark monochrome theme, amber accent
- Deployed to [GitHub (mooque-dev/wayfind)](https://github.com/mooque-dev/wayfind) and [Vercel](https://wayfind-gamma.vercel.app)
