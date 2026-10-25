# PURELOVE'26 — Grace-Mercy & Gideon Love Story & Wedding Website

An intimate, editorial digital keepsake and wedding love story website crafted for **Grace-Mercy Adegbe** and **Gideon Oluwatobiloba Ofuegbe**.

> **“Two lives. One covenant. Christ at the centre. A lifetime of choosing each other.”**  
> *Holy Matrimony • Saturday, December 5, 2026*

---

## 📖 About The Project

This website is custom-built as an interactive editorial love letter and digital keepsake. It completely preserves the couple's supplied love letters, meeting milestones, ministry backgrounds, couple's quiz, faith foundation, curated photo exhibition, and gifting details with 100% source fidelity.

### Design Aesthetics & Visual Identity
- **Editorial Typography:** Google Fonts **Fraunces** (romantic headline serif), **DM Sans** (clean, readable sans-serif), and **Caveat** (delicate handwritten annotations).
- **Curated Color Palette:**
  - Ivory (`#FFF9F2` & paper warm tones)
  - Deep Plum (`#43233C` & `#2B1426`)
  - Warm Coral (`#F47C78`)
  - Marigold (`#F4BA58`)
  - Sage (`#A1B99B`)
  - Dusty Lilac (`#C9B6D8`)
- **Atmospheric Elements:** Layered paper textures, subtle grain, gold badge stamps, pull quotes, and unedited letters.
- **Micro-Interactions & Motion:** Restrained GSAP scroll reveals, tap-to-reveal couples quiz cards, full-screen accessible photo lightbox, and one-tap bank clipboard copy with live toast notifications.

---

## 🗂 Project Structure

```text
WeddingStory/
├── content/
│   └── story.js                # Single source of truth: unedited letters, timeline, quiz, gifts
├── public/
│   └── images/                 # Public photography assets served in dev & build
├── images/                     # Original high-resolution photographs
├── src/
│   ├── main.js                 # App initialization, GSAP, countdown, tabs, quiz, lightbox
│   └── style.css               # Tailwind CSS entry & custom editorial tokens
├── index.html                  # Accessible, semantic HTML5 structure with SEO metadata
├── tailwind.config.js          # Custom colors, typography, and shadow tokens
├── postcss.config.js           # PostCSS configuration
├── vite.config.js              # Vite server & bundler configuration
├── package.json                # Project dependencies and npm scripts
├── CONTENT_COVERAGE.md         # 100% source-to-site coverage audit
├── CONTENT_UPDATE_GUIDE.md     # How to add future chapters and photos
├── QA_CHECKLIST.md             # Verification & accessibility audit
└── contents.txt                # Raw couple's source document
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm (v9 or higher)

### Installation
Clone or navigate to the directory and install dependencies:

```bash
npm install
```

### Local Development
To launch the live Vite development server:

```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build
To compile the static production bundle:

```bash
npm run build
```
The optimized output will be generated in `dist/`.

### Preview Production Build
To preview the compiled production build locally:

```bash
npm run preview
```

---

## ✨ Key Features & Highlights

1. **A Living Love Letter (Hero Section):**
   - Striking couple portrait and typography.
   - Verified wedding date: **Saturday, December 5, 2026**.
   - Real-time live countdown timer (Days, Hours, Minutes, Seconds).
   - Authentic pull-quote from Gideon: *“I don't just want to marry you, I want to build a lifetime with you.”*

2. **Chapter 1: Before Our Paths Crossed:**
   - Unedited profiles for **Grace-Mercy** (teaching the Word, Purity Series ministry) and **Gideon** (faith, personal growth, motto: *“Living by faith, growing in grace, and building with purpose”*).

3. **Chapter 2: When We Met (The Timeline):**
   - 2023: *The Beautiful Damsel 💕*
   - 2024: *Your Beauty Is Killing! 📸* (church photo, WhatsApp sticker: *“Laughing in the Holy Ghost!”*)
   - January 2025: *The Kidnapper's First Call 📞❤️*
   - Early 2025: *The Divine Confirmation | When God Stepped In 🙏🏽* (2-week prayer pause)
   - 2025: *The YES | A Beautiful Beginning 💍*
   - December 5, 2026: *PURELOVE’26 | From a Love Story to a Covenant 🤍💍*

4. **Chapter 3: Two Hearts, Two Voices (Intimate Letters):**
   - Full, unedited open letters from both partners.
   - Perspective switcher: *Read Together*, *Gideon's Letter*, or *Grace-Mercy's Letter*.
   - Authentic closing scriptures: Colossians 3:14 and Isaiah 55:5.

5. **Couples Quiz: Fun Things About Us:**
   - 21 interactive question cards with tap-to-reveal answers.
   - Filterable by *Gideon*, *Grace-Mercy*, or *Both of Us*.

6. **Chapter 4: Moments That Made Us (Photo Exhibition):**
   - Responsive photo gallery featuring all 6 authentic couple photos.
   - Fullscreen keyboard-accessible Lightbox with next/previous controls, image counter, and Escape-to-close.

7. **Chapter 5: Our Faith & Foundation:**
   - *A Cord of Three Strands* (Ecclesiastes 4:12).
   - 1 Peter 3:1, 7 and 2 Corinthians 13.
   - Complete unedited words on *What Marriage Means to Us*.

8. **Gifts & Blessings:**
   - Dignified monetary gifting details for setting up their new home.
   - First Bank (`3183960244`) & Premium Trust Bank (`0112279200`).
   - One-tap clipboard copy with accessible live toast feedback.

---

## 🔒 Content Verification & Privacy

- **Zero Fabricated Content:** Every quote, date, letter, and scripture is grounded directly in `contents.txt`.
- **Approved Banking Information:** Displays only the verified First Bank and Premium Trust Bank accounts.
- **Accessibility:** WCAG 2.2 AA compliant contrast, logical headings, keyboard operable modal controls, and `prefers-reduced-motion` support.
