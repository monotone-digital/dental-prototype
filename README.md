# Hafiz Ayub Dental Care

A compact client-presentation landing page built with Next.js App Router, TypeScript, Tailwind CSS v4, and Motion.

## Run locally

```sh
npm install
npm run dev
```

Open http://localhost:3000.

## Production

```sh
npm run build
```

The static website is exported to `out/` and can be served by any static hosting provider. `next start` does not serve static exports; use `npx serve out` for a production preview.

## Design and interactions

- Sticky navigation stays at the top on desktop and mobile, with the hero pinned beneath its 88px height.
- A first-visit guide adds three consultation steps, useful questions, and a preparation checklist, with an animated timeline and sticky desktop introduction.

- Sticky sculptural hero that stays pinned while the rounded content layer scrolls over it, with scroll-driven image scaling and shading.
- Dedicated forest-green services gallery with four selectable service cards, staggered entrances, image parallax, and contextual service descriptions.
- Scroll-linked word reveals, rotating accents, reading-progress bar, and a sliding closing headline.
- Three clearly labeled sample dental testimonials in a manually controlled carousel, with a separate link to the six Google reviews in the supplied listing.
- Native accessible appointment dialog with phone, WhatsApp draft, and Google Maps links. No patient information is collected or stored.
- Reduced-motion support and keyboard focus treatment.

## Content and assets

All imagery was generated through the connected Magnific MCP using Seedream 5 Pro and saved locally as optimized WebP files. Images are illustrative concept assets, not actual patients, clinical results, or clinic photographs.

- Human dental-checkup hero: https://www.magnific.com/app/creation/XmsX2viBfo — `public/images/hero-dental-checkup.webp`
- Restorative service still life: https://www.magnific.com/app/creation/gOTFTpVSXO — `public/images/hero.webp`
- Checkups: https://www.magnific.com/app/creation/Xms6g87Bfo — `public/images/dental-checkup.webp`
- Braces: https://www.magnific.com/app/creation/tCw2JqkmZJ — `public/images/dental-braces.webp`
- Whitening: https://www.magnific.com/app/creation/LwctT3uswO — `public/images/dental-whitening.webp`

Clinic identity and contact links are centralized in `lib/clinic.ts`. The name, address, phone, Facebook page, and six-review count come from the user-supplied listing. All listed dental services were confirmed by the user. The weekly schedule and testimonials are labeled placeholders. WhatsApp uses the supplied clinic number; its availability has not been independently verified.

Service priorities: everyday dental care (checkups, scaling and polishing, fillings), repair and restoration (root canals, extractions, crowns and bridges, dentures, implants), braces and alignment, then teeth whitening. The existing palette, layout, and animations are retained.

### Image prompts

The hero was generated at 16:9 and 2K with this prompt:

> Use case: photorealistic-natural. Asset type: full-width dental clinic website hero. An ultra-realistic, reassuring human moment during a routine dental checkup in a modern, immaculate treatment room with warm cream, soft beige, and muted sage details. An adult South Asian woman is comfortably reclined in a dental chair while a professional South Asian dentist performs a gentle routine examination with a dental mirror. Both look calm and natural, with realistic clinical gloves, mask, instruments, chair, and overhead light. Premium editorial healthcare photography with true-to-life skin texture and natural teeth. Compose the patient and dentist mainly in the center-right half, leaving the left 38 percent visually quiet for website copy while preserving centered detail for a tall mobile crop. Soft daylight and warm clinical ambient light. Anatomically correct hands and faces; medically plausible posture and equipment. No blood, surgery, fear, exaggerated open mouth, unnaturally white teeth, beauty retouching, logos, captions, or watermark.

Generated through the connected Magnific plugin with Seedream 5 Pro, one image per prompt, portrait 3:4. Each prompt uses this shared direction:

> Use case: product-mockup. Asset: portrait dental clinic service card. Premium editorial still-life photography, sculptural composition, warm cream background, muted olive and blush accents, soft directional studio light, delicate shadows, tactile materials, understated elegant mood. Subject centered with generous space around it, no text, no logo, no watermark, no people, no blood.

Subjects appended to that direction:

- Checkups: A polished stainless steel dental examination mirror and dental probe arranged diagonally on a folded ivory linen cloth beside a small porcelain tooth sculpture. Clean instruments and refined calm composition.
- Braces: An elegant ivory teaching model of a curved upper row of teeth fitted with fine silver orthodontic brackets and a single delicate wire, on a round pale stone plinth. Sculptural accurate dental braces model, close-up three-quarter view. Subtle sage background.
- Whitening: A fan of natural tooth shade tabs with warm ivory ceramic tooth tips, beside one luminous white porcelain tooth sculpture on a blush stone pedestal. Tasteful dental teeth-whitening concept, softly folded champagne fabric at base.

Design references: https://www.dentalux.net/ and https://lavadental.lv/en. Artwork, layout, and implementation are original.

The preview is deliberately marked noindex. Remove that setting in app/layout.tsx when the client approves public launch.
