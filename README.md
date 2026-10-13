# Renew — Skin & Dental Clinic

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

- Sculptural hero with subtle scroll parallax and animated wordmark reveal.
- Responsive navigation, treatment tabs and expandable descriptions.
- Three supplied Google review excerpts in a manually controlled carousel.
- Native accessible appointment dialog with phone, WhatsApp draft, and Google Maps links. No patient information is collected or stored.
- Reduced-motion support and keyboard focus treatment.

## Content and assets

All imagery was generated through the connected Magnific MCP using Seedream 5 Pro and saved locally as optimized WebP files. Images are illustrative concept assets, not actual patients, clinical results, or clinic photographs.

Hero: https://www.magnific.com/app/creation/gOTFTpVSXO
Portrait: https://www.magnific.com/app/creation/UPMqM8Hwny

The address, telephone number, review rating, and review excerpts come from the supplied clinic listing. Full hours, dental service availability, credentials, prices, and actual clinic photography should be confirmed with the client before public launch. WhatsApp uses the supplied clinic number; its account availability has not been independently verified.

Design references: https://www.dentalux.net/ and https://lavadental.lv/en. Artwork, layout, and implementation are original.

The preview is deliberately marked noindex. Remove that setting in app/layout.tsx when the client approves public launch.
