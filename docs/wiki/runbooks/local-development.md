---
title: Local development runbook
created: 2026-09-28
updated: 2026-09-28
type: runbook
tags: [runbook, workflow, testing, deployment, security]
project: massaggi-sereno
status: active
confidence: high
sources: [package.json, package-lock.json, angular.json, src/app/app.config.ts, src/app/app.config.server.ts]
---

# Local development runbook

## Quando usarlo

Usa questo runbook prima di un handoff, quando cambi comportamento visuale o SSR, o quando devi verificare build e test.

## Prerequisiti

- Node/npm compatibili con il toolchain Angular 22 indicato in `package.json`.
- Working tree compreso: esegui `git status --short --branch`.
- Rete disponibile solo se vuoi verificare font e immagini remote.
- Non inserire password, token, dati personali o credenziali nella wiki, nel codice o nei log.

## Procedura

1. Installa dipendenze lockate: `npm ci`.
2. Avvia il server: `npm start`.
3. Apri `http://localhost:4200/`.
4. Esegui i test: `npm run test -- --watch=false --browsers=ChromeHeadless`.
5. Esegui il build production/SSR: `npm run build`.
6. Se cambia una sezione visuale, esegui browser QA desktop/mobile quando Chromium è disponibile.
7. Se cambia SSR o server bundle, avvia `npm run serve:ssr:massaggi-sereno` dopo il build e fai uno smoke HTTP.

## Verifica

- Test Karma/ChromeHeadless completati senza errori.
- `npm run build` completa senza warning non spiegati.
- La route root è prerenderizzata e restituisce HTTP 200 dal server disponibile.
- Il build mostra la route landing e i chunk GSAP/ScrollTrigger lazy.
- Form, link WhatsApp, immagini remote e contenuto cliente sono dichiarati non verificati finché non vengono testati con valori approvati.

## Recovery

- Non cancellare o resettare modifiche non pertinenti.
- Non usare `dist/` come fonte del codice.
- Se un dev server è stale, fermalo e riavvialo dalla root verificata.
- Ripristina solo file modificati dal task e solo con richiesta quando serve usare operazioni di storia Git.

## Troubleshooting

- **La route non carica:** controlla `app.routes.ts`, bootstrap e primo errore di build.
- **Animazioni assenti:** controlla browser, reduced motion, rete delle immagini e console; il build non prova la resa visuale.
- **Errore SSR:** cerca accessi a `window`, `document`, RAF o librerie browser fuori dal lifecycle/guard.
- **Form “inviato” ma nessun messaggio ricevuto:** comportamento atteso; il form è presentation-only.
- **Immagini mancanti:** verifica URL Unsplash e connettività; non trasformare un placeholder in asset di produzione senza approvazione.

Pagine correlate: [[../projects/massaggi-sereno.md|progetto]], [[../architecture/system-architecture.md|architettura]], [[../current-status.md|stato corrente]] e [[../agent-guide.md|guida agenti]].
