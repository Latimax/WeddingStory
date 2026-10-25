# PURELOVE'26 — Content Update Guide

This guide explains how to safely update stories, photos, scriptures, event details, or bank accounts on the Grace-Mercy & Gideon Wedding Story website.

---

## 1. Where Content Lives
All website text, metadata, timelines, quotes, bank information, and photos are organized in a clean, isolated data file:
📂 `content/story.js`

You never need to edit complex HTML or animation scripts to change words, dates, or stories.

---

## 2. Adding or Updating Story Chapters
Open `content/story.js` and locate the `timeline` array:

```javascript
timeline: [
  {
    id: "chapter-7",
    year: "November 2026",
    title: "The Court Wedding & Traditional Rites",
    authorPerspective: "Grace-Mercy & Gideon",
    content: "Write your new chapter text here...",
    source: "source_doc_reference"
  }
]
```
The website will automatically render the new milestone into the interactive chronological timeline without breaking styling or animations.

---

## 3. Adding New Photographs to the Gallery & Lightbox
1. Save your photograph (e.g., `wedding-entrance.jpg`) into the `images/` directory.
2. In `content/story.js`, append a new object to the `gallery` array:

```javascript
{
  id: "img-entrance",
  src: "images/wedding-entrance.jpg",
  alt: "Grace-Mercy and Gideon dancing joyfully into the reception hall",
  caption: "The Entrance Dance: Joy overflowing on our wedding day.",
  category: "Reception",
  aspect: "landscape", // or "portrait"
  focalPoint: "center"
}
```
The image will automatically be included in the responsive photo grid and the keyboard-accessible modal lightbox.

---

## 4. Updating Event Logistics & Venue Information
When the official venue, dress code, and ceremony itinerary are finalized, update the `celebration` block in `content/story.js`:

```javascript
celebration: {
  status: "confirmed-details",
  date: "Saturday, December 5, 2026",
  time: "10:00 AM WAT",
  venue: "Church Auditorium / Event Centre Name",
  receptionVenue: "Grand Ballroom, City, State",
  dressCode: "Burgundy, White, and Gold accents",
  rsvpLink: "https://forms.gle/..."
}
```

---

## 5. Modifying Gifting / Bank Information
If bank accounts change, edit the `gifts.accounts` array in `content/story.js`:

```javascript
accounts: [
  {
    accountName: "Gideon Ofuegbe",
    bankName: "First Bank",
    accountNumber: "3183960244",
    currency: "NGN",
    label: "Gideon's First Bank Account"
  }
]
```
The website automatically hooks up the one-click copy button, formatted labels, and secure feedback alerts.

---

## 6. Testing & Building Locally
Run the following commands in the project folder:

```bash
# Start local development preview
npm run dev

# Build production bundle
npm run build

# Preview production build locally
npm run preview
```
