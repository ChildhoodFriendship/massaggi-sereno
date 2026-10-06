---
title: Stato corrente — Massaggi Sereno
created: 2026-10-06
updated: 2026-10-06
type: status
tags: [status, milestone, project, testing]
project: massaggi-sereno
status: active
confidence: medium
sources: [package.json, angular.json, src/app/app.routes.ts, src/app/landing-page, src/app/app.config.server.ts, src/server.ts, IDEA.md]
---

# Stato corrente — Massaggi Sereno

> Snapshot: 2026-10-06. Questa pagina descrive evidenze del repository, non una certificazione di release.

## Repository snapshot

| Elemento | Valore osservato |
|---|---|
| Branch di lavoro | `hermes/wiki-migration` |
| Package | `massaggi-sereno` `0.0.0` |
| Framework | Angular `^22.2.0`, standalone, TypeScript `~6.0.0` |
| Rendering | SSR, prerender, client hydration con event replay |
| Motion | GSAP `^3.15.0`, import dinamico, ScrollTrigger |
| Route | `/` lazy-loaded; wildcard redirect a `/` |
| Test | `npm run test` via Karma |
| Build | `npm run build` |
| Backend | Non presente nel repository |

## Milestone

| Milestone | Stato | Prossimo gate |
|---|---|---|
| M0 — Foundation | completata nel codice | mantenere build/test verdi |
| M0.5 — Motion direction | presente nel codice | QA browser desktop/mobile |
| M1 — Client content | aperta | approvare copy, biografia, immagini, recensioni e prezzi |
| M2 — Contact integration | aperta | configurare provider form e destinazione reale di prenotazione |
| M3 — Release confidence | aperta | accessibilità, asset remoti e smoke end-to-end |

## Implementato

- Shell standalone con `RouterOutlet`, root lazy e bootstrap browser/server.
- Landing editoriale responsive con hero, metodo, trattamenti, sezione personale, immagini, recensioni e contatto.
- `FlowLineComponent` con Signal di progresso, listener scroll passivo, RAF e cleanup SSR-safe.
- `TreatmentsComponent` con dati readonly tipizzati, card espandibili e drag orizzontale pointer-based.
- `LandingPageComponent` con reveal, parallax, image reveal e horizontal track gestiti da GSAP.
- Fallback per `prefers-reduced-motion`.

## Verifica

| Check | Risultato | Data/evidenza |
|---|---|---|
| `npm run test -- --watch=false --browsers=ChromeHeadless` | passato, 2 test | 2026-10-06; warning non bloccante di deprecation del builder Karma |
| `npm run build` | passato; 1 route prerenderizzata | 2026-10-06 |
| Browser visuale | non certificato | richiede QA desktop/mobile dedicata |

## Gap e limiti

- Form presentation-only: nessun invio dati.
- Nessun provider form, CRM, booking o pagamento nel repository.
- WhatsApp/prenotazione, prezzi, recensioni, biografia, immagini e contenuti cliente restano placeholder finché non approvati e verificati.
- Build e prerender non dimostrano qualità visuale, accessibilità completa o disponibilità delle risorse remote.

## Task aperti

1. Sostituire placeholder con contenuti e asset approvati.
2. Configurare e verificare un provider di contatto privacy-compliant.
3. Eseguire QA browser desktop/mobile e audit accessibilità.
4. Aggiornare questa pagina con nuove evidenze, senza trasformare piani in fatti.

Pagine correlate: [[projects/massaggi-sereno.md|progetto]], [[modules/component-catalog.md|catalogo componenti]] e [[agent-guide.md|guida agenti]].
