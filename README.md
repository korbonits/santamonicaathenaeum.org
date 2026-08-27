# santamonicaathenaeum.org

Static Astro site for The Santa Monica Athenaeum. Deployed to Netlify.

## Run locally

```sh
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # output in dist/
```

## Update the founder count

Edit `FOUNDER_COUNT` in `src/founding.ts`. That single number drives the
"X of 25" counter on the index page (the "of N" advances automatically to
the next threshold: 25 → 50 → 100). Thresholds and the contact email live
in the same file.

## Paste the founder's letter

`src/pages/index.astro`, in the "Why" section — replace the TODO comment
and the bracketed placeholder paragraph with the letter. Plain `<p>`
paragraphs; the layout handles the rest.

## Recent acquisitions

Add entries to `ACQUISITIONS` in `src/acquisitions.ts` (newest first;
title, author, optional note). The section on `/collection` renders only
when the list is non-empty. Keep the last ~10 and delete older ones.

## TinyCat catalog

Two placeholders, both marked with TODO comments:

- `src/pages/collection.astro` — the main embed/link.
- `src/pages/index.astro` — the sentence in "The collection" pointing at it.

Use either a plain link to `librarycat.org/lib/<library>` or TinyCat's
iframe widget.

## Swap the pledge form for a payment link later

The pledge form is in `src/pages/join.astro` and submits via Netlify
Forms (submissions appear under **Forms → pledge** in the Netlify
dashboard; success redirects to `/thanks`). When 501(c)(3) status lands
and you can take money:

1. Replace the `<form>` (or just the tier `<select>` + submit button)
   with links to your payment processor's hosted checkout — one link per
   tier (Stripe Payment Links work well and need no backend).
2. If the form goes away entirely, delete the hidden `form-name` input
   and honeypot with it, and update the "pledges, not payments" copy on
   the index page's Membership section.
3. Keep `/thanks` — point the payment processor's success URL at it.
