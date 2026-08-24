# EvolX Games — React + TypeScript + Vite + SCSS

A component-based, animated landing page inspired by the playful, game-first energy of modern game studio websites.

## Stack
- React + TypeScript
- Vite
- SCSS
- CSS keyframe animations
- No UI framework required

## Run locally

```bash
npm install
npm run dev
```

Then open the Vite local URL shown in the terminal.

## Project structure

```text
src/
  components/
    Dice.tsx
    Footer.tsx
    GameShowcase.tsx
    Hero.tsx
    Nav.tsx
    Spirits.tsx
    Studio.tsx
    TabletShowcase.tsx
  data/
    games.ts
  styles/
    global.scss
  App.tsx
  main.tsx

public/
  assets/
```

## Included visuals

The supplied EvolX character cards, game screenshots, fantasy background and tablet mockup have been copied into `public/assets`.

Replace or add images there and update the paths in `src/data/games.ts` or the components.

## Next production steps

- Replace text/logo placeholders with final EvolX branding.
- Add real game links/store badges.
- Add GSAP or Framer Motion for richer scroll choreography if desired.
- Add CMS/API data for games and spirit cards.
- Add SEO/social preview assets and analytics.
