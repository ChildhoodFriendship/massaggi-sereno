---
title: Sereno Studio project
created: 2026-09-28
updated: 2026-09-28
type: project
tags: [project, deployment, integration]
project: massaggi-sereno
status: active
confidence: high
sources: [package.json, angular.json, src/main.ts, src/main.server.ts, src/app/app.routes.ts, src/app/landing-page/landing-page.component.ts, IDEA.md]
---

# Sereno Studio project

## Purpose

`massaggi-sereno` è una landing page pubblica per lo studio di massaggi e trattamenti olistici di Davide. Il prodotto comunica metodo, trattamenti, tono umano e canale di contatto attraverso una singola esperienza editoriale responsive.

## Repository

- Repository root: `.`
- Branch osservato: `main`
- Build: `npm run build`
- Test: `npm run test`
- Sviluppo locale: `npm start` oppure `ng serve`
- Server SSR generato: `npm run serve:ssr:massaggi-sereno`

## System shape

- Bootstrap browser: `src/main.ts`.
- Bootstrap server: `src/main.server.ts`.
- Route pubblica lazy: `src/app/app.routes.ts` carica `LandingPageComponent` sulla root; il wildcard torna a `''`.
- Shell: `AppComponent` espone il `RouterOutlet`.
- Feature: landing composta da hero, manifesto, treatments, about, image band, reviews e contact.
- Animazioni: GSAP/ScrollTrigger importati dinamicamente solo nel browser; la Flow Line usa Signal e `requestAnimationFrame`.
- Rendering: Angular standalone con SSR, prerender e client hydration con event replay.

## Local development

1. Usa Node/npm compatibili con il manifest Angular 22.
2. Esegui `npm ci` per le dipendenze lockate.
3. Avvia `npm start`.
4. Verifica con test e build prima dell’handoff.
5. Usa dati cliente reali solo quando approvati; il form e il link WhatsApp sono ancora placeholder.

Vedi [[../runbooks/local-development.md|runbook di sviluppo locale]].

## Deployment and operations

- `angular.json` produce bundle browser e server, prerenderizza la route root e copia gli asset da `public/`.
- La configurazione production usa hashing e budget iniziale/style espliciti.
- Il deploy Vercel è descritto dal workflow presente in `.github/workflows/deploy.yml`; i dettagli di runtime vanno verificati dal file e dall’ambiente di deploy.
- Non sono documentati backend di prenotazione, account utente o gestione appuntamenti.

## Vincoli noti

- Il contenuto cliente, le immagini remote, le recensioni, i prezzi e i dati di contatto non sono ancora tutti approvati.
- `contact.component.ts` aggiorna solo uno stato locale: non invia dati.
- Il numero WhatsApp presente nel template è un placeholder non verificato.
- Le immagini Unsplash sono riferimenti remoti e non asset proprietari.
- La disponibilità visuale delle animazioni richiede browser QA; il build da solo non la certifica.

## Evidenze

- `package.json`
- `angular.json`
- `src/app/app.routes.ts`
- `src/app/landing-page/landing-page.component.ts`
- `src/app/landing-page/landing-page.component.html`
- `IDEA.md`

Pagine correlate: [[../current-status.md|stato corrente]], [[../architecture/system-architecture.md|architettura]], [[../modules/application-modules.md|moduli]] e [[../runbooks/local-development.md|sviluppo locale]].
