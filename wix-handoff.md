# 4Shore Guesthouse — Wix Handoff Notes

## Build Overview

Use the local preview in `index.html` as the visual and content reference. The site is a single-page Wix build with anchored sections:

1. Home hero
2. Quick enquiry strip
3. A quietly run guesthouse (intro)
4. Rooms (nine cards with filters)
5. Rates (transparent rate board + table)
6. Amenities (six items, line icons)
7. Gallery (six-tile mosaic + full gallery lightbox)
8. Guest voices (three quote cards + Google panel)
9. The Bluff & Durban (image + distances list)
10. About 4Shore (body + house rules panel)
11. Directions (numbered steps + embedded map)
12. Contact (info + enquiry form)

Recommended Wix approach: build a single polished homepage with section anchors. Resist the urge to add a generic Wix template hero or feature blocks — the design intent is editorial, calm and uncluttered.

## Visual Direction

The refreshed preview is aiming for a *quietly premium* boutique guesthouse feel — closer to Aman or Plum Guide than a marketing-heavy resort site. Real photography, generous whitespace, editorial serif headlines, restrained UI typography. Avoid stock illustration, decorative waves, glossy gradients, oversized marketing copy, and vague "from" promises.

Design principles:

- **Spacious**: sections breathe. Padding is `clamp(78px, 9vw, 132px)` top/bottom.
- **Editorial typography**: serif display + clean sans body. Headings are restrained, not shouty.
- **Real photography first**: the dune/beach images are the brand. Lead with them.
- **One accent colour at a time**: warm brass gold for highlights, terracotta clay for kickers/labels.
- **Thin rules, small radii**: 2–4 px radius, 1 px hairline borders. No heavy drop shadows.

## Typography

- **Display serif**: [Fraunces](https://fonts.google.com/specimen/Fraunces) — variable, optical-size aware. Used for `h1`, `h2`, room titles, review quotes, rate anchor numbers, hero stats.
- **UI / body**: [Inter](https://fonts.google.com/specimen/Inter) — weights 400, 500, 600. Used for body copy, navigation, buttons, labels.
- Eyebrows / kickers: Inter 600, 0.72 rem, 0.18–0.22 em letter-spacing, uppercase, with a leading 28 px rule.
- No `text-transform: uppercase` on buttons (use sentence case for premium feel).

In Wix: install Fraunces and Inter as custom fonts in **Site Design → Fonts**. Map heading styles to Fraunces 380 weight with `-0.018em` letter spacing.

## Colour Palette

| Token | Hex | Use |
| --- | --- | --- |
| Ink | `#16201e` | Body text, primary type |
| Ink soft | `#2c3633` | Secondary body |
| Muted | `#6c726c` | Captions, labels |
| Cream | `#fbf6ec` | Default page background, cards |
| Paper | `#f4ede1` | Alternating section background |
| Bone | `#ece2d0` | Table heads, soft surfaces |
| Line | `#d9cebb` | Hairlines, borders |
| Sea | `#2c5a55` | Accent (chips, focus) |
| Sea deep | `#0d2326` | Dark sections, footer body |
| Sea ink | `#06181a` | Footer, hero base |
| Gold | `#a8835a` | Primary CTA, accent rules |
| Gold soft | `#c8a06a` | Hero italic accent, dark-section labels |
| Clay | `#9a5a40` | Kickers, attribution labels |

Avoid neon teals and saturated blues — the palette is warm-coastal, not corporate.

## Wix Element Map

- **Header**: sticky, becomes transparent over the hero (`is-transparent` class). Wix doesn't support this natively — use Wix Velo or the `Editor X` Pinned Strip with two states, or accept a solid header at the top.
- **Hero**: full-width strip background image `assets/images/explore/outside-9.jpg`, dark gradient overlay (radial + linear), serif headline with a single italic accent word in gold, two CTAs, four bottom signals row.
- **Quick enquiry**: floating card, sits 44 px above the hero/intro junction. Wix Forms with date / number / dropdown fields.
- **Rooms**: Wix Repeater (preferred) loading from a Wix CMS collection. One image, badge top-left, serif title, stay summary, meta tags pill row, pricing two-column micro-table, features list with gold-bar bullets, two CTAs (Enquire / View gallery).
- **Rates**: dark `rate-anchor` panel + light `rate-table`. Avoid Wix's default table widget — build with Repeater or HTML element for typographic control.
- **Amenities**: six tiles in a 3-column grid with 1 px hairline grid (use Wix grid with negative border tricks, or HTML element). Inline SVG line icons (provided in `index.html`).
- **Gallery**: Wix Pro Gallery in "Collage" layout, six items, mixed aspect ratios. Provide "View full gallery" button that opens the lightbox.
- **Reviews**: three serif quote cards with the large opening `"` glyph as an absolutely positioned brass element. Wix custom widget or HTML element.
- **Directions**: ordered list with `decimal-leading-zero` counters in gold, paired with an embedded Google Maps iframe.
- **Contact**: Wix Form, two-column on desktop, single column under 640 px.
- **Footer**: dark `sea-ink` background, three columns + footer bar.

## Image Mapping

Hero:
- `assets/images/explore/outside-9.jpg`

Gallery (six-tile mosaic):
- `outside-9.jpg`, `outside-13.jpg`, `inside-10.jpg`, `outside-8.jpg`, `inside-4.jpg`, `outside-12.jpg`

Explore section figure:
- `assets/images/explore/outside-13.jpg`

Room galleries:
- Room 1: `room-1-1.jpg` through `room-1-5.jpg`
- Room 2: `room-2-1.jpg` through `room-2-4.jpg`
- Room 3: `room-3-1.jpg` through `room-3-4.jpg`
- Room 4: `room-4-1.jpg` through `room-4-5.jpg`
- Room 5: `room-5-1.jpg` through `room-5-5.jpg`
- Room 6: `room-6-1.jpg` through `room-6-2.jpg`
- Room 7: `room-7-1.jpg` through `room-7-6.jpg`
- Room 8: `room-8-1.jpg` through `room-8-5.jpg`
- Room 9: `room-9-1.jpg` through `room-9-6.jpg`

## Core Copy

Hero eyebrow: `Anstey's Beach · Bluff, Durban`

Hero headline:
> Nine quiet rooms, **one step** from the Indian Ocean.

The italicised "one step" is set in Fraunces italic, Gold-soft. Keep the line break before "from the Indian Ocean" on desktop.

Hero body:
> 4Shore is a small, independently run guesthouse on Foreshore Drive — private entrances, air-conditioned en-suite rooms, secure parking, and the sand of Anstey's Beach a thirty-second walk from your door.

Intro lead:
> 4Shore is simple in the best sense — *close to the water, easy to arrive at,* and run for guests who value privacy, rest, and a direct word with the host.

Intro body:
> There is no resort theatre here. What you get is your own entrance, a thoughtfully maintained en-suite room, secure parking, and a stretch of Indian Ocean coastline thirty seconds away. Most guests come back because the rate is honest, the beds are right, and the hospitality is personal.

Contact:
> For reservations and guesthouse enquiries, email or call 4Shore Guesthouse directly. Winston usually replies the same day. Availability is confirmed by the guesthouse.

## Room Content

Every room lists:
- En-suite shower
- Air-conditioning
- OpenView satellite TV
- Small fridge, kettle, complimentary coffee
- Free in-room Wi-Fi

Room-specific summaries (preserved from brief):
- Room 1: side sea view, ground floor, patio, double bed, sleeps 1–2.
- Room 2: side sea view, ground floor, patio, double bed, sleeps 1–2.
- Room 3: garden view, ground floor, patio, double bed, sleeps 1–2.
- Room 4: garden view, ground floor, patio, double bed, sleeps 1–2.
- Room 5: garden view, ground floor, patio, double bed, sleeps 1–2.
- Room 6: garden view, ground floor, 2 doubles + 1 single, sleeps up to 5.
- Room 7: garden view, upper level, balcony, 2 doubles, sleeps up to 4.
- Room 8: garden view, upper level, balcony, 2 doubles, sleeps up to 4.
- Room 9: side sea view, upper level, balcony, double bed, sleeps 1–2.

## Rates

| Guest setup | Suitable rooms | Nightly rate | Notes |
| --- | --- | --- | --- |
| Single person | Rooms 1–9 | R 850 | Accommodation only |
| Couple | Rooms 1–9 | R 950 | Special couple rate |
| Twin sharing | Rooms 6, 7 or 8 | R 1 000 | Two singles sharing |
| Triple | Room 6 | R 1 200 | Three singles sharing |
| Family of 4 | Rooms 6, 7 or 8 | R 1 300 | Family sharing |
| Family of 5 | Room 6 | R 1 400 | Family sharing |
| Breakfast | All rooms | R 150 | Optional, per person per day |

Disclosure notes:
- Peak-season adjustments may apply.
- R 300 cash breakage deposit per room, credited to the guest's bank account 3 days after departure.
- Check-in from 14:00. Check-out before 10:00.
- Availability, final rate and room allocation are confirmed by 4Shore Guesthouse.

## Reviews

Use the score line **4.5 / 5 from 81 Google reviews** in the hero stats and the reviews section.

Three editorial quote cards (no real review text — use the curated, brand-aligned lines in the preview, or rotate the live top-rated reviews via Wix's Google Reviews app). Always pair with a "Open on Google" button to the live profile:

`https://www.google.com/maps/search/?api=1&query=4Shore%20Guesthouse%20(Pty)%20Ltd%2028%20Foreshore%20Drive%20Durban`

## Animations

Subtle only:
- Hero background image drifts slowly (28 s ease-in-out, ~4 % scale + small translate).
- Sections fade up 22 px on scroll using `IntersectionObserver`.
- Room/photo tiles scale 1.04 on hover (800 ms cubic-bezier).
- Buttons swap fill/stroke on hover; arrow glyph nudges 4 px right.
- Header transitions from transparent to solid on scroll past 80 px.

Honour `prefers-reduced-motion: reduce` everywhere.

## SEO

Homepage title:
`4Shore Guesthouse | Beachfront Accommodation in Bluff, Durban`

Homepage meta description:
`4Shore Guesthouse offers quiet beachfront accommodation on Anstey's Beach in Bluff, Durban, with 9 en-suite rooms, secure parking, Wi-Fi, air-conditioning, and direct enquiry booking.`

Suggested keywords:
- 4Shore Guesthouse
- Bluff Durban guesthouse
- Anstey's Beach accommodation
- beachfront accommodation Durban
- guesthouse near Anstey's Beach
- Durban business accommodation
- family rooms Bluff Durban

Structured data: the preview ships a `LodgingBusiness` JSON-LD with `aggregateRating` (4.5 / 81), `priceRange` (ZAR 850 – 1400), `amenityFeature` and `PostalAddress`. Replicate in Wix SEO Tools → custom code.

## Sources Used

- Current DOCX brief: `4Shore Guesthouse webpage descriptions 9 May 2026.docx`
- Supplied Google reviews archive: `/Users/henryoliver/Downloads/Reviews.webarchive`
- Existing site About page: https://www.4shoreguesthouse.co.za/about-us
- Public listing and reviews: https://www.wheretostay.co.za/4shore-guesthouse-bluff-accommodation-ansteys-beach
- Public review page: https://www.wheretostay.co.za/reviews/view_listing_4shore

The DOCX remains the source of truth for room count, amenities, contact details and rates if older public listings conflict.
