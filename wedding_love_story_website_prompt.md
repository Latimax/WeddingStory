# Wedding Love Story Website — Implementation Brief

## Your role
You are a senior creative developer, editorial web designer, motion designer, and accessibility-focused frontend engineer. Create an extraordinary, intimate, colorful, story-driven wedding website for **[PARTNER ONE] and [PARTNER TWO]**. It should feel like an interactive love letter and digital keepsake, not a generic wedding template, commercial landing page, or event-management dashboard.

**The couple's supplied documents, photographs, and captions are the source of truth.** More documents and images will be added. Read all of them before producing the final content architecture or writing the page. Never invent the couple's names, quotes, biographical details, timeline, dates, bank details, wedding venue, or stories.

## 1. Source-document ingestion — mandatory first phase
1. Inspect the entire project and all attached `.docx`, `.pdf`, `.md`, `.txt`, and image assets. If no files have been attached yet, scaffold with clearly labeled placeholder content; do not pretend to have read files.
2. Read every supplied document **in full**, including appendices, image captions, handwritten-image transcriptions if legible, and notes. Identify which partner authored each passage where possible.
3. Build a **content inventory**: source filename, section/page, exact content excerpt or content ID, attributed author, intended website placement, image associations, and publication status.
4. Group the supplied content into an intentional reading sequence. **Do not omit, silently summarize, or rewrite away any supplied material.** Short previews may link to expanded or dedicated chapters, so the page remains readable even when source text is long.
5. Preserve original voice, meaning, cultural nuances, names, dates, punctuation when intentional, and personal tone. Correct only obvious typos where appropriate; flag substantial proposed edits for approval. Do not manufacture sentimental quotations.
6. If sources disagree, preserve both in a review log, identify the conflict, and request clarification instead of deciding silently.
7. Keep source content editable in a structured data file (for example, `content/story.js` or `content/story.json`) separate from rendering logic. Store each passage as its own identifiable item with source reference and ordering. Keep an image manifest with filename, alt text, caption, section, and focal point.
8. Before delivery, perform a **coverage audit** mapping every source passage and provided asset to a website section, optional expandable chapter, gallery, or explicit review queue. Report anything intentionally withheld for privacy, duplication, or pending approval. No silent omissions.

## 2. Creative vision
**Art direction:** “A love story told in living color.” Aim for an elegant illustrated editorial experience blending a fine-art wedding journal, warm handwritten correspondence, lush garden romance, and a curated photographic exhibition. Romantic, joyful, soulful, contemporary, and personal — **never kitschy or mass-produced**.

Make a distinctive visual language using:
- Expressive editorial typography, cinematic photography, layered paper textures, curved section dividers, botanical linework or softly abstract petals, generous whitespace, warm gradients, hand-drawn chapter numerals, beautiful pull quotes, and thoughtful asymmetry.
- A carefully controlled, bright-but-refined palette: **ivory `#FFF9F2`, deep plum `#43233C`, coral `#F47C78`, marigold `#F4BA58`, sage `#A1B99B`, dusty lilac `#C9B6D8`**. Use plum for readable text, ivory for breathing room, and colorful accents purposefully. Adjust palette to the actual photos if needed, while retaining contrast.
- Google Fonts: **Fraunces** for prominent romantic headlines; **DM Sans** for body text, forms, and navigation. Optionally use a restrained handwriting accent such as **Caveat** for a few annotations only. Do not set long body passages in cursive.
- Editorial layouts with alternating photo-and-letter compositions and variation between sections. Avoid repeating uniform cards, icon grids, or identical centered blocks.

**Do NOT use:** animated mouse pointers, cursor-follow effects, particle trails following the user, scroll-jacking, excessive parallax, floating hearts everywhere, generic hero templates, default Tailwind aesthetics, stock romantic copy, unnecessary carousels, auto-playing audio, distracting loading screens, or animation that impedes reading.

## 3. Technology and constraints
- **HTML5 + Tailwind CSS + modern vanilla JavaScript (ES modules)**. Do not introduce React, Vue, Next.js, or a heavy frontend framework unless explicitly requested later.
- Use **GSAP + ScrollTrigger** for a small number of polished, meaningful animations. Register and clean up plugins correctly. Use `IntersectionObserver` for simple reveal-on-enter effects where GSAP is not needed.
- Use **Vite** for local development, bundling, and asset handling, with Tailwind's current Vite-supported integration. Do not rely on the Tailwind CDN in production. Prefer the installed project's current supported versions and document setup.
- A lightweight gallery lightbox can be implemented accessibly in vanilla JS; avoid importing a large UI library merely for a lightbox.
- Favor semantic HTML, reusable section rendering functions and CSS custom properties for design tokens. No complex backend is required for a static editorial site.
- Supply sample config files with placeholders; never hardcode real personal bank information into sample documentation or logs.

## 4. Proposed story architecture
Derive final navigation and chapter titles from the uploaded material; the following is a **flexible outline**, not permission to fabricate content:

### Opening: A living love letter
A striking full-bleed or layered hero featuring the best couple photograph, their real names, verified wedding date if supplied, and one authentic line from their writing. Art-directed typesetting and an understated prompt to “Read our story.” Optional countdown **only if the date is confirmed**.

### Chapter 1: Before our paths crossed
Set the scene with real background from the documents. Feature evocative portrait photography, personal details, and small handwritten-style annotations.

### Chapter 2: When we met
Present the actual meeting story as a rich editorial timeline or alternating narrative. Keep chronology accurate and include source text fully, with expandable subchapters for longer passages.

### Chapter 3: Two hearts, two voices
**Give both partners their own deeply personal space.** Partner One's words and Partner Two's words should be visually distinct yet harmonious, with their genuine complete messages. Use a split-layout or two interwoven letter compositions, not a forced comparison table. Preserve author attribution.

### Chapter 4: Moments that made us
A curated photo essay with meaningful captions, memories, milestones, and optional dates. Use varied image proportions and a keyboard-accessible fullscreen lightbox.

### Chapter 5: The promise / our next chapter
The proposal, vows, reflections, or hopes for the future **only where documented**. Highlight a genuine meaningful passage as a pull quote.

### Celebration details (when supplied)
Wedding date, time, ceremony/reception locations, schedule, dress suggestions, directions, and RSVP link if provided. Do not invent logistics or show empty blocks.

### Blessings, gifts & support
A heartfelt, dignified section for friends and family who wish to send gifts or financial support. This section must feel optional, not transactional. Display **only bank information explicitly approved for publication**: recipient/account holder, bank name, account number, currency, and optional payment note. Confirm the exact account-holder spelling and number. Provide a **Copy account number** button with accessible feedback; use `navigator.clipboard` with a secure-context/unsupported fallback. Never imply that a payment has been received. Do not create a fake payment flow, ask visitors for card details, or claim a donation is tax-deductible. Add optional non-financial well-wishes contact only if details are provided.

### Closing: A note to our people
Use the couple's real thank-you text and a powerful final image. If permitted, include a tasteful footer credit and a simple back-to-top control.

## 5. Motion and interaction direction
Motion should serve the emotional rhythm of reading and reveal photographs as though pages of an album were opening.
- Hero: a soft photo reveal, restrained headline stagger, and warm color settling into place.
- Chapters: gentle fade-and-rise text reveals on scroll, small delayed accents, and subtle crossfades between photos.
- Quotes/letters: understated mask reveal or paper-edge unfolding illusion, not gimmicky typewriter text for long passages.
- Photo essay: soft image reveal with slight scale-in on entry, not constant movement.
- Section transitions: color fields and botanical/paper shapes gently transition, while content stays readable.
- Interactive elements: precise hover/focus states, gallery controls, and copy-to-clipboard confirmation. No pointer/cursor animation.

Animation rules: animate primarily `transform` and `opacity`; respect `prefers-reduced-motion` by disabling nonessential effects and displaying all content immediately; never hide content indefinitely if JavaScript fails; minimize cumulative layout shift; avoid pinned sections or scroll trapping; ensure mobile performance.

## 6. UX, inclusivity, and readability
- **Mobile-first** at 320px and up, with intentional tablet and desktop compositions; avoid horizontal overflow.
- Clear, simple navigation with descriptive anchors: Story, Our Words, Memories, Wedding, Gifts (display only relevant sections). Sticky navigation is permitted if quiet and compact.
- Readable prose with roughly 60–75 characters per line, generous line-height, consistent spacing, and visual pauses between long chapters.
- Comply with WCAG 2.2 AA where applicable: contrast, logical heading hierarchy, visible keyboard focus, keyboard-operable interactions, text alternatives, dialog focus management, and sensible accessible names.
- Do not put meaningful story text only inside images or animated canvases.
- Optimize photographic loading: descriptive filenames, responsive `srcset`/`sizes`, AVIF/WebP if available, lazy loading below the fold, fixed aspect ratios, and no unnecessary giant image downloads.
- Add SEO metadata, meaningful Open Graph image, favicon, and clean social-share preview once supplied details and images are verified. Avoid publishing private addresses or phone numbers unless approved.

## 7. Data modeling and future updates
Support ongoing document additions without redesigning the site. Suggested content concepts:
- `couple`: names and approved public details
- `chapters`: `{ id, title, subtitle?, passages: [{ id, author, text, source }], images: [], order }`
- `gallery`: `{ id, src, alt, caption?, date?, chapterId?, focalPoint? }`
- `celebration`: verified event details
- `gifts`: approved bank accounts and exact labels, optional note
- `publication`: `approved` / `draft` / `needs-review` status

Ensure all source-derived prose can be rendered in full, using additional chapter pages or accessible `<details>` elements for long sections if necessary. Never truncate the actual text in the data source. Keep content separate from UI so new documents can be incorporated by editing the content files.

## 8. Build in phases
**Phase 1 — Audit and map:** Inspect assets and existing project (if any), read all documents, create the content inventory, image manifest, factual questions, and complete coverage checklist. Identify missing information instead of guessing.

**Phase 2 — Art direction and prototype:** Establish design tokens, typography, hero treatment, chapter layout patterns, navigation, and mobile wireframe. Present a concise creative rationale. Avoid generic components.

**Phase 3 — Full implementation:** Build responsive semantic HTML, Tailwind theme/styles, content-driven JS rendering, accessible menu, chapter navigation, gallery lightbox, bank-account copy interaction, and optional validated wedding countdown. Integrate original text and images with exact attribution.

**Phase 4 — Motion and polish:** Add GSAP transitions thoughtfully, optimize image performance, and provide reduced-motion fallbacks. Test touch, keyboard, and mobile devices.

**Phase 5 — QA and content verification:** Audit every document passage/image for inclusion, check factual accuracy, spelling, bank details and publication approvals, accessibility, responsive layouts, broken links, image loading, console errors, and production build. Mark unresolved items rather than silently dropping them.

## 9. Required deliverables
1. Runnable complete source code (HTML, CSS/Tailwind, vanilla JS, config, and assets references).
2. Documented project structure and commands to install, run, build, and deploy.
3. Structured story content with references back to each uploaded document.
4. Content coverage report showing exactly where each source passage and image appears.
5. A short `CONTENT_UPDATE_GUIDE.md` explaining how to add future stories and photos safely.
6. A QA checklist with completed checks and any remaining approval questions.

## 10. Acceptance criteria
The result feels unmistakably created for **this couple**, not a reskinned demo. It is beautiful, colorful, intimate, easy to navigate, mobile-first, motion-rich but never distracting, and faithful to **all** submitted source content. Both partners' voices are prominently represented. Friends and family can clearly find optional gifting information without pressure. There are **no** mouse-pointer animations, no fabricated biographical facts, no unapproved banking details, no unaccounted-for document passages, and no broken accessibility or reduced-motion behavior.

**Begin by reading and inventorying all available documents and assets. Then implement the website end-to-end, using carefully labeled placeholders only where actual approved content is missing.**
