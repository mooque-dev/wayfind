# Changelog

All notable changes to Wayfind are documented here.
Format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/). Versions follow [Semantic Versioning](https://semver.org/).

---

## [0.5.0] — 2026-04-23

### Added
- **PDF document links** on transit event cards — tap to open boarding pass or receipt directly in the app
  - FlixTrain boarding pass (Frankfurt → Berlin, May 1)
  - Norwegian travel doc (Berlin → Copenhagen, May 3, booking YRQTRV)
  - Norwegian receipt (Copenhagen → Amsterdam, May 6, order #1122-757-553)
- `docUrl` / `docLabel` fields on `ItineraryEvent` type
- Document button (grey pill with file icon) on event cards alongside existing booking/Maps links

### Fixed
- **May 1 transit**: corrected from ICE at 13:30 from Hauptbahnhof → **FlixTrain FLX10 at 09:58** from Frankfurt (Main) Süd, arriving Berlin Südkreuz 13:53 · Wagon 5, Seats 13C+13D
- **May 3 Berlin→Copenhagen flight**: corrected from 11:00 → **Norwegian D83305 at 22:40** from BER Terminal 1, arriving CPH Terminal 3 at 23:40
- **May 3 schedule**: now a full Berlin day (Prenzlauer Berg explore, lunch in Mitte, checkout) followed by late-night departure
- **May 4 Copenhagen**: check-in moved to 00:30 (late arrival); added late check-in note for Coco Hotel
- **May 6 Amsterdam flight**: updated with Norwegian D83540 flight number and order reference

---

## [0.4.0] — 2026-04-23

### Added
- **Amsterdam leg** — May 6–8 added to itinerary and map
  - Fly Copenhagen → Amsterdam May 6 (~2h, arriving 15:10)
  - Stay: The Hoxton Amsterdam (Herengracht 255)
  - Highlights: Bimhuis jazz (tickets), Rijksmuseum (tickets), Frozen Fountain, Moooi Store, De Hallen, Vondelpark run
  - Return flight May 8 from Schiphol → Toronto YYZ (Air Canada)
- **Itinerary dates corrected** — Frankfurt Apr 30–May 1, Berlin May 1–3, Copenhagen May 3–6, Amsterdam May 6–8
- 9 Amsterdam places added to Map screen

---

## [0.3.2] — 2026-04-22

### Added
- `bookingUrl` and `bookingLabel` fields on `ItineraryEvent`
- Booking/ticket button on event cards — amber pill with ticket icon, opens venue website
- Links added to 11 events requiring tickets or reservations:
  - **London:** Design Museum (tickets), Jazz Cafe (tickets), Barbican Conservatory (check opening), St. John (reserve table), Ronnie Scott's (tickets), Tate Modern (free — plan visit)
  - **Frankfurt:** Städel Museum (tickets), Jazzkeller (tickets)
  - **Berlin:** A-Trane (tickets)
  - **Copenhagen:** Jazzhus Montmartre (tickets), La Fontaine (tickets), Designmuseum Danmark (tickets)

---

## [0.3.1] — 2026-04-22

### Fixed
- Apr 30 transit corrected to flight from **Heathrow Terminal 5** at **11:15**, arriving **Frankfurt FRA Terminal 2** at **13:55** (was incorrectly set as Eurostar from St Pancras at 09:00 / 13:40)
- Alerts updated to reflect flight details and airport arrival tip; removed stale Eurostar references

---

## [0.3.0] — 2026-04-22

### Added
- **5 morning runs** — Golders Hill Park (London), Regent's Park (London), along the Main river (Frankfurt), Tiergarten (Berlin), Frederiksberg Canal (Copenhagen)
- **7 café stops** — Ginger & White (Hampstead), Books for Cooks (Notting Hill), Café Metropol & Café Laumer (Frankfurt), The Barn (Berlin), Five Elephant (Berlin), The Coffee Collective (Copenhagen)
- **4 reading sessions** — Barbican Library (London), Aunt's House (London), 25hours Hotel rooftop (Berlin), Coco Hotel (Copenhagen)
- **3 museum visits** — Tate Modern (London), Städel Museum (Frankfurt), Designmuseum Danmark (Copenhagen)
- **Monday evening with Brendan** — Apr 27, 18:30, Soho, W1 (Social event type); note added to Ronnie Scott's that Brendan is joining
- New `"Activity"` event type (emerald) for morning runs
- New `"Social"` event type (rose) for social meetups

### Changed
- All 14 days now have fuller, more realistic schedules
- Events within each day reordered chronologically

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
