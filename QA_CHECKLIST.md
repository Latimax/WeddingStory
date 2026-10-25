# PURELOVE'26 — QA & Verification Checklist

## 1. Editorial Integrity & Content Fidelity
- [x] **Names & Attributes:** Exact names verified (`Grace-Mercy Adegbe`, `Gideon Oluwatobiloba Ofuegbe`).
- [x] **Unedited Personal Letters:** Both letters ("To My Bride, Grace Mercy" and "Open Letter from Grace-Mercy to Gideon") included with 100% text fidelity, paragraph structure, and closing scriptures (Colossians 3:14 and Isaiah 55:5).
- [x] **The Timeline Milestones:** All 6 milestones (2023 church sighting, 2024 "Your beauty is killing" photo & WhatsApp sticker, Jan 2025 kidnapper call, 2-week prayer confirmation, The YES, and PURELOVE'26 covenant) fully represented.
- [x] **The PURELOVE Q&A:** All 21 couple quiz questions included and rendered interactively with elegant, themed Lucide icon badges (replacing generic OS emojis).
- [x] **Faith Foundation & Marriage Vision:** Ecclesiastes 4:12 threefold cord, 1 Peter 3:1,7, 2 Corinthians 13, and Gideon's complete words on marriage integrity ("us against the problem, not you against me").
- [x] **Gifting Information:** Exact account numbers and banks matched to source document (First Bank: 3183960244, Premium Trust Bank: 0112279200). No fake donation claims, tax exemptions, or third-party card processors.

## 2. Accessibility & Usability (WCAG 2.2 AA)
- [x] **Color Contrast:** Deep plum `#43233C` and `#2B1426` on ivory `#FFF9F2` exceeds 7:1 contrast ratio.
- [x] **Keyboard Navigation:** All buttons, chapter accordion/tabs, lightbox controls, copy buttons, and audio controls are keyboard reachable with clear visible focus rings.
- [x] **Lightbox Dialog:** Escape key closes modal, left/right arrow keys navigate images, focus is trapped within modal while active.
- [x] **Copy Clipboard:** Implements `navigator.clipboard.writeText` with visual ARIA live feedback, and fallback for unsupported environments.
- [x] **Reduced Motion:** All GSAP scroll effects respect `@media (prefers-reduced-motion: reduce)` by disabling transitions and immediately revealing content.

## 3. Visual & Creative Direction
- [x] **Fonts:** Google Fonts loaded (`Fraunces` editorial serif, `DM Sans` clean body, `Caveat` subtle handwriting accents).
- [x] **Palette:** Curated romantic editorial scheme (Ivory `#FFF9F2`, Deep Plum `#43233C`, Coral `#F47C78`, Marigold `#F4BA58`, Sage `#A1B99B`, Dusty Lilac `#C9B6D8`).
- [x] **No Forbidden Gimmicks:** Zero cursor-following animations, zero auto-playing sound, zero scroll hijacking, zero generic template cards.

## 4. Technical & Build Readiness
- [x] **Vite & Vanilla ES Modules:** Zero heavyweight frontend framework bloat.
- [x] **Tailwind CSS:** Pre-compiled tokens and utility classes, no CDN reliance.
- [x] **Asset Paths:** All photos dynamically imported or referenced cleanly for Vite production bundling.
