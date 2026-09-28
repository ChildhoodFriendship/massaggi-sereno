---
title: Current status — Sereno Studio
created: 2026-09-28
updated: 2026-09-28
type: status
tags: [status, milestone, project]
project: massaggi-sereno
status: active
confidence: medium
sources: [package.json, angular.json, src/app/app.routes.ts, src/app/landing-page/landing-page.component.ts, src/app/landing-page/treatments.component.ts, docs/wiki/milestones.md]
---

# Current status — Sereno Studio

> Snapshot: 2026-09-28. Questa pagina descrive evidenze del repository, non una certificazione di release.

## Repository snapshot

| Elemento | Valore osservato |
|---|---|
| Branch | `main` |
| HEAD | `77b152b` — `feat: enhance landing page with updated content and improved animations` |
| Framework | Angular `^22.2.0` |
| Rendering | SSR, prerender e client hydration con event replay |
| Dipendenza motion | GSAP `^3.15.0`, import dinamico |
| Route | Root lazy-loaded; wildcard redirect a root |
| Test script | `ng test` via Karma |
| Build script | `ng build` |

## Implementato

- Shell Angular standalone e route landing lazy.
- Landing editoriale responsive con hero, manifesto, treatments, about, image band, reviews e contact.
- Flow Line SVG collegata allo scroll con Signal e RAF.
- Card treatments espandibili e drag orizzontale.
- GSAP/ScrollTrigger per reveal, parallax, image reveal e movimento orizzontale.
- Guard SSR e fallback reduced motion.
- Contatto presentation-only e CTA WhatsApp placeholder.

## Milestone

| Milestone | Stato | Evidenza / prossimo gate |
|---|---|---|
| M0 — Foundation | Completata | Bootstrap, route, SSR/hydration e componenti presenti nel sorgente. |
| M0.5 — Motion direction | Completata nel codice | GSAP lazy, parallax, reveal, immagini, horizontal track; serve browser QA. |
| M1 — Client content | Aperta | Approvare biografia, foto, recensioni, prezzi e copy finale. |
| M2 — Contact integration | Aperta | Configurare provider form e identificativo reale di prenotazione/WhatsApp. |
| M3 — Release confidence | Follow-up | Eseguire QA browser desktop/mobile, accessibilità e smoke end-to-end. |

## Verifica

- `npm run build`: **passato il 2026-09-28**; prerender della route root e chunk lazy per landing/ScrollTrigger generati.
- `npm run test -- --watch=false --browsers=ChromeHeadless`: **passato il 2026-09-28**; 2 test superati. Angular segnala solo la deprecation del builder Karma.
- Browser visuale: non certificato quando Chromium non è disponibile nell’ambiente.

## Lacune esplicite

- Il form non invia dati.
- Il numero WhatsApp è placeholder.
- Immagini Unsplash, recensioni, prezzi e contenuti cliente non sono asset/dati di produzione verificati.
- Il build non dimostra la qualità visuale delle animazioni o la disponibilità delle risorse remote.

## Prossime azioni

1. Sostituire contenuti e immagini con materiali approvati.
2. Configurare e verificare il provider di contatto.
3. Eseguire browser QA a desktop/mobile e audit accessibilità.
4. Aggiornare questa pagina e [[milestones.md|milestone]] con le evidenze reali.

Pagine correlate: [[projects/massaggi-sereno.md|progetto]], [[architecture/system-architecture.md|architettura]], [[modules/component-catalog.md|catalogo]] e [[runbooks/local-development.md|runbook]].
