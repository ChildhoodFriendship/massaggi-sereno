---
title: Stato corrente — Sereno Studio
created: 2026-10-06
updated: 2026-10-06
type: status
tags: [status, milestone, project, testing]
project: massaggi-sereno
status: active
confidence: medium
sources: [package.json, angular.json, src/app/app.routes.ts, src/app/landing-page, src/app/app.config.server.ts, IDEA.md]
---

# Stato corrente

> Snapshot repository: 2026-10-06. Non è una certificazione di release.

## Baseline verificata

| Area | Stato |
|---|---|
| Stack | Angular 22 standalone, TypeScript 6, SSR/prerender/hydration |
| Route | Landing lazy su `/`; wildcard redirect a `/` |
| Motion | GSAP 3.15 lazy nel browser, ScrollTrigger, RAF e reduced-motion |
| Test/build | Script `npm run test` e `npm run build` presenti |
| Backend | Assente nel repository |
| Form | Solo stato locale di conferma; nessun invio |

## Implementato

- Shell `RouterOutlet` e bootstrap browser/server con `provideClientHydration(withEventReplay())`.
- Landing editoriale responsive: hero, metodo, trattamenti, sezione personale, immagini/reviews e contatto.
- `FlowLineComponent`: progresso scroll in Signal, listener passivo, RAF e cleanup SSR-safe.
- `TreatmentsComponent`: card espandibili, dati tipizzati, drag orizzontale pointer-based.
- `LandingPageComponent`: reveal, parallax, image reveal e horizontal track con cleanup GSAP.

## Milestone e aperti

| Milestone | Stato | Prossimo gate |
|---|---|---|
| Foundation e landing | completata nel codice | mantenere build/test verdi |
| Motion direction | presente nel codice | QA browser desktop/mobile |
| Client content | aperta | approvare copy, biografia, foto, recensioni e prezzi |
| Contact integration | aperta | provider form e destinazione WhatsApp/prenotazione reali |
| Release confidence | aperta | accessibilità, asset remoti e smoke end-to-end |

## Limiti espliciti

- Nessun provider form, CRM, booking, pagamento o raccolta dati personale.
- Dati di prezzo, recensioni, immagini, biografia, località e WhatsApp non sono da considerare definitivi senza approvazione.
- Build/prerender non dimostra qualità visuale, disponibilità delle risorse remote o comportamento su browser reali.

## Verifica registrata dalla vecchia wiki

- `npm run build`: passato il 2026-09-28.
- `npm run test -- --watch=false --browsers=ChromeHeadless`: passato il 2026-09-28, 2 test; warning di deprecation Karma.
- Browser visuale: non certificato per indisponibilità di Chromium nello snapshot precedente.
