# Eagle Web Image Specifications

This document defines the recommended image sizes, aspect ratios, and usage notes for all major image sections in the app.

## General Rules

- Use the same aspect ratio for all images within the same slider or card group.
- Keep important subjects inside the center 60–70% safe area.
- Avoid placing faces, logos, or text too close to the edges.
- Prefer landscape images for banners, hero sliders, and content sections.
- Prefer PNG only when transparency is needed; otherwise use optimized JPG/WebP sources.

---

## 1. Shared Brand Assets

### Header Logo
- Used in: `src/components/Header.tsx:64`
- Recommended format: `SVG`
- PNG fallback size: `1026 x 705`
- Aspect ratio: `342:235` (~`1.455:1`)
- Notes: transparent background, centered logo, high clarity

### Footer Logo
- Used in: `src/components/Footer.tsx:49`
- Recommended format: `SVG`
- PNG fallback size: `1026 x 705`
- Aspect ratio: `342:235` (~`1.455:1`)
- Notes: same source as header logo

---

## 2. Homepage

### Hero Slider
- Used in: `src/app/page.tsx:190`
- Recommended size: `2400 x 1000`
- Aspect ratio: `12:5` (~`2.4:1`)
- Notes:
  - full-width banner image
  - keep subject in center-safe zone
  - avoid critical content near top and bottom

### About Section Small Gallery Images
- Used in: `src/app/page.tsx:267`, `src/app/page.tsx:304`
- Recommended size: `800 x 800`
- Aspect ratio: `1:1`
- Notes: square crop-friendly supporting visuals

### Product Showcase Main Image
- Used in: `src/app/page.tsx:340`
- Recommended size: `1600 x 1200`
- Aspect ratio: `4:3`
- Notes: large content image beside text

### Production Unit Feature Image
- Used in: `src/app/page.tsx:420`
- Recommended size: `1600 x 1200`
- Aspect ratio: `4:3`
- Notes: large editorial image, should look good with mild crop

### Education & Training Feature Image
- Used in: `src/app/page.tsx:469`
- Recommended size: `1600 x 1200`
- Aspect ratio: `4:3`
- Notes: same spec as above for consistency

### Leadership Team Images
- Used in: `src/app/page.tsx:503`
- Recommended size: `1200 x 1500`
- Aspect ratio: `4:5`
- Notes:
  - portrait-oriented photos
  - keep face in upper-middle area
  - works well with `object-top`

### Service / Category Cards
- Used in: `src/app/page.tsx:542`
- Recommended size: `1200 x 800`
- Aspect ratio: `3:2`
- Notes: medium cards with hover zoom

---

## 3. About Us Page

### About Hero Slider
- Used in: `src/app/about-us/page.tsx:41`
- Recommended size: `2400 x 1100`
- Aspect ratio: ~`2.18:1`
- Notes:
  - this section is taller than other hero banners
  - people/group photos should keep heads and shoulders inside center-safe area
  - all slider images should use the same ratio

---

## 4. Contact Us Page

### Contact Hero Banner
- Used in: `src/app/contact-us/page.tsx:141`
- Recommended size: `2400 x 1000`
- Aspect ratio: `12:5`
- Notes: dark-overlay-friendly background image

---

## 5. Production Unit Page

### Production Hero Slider
- Used in: `src/app/production-unit/page.tsx:108`
- Recommended size: `2400 x 1000`
- Aspect ratio: `12:5`
- Notes: all production hero slides should match this ratio

### Production Cards Grid Images
- Used in: `src/app/production-unit/page.tsx:148`
- Recommended size: `1200 x 800`
- Aspect ratio: `3:2`
- Notes: grid card images

### Production Side Feature Image
- Used in: `src/app/production-unit/page.tsx:228`
- Recommended size: `1600 x 1067`
- Aspect ratio: `3:2`
- Notes: image sits beside long text content

---

## 6. Education & Training Page

### Education Hero Slider
- Used in: `src/app/investor/page.tsx:127`
- Recommended size: `2400 x 1000`
- Aspect ratio: `12:5`
- Notes: same hero standard as other full-width banners

### Education Side Feature Images
- Used in: `src/app/investor/page.tsx:214`, `src/app/investor/page.tsx:298`, `src/app/investor/page.tsx:367`
- Recommended size: `1600 x 1067`
- Aspect ratio: `3:2`
- Notes: feature/editorial images next to content blocks

### Education Program Cards
- Used in: `src/app/investor/page.tsx:259`, `src/app/investor/page.tsx:327`
- Recommended size: `900 x 600`
- Aspect ratio: `3:2`
- Notes: smaller supporting thumbnails

---

## 7. Product Detail Pages

Used via: `src/components/ProductDetailPage.tsx`

### Product Hero Slider
- Used in: `src/components/ProductDetailPage.tsx:128`
- Recommended size: `2400 x 1000`
- Aspect ratio: `12:5`
- Notes: use same spec for all product hero slides

### Product Main Content Image
- Used in: `src/components/ProductDetailPage.tsx:180`
- Recommended size: `1600 x 1200`
- Aspect ratio: `4:3`
- Notes: large image beside product description

### Applies To
- `src/app/products/agriculture/page.tsx`
- `src/app/products/industrial/page.tsx`
- `src/app/products/commercial-consumer-drones/page.tsx`
- `src/app/products/defence-tactical-uav-solutions/page.tsx`

---

## 8. Recommended File Naming

- Hero banners: `page-name_hero_01.jpg`
- Card images: `section-name_card_01.jpg`
- Team photos: `person-name_profile_01.jpg`
- Logos: `brand-logo.svg`

Examples:
- `about_hero_01.jpg`
- `homepage_productshowcase_agriculture.jpg`
- `production_card_02.jpg`

---

## 9. Quick Team Handoff Version

Send this to the design/content team:

> Please provide images based on section type, not random sizes.  
> Hero banners: `2400 x 1000`  
> About hero: `2400 x 1100`  
> Large content images: `1600 x 1200`  
> Side feature images: `1600 x 1067`  
> Medium cards: `1200 x 800`  
> Small cards/thumbnails: `900 x 600`  
> Square gallery images: `800 x 800`  
> Team portraits: `1200 x 1500`  
> Logos: SVG preferred  
> Keep important content centered with safe margins on all sides.
