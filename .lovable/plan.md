# Ursana â Premium Beauty Studio Landing Page

Single-page Lithuanian marketing site for GroÅ¾io studija Ursana (Vilnius). Mobile-first, elegant, conversion-focused.

## Design system (src/styles.css)

- Background: warm nude/beige `oklch(0.97 0.012 75)`
- Soft blush rose accent `oklch(0.88 0.04 20)`
- Deep charcoal text `#2b2b2b`
- Champagne/gold accent `#c2a878`
- Fonts: Cormorant Garamond (headings) + Inter (body) via Google Fonts in `__root.tsx`
- Tokens: `--background`, `--foreground`, `--primary` (gold), `--accent` (blush), `--card`
- Rounded-2xl, soft shadows, smooth hover transitions
- Fade-in-on-scroll via IntersectionObserver hook

All "Rezervuoti" buttons â `https://www.treatwell.lt/salonas/grozio-studija-ursana/` target=_blank rel=noopener.

## File structure

- `src/routes/index.tsx` â page composition (imports sections)
- `src/components/site/Header.tsx` â sticky header, mobile sheet menu
- `src/components/site/Hero.tsx` â full-width hero w/ image 1 + overlay
- `src/components/site/TrustBar.tsx` â 4-item strip
- `src/components/site/Featured.tsx` â 3 treatment cards
- `src/components/site/Services.tsx` â shadcn Tabs by category + price list
- `src/components/site/About.tsx` â paragraph + image
- `src/components/site/Gallery.tsx` â responsive grid + Dialog lightbox
- `src/components/site/Reviews.tsx` â 5 review cards + CTA
- `src/components/site/Contact.tsx` â info + embedded Google Map iframe + final CTA
- `src/components/site/Footer.tsx`
- `src/components/site/BookButton.tsx` â reusable Treatwell link button
- `src/hooks/use-fade-in.ts` â IntersectionObserver fade/slide-up
- `src/lib/site-data.ts` â services data, reviews, images array
- `src/styles.css` â token + font updates
- `src/routes/__root.tsx` â add Google Fonts links + SEO meta (LT title/description, og tags using image 1)

## Sections (per spec)

1. **Header** â wordmark URSANA (serif) + nav (Paslaugos Â· Apie Â· Galerija Â· Atsiliepimai Â· Kontaktai) anchor links + "Rezervuoti vizitÄ" gold button. Mobile: hamburger â Sheet.
2. **Hero** â bg image 1 + dark overlay; H1 "GroÅ¾io ir veido estetikos studija Vilniaus centre"; sub copy; primary "Rezervuoti vizitÄ" + ghost "PerÅ¾iÅ«rÄti paslaugas" (#paslaugos); badge "â 4,9 Â· 289 atsiliepimai Â· Treatwell".
3. **TrustBar** â 4 items with subtle icons.
4. **Featured** â 3 cards: LazerinÄ depiliacija, CO2 karboksiterapija + veido liftingas, Liftingo masaÅ¾ai. Icon + LT copy + Rezervuoti.
5. **Services** â shadcn `Tabs`: Veido procedÅ«ros / Antakiai ir blakstienos / LazerinÄ depiliacija / Depiliacija (vaÅ¡ku/cukrumi) / MasaÅ¾ai / Galvos odos prieÅ¾iÅ«ra. Each row: name left, price right, divider; per-tab Rezervuoti button. All real items/prices included.
6. **About** â 2-col (image + text) with provided paragraph.
7. **Gallery** â responsive grid of all 6 Treatwell images; click â Dialog lightbox. `onError` swap to elegant Unsplash beauty-clinic fallbacks.
8. **Reviews** â header "4,9 â Â· 289 atsiliepimai per Treatwell"; 5 review cards (Daiva, UgnÄ, Virginija, Beata, Klientas) with 5 gold stars + quote; CTA "Skaityti visus atsiliepimus" â Treatwell.
9. **Contact + Footer** â address, phone (tel: link), darbo laikas, kalbos; Google Maps iframe centered at 54.69094,25.27580; final big "Rezervuoti vizitÄ" CTA; footer "Â© GroÅ¾io studija Ursana Â· Vilnius".

## Technical notes

- Google Map: simple `<iframe>` embed (no API key) using `https://www.google.com/maps?q=54.69094,25.27580&z=16&output=embed`.
- Images: `<img loading="lazy">` with `onError` fallback to curated Unsplash URLs.
- Smooth scroll via `scroll-behavior: smooth` on html.
- SEO: LT title "GroÅ¾io studija Ursana â Veido estetika ir lazerinÄ depiliacija Vilniuje", meta description with key services + rating, og:image = image 1, single H1 in hero, semantic `<section>` with `aria-labelledby`.
- Accessibility: alt text in LT, focus rings, 44px tap targets.
- No backend, no Lovable Cloud needed.

Ready to build on approval.