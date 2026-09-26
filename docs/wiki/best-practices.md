# Best practices

- Build the landing page from focused Angular standalone components; keep the root component responsible only for composition/routing.
- Use strict TypeScript, typed readonly data, Signals for local interactive state, and Angular control flow (`@if`, `@for`).
- Keep browser-only APIs behind platform checks so the SSR and hydration paths remain safe.
- Prefer native CSS transitions, SVG, `requestAnimationFrame`, and browser scroll APIs before adding animation dependencies.
- Centralize Sereno design tokens in `src/styles.css`; keep component CSS scoped to layout and component behavior.
- Treat contact/booking links as configuration placeholders until Davide supplies real details. Never ship secrets or personal credentials.
- Check keyboard focus, semantic headings, reduced-motion preferences, mobile layout, `npm run build`, and `npm run test` before declaring a milestone complete.
