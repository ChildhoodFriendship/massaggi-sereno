---
title: Progetto massaggi-sereno
created: 2026-10-06
updated: 2026-10-06
type: project
tags: [project, architecture, deployment, integration]
project: massaggi-sereno
status: active
confidence: high
sources: [package.json, angular.json, src/main.ts, src/main.server.ts, src/server.ts, src/app/app.config.ts, src/app/app.routes.ts, src/styles.css, IDEA.md]
---

# Progetto massaggi-sereno

## Scopo

Landing page pubblica per uno studio di massaggi e trattamenti olistici, con tono caldo/editoriale, sezioni narrative, trattamenti interattivi e CTA di contatto.

## Configurazione

- Package: `massaggi-sereno`, versione `0.0.0`, repository privato.
- Sviluppo: `npm start` / `ng serve`.
- Build: `npm run build`.
- Test: `npm run test` (Karma); SSR: `npm run serve:ssr:massaggi-sereno` dopo build.
- Entry browser: `src/main.ts`; server: `src/main.server.ts`, `src/server.ts`.
- Asset pubblici: `public/`; stile globale: `src/styles.css`.

## Forma del sistema

Angular 22 standalone con route root lazy e wildcard redirect. `app.config.ts` abilita zone event coalescing, router e client hydration con event replay. `app.config.server.ts` aggiunge server rendering; Express serve gli asset prerenderizzati e renderizza le richieste restanti.

La landing usa componenti OnPush e Signals per stato locale. GSAP/ScrollTrigger è caricato dinamicamente nel browser; la linea di progresso usa scroll listener passivo e RAF. La palette e i font globali sono definiti in `src/styles.css`.

## Confini d’integrazione

Il repository non contiene backend, provider di form, CRM, booking o pagamento. Il form è presentation-only e il CTA WhatsApp/prenotazione è placeholder. Non usare contenuti, prezzi, immagini, recensioni o dati personali come definitivi senza fonte approvata.

## Vincoli di sviluppo

Preservare standalone, Signals, OnPush, strict TypeScript, guard SSR per API browser e cleanup delle animazioni/listener. Verificare build e test reali; una build SSR non sostituisce QA browser, accessibilità o verifica degli asset remoti.

Pagine correlate: [`component-catalog.md`](../modules/component-catalog.md), [`current-status.md`](../current-status.md), [`agent-guide.md`](../agent-guide.md).
