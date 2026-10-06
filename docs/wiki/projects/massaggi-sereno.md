---
title: Progetto Massaggi Sereno
created: 2026-10-06
updated: 2026-10-06
type: project
tags: [project, architecture, deployment, integration]
project: massaggi-sereno
status: active
confidence: high
sources: [package.json, angular.json, src/main.ts, src/main.server.ts, src/server.ts, src/app/app.config.ts, src/app/app.config.server.ts, src/app/app.routes.ts, src/styles.css, IDEA.md]
---

# Progetto Massaggi Sereno

## Scopo

Landing page pubblica per uno studio di massaggi e trattamenti olistici, con tono caldo/editoriale, sezioni narrative, trattamenti interattivi e call to action di contatto.

## Repository e comandi

- Package: `massaggi-sereno`, versione `0.0.0`, repository privato.
- Sviluppo: `npm start` oppure `ng serve`.
- Build: `npm run build`.
- Test: `npm run test` via Karma.
- SSR locale dopo build: `npm run serve:ssr:massaggi-sereno`.
- Entry browser: `src/main.ts`; entry server: `src/main.server.ts`, `src/server.ts`.
- Asset pubblici: `public/`; stile globale: `src/styles.css`.

## Forma del sistema

Angular 22 standalone con route root lazy. `app.config.ts` abilita event coalescing, router e client hydration con event replay. `app.config.server.ts` aggiunge server rendering; Express serve gli asset browser e renderizza le richieste restanti tramite Angular `CommonEngine`.

La landing usa componenti `OnPush` e Signals per lo stato locale. GSAP/ScrollTrigger viene importato dinamicamente nel browser. La linea di progresso usa scroll listener passivo e RAF. Token colore e font globali sono definiti in `src/styles.css`.

## Confini e integrazioni

Il repository non contiene backend, provider form, CRM, booking o pagamento. Il form è presentation-only e la CTA di prenotazione/WhatsApp è un placeholder. Prezzi, immagini, recensioni, biografia, località e altri contenuti cliente non sono definitivi senza approvazione verificabile.

## Vincoli operativi

Preservare standalone, Signals, `OnPush`, strict TypeScript, guard SSR per API browser e cleanup di animazioni/listener. Una modifica visuale richiede QA browser oltre a build/test. Non inserire credenziali o endpoint privati in codice o documentazione.

Pagine correlate: [[../modules/component-catalog.md|catalogo componenti]], [[../current-status.md|stato]] e [[../agent-guide.md|guida agenti]].
