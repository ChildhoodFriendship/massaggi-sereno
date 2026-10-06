---
title: Catalogo componenti
created: 2026-10-06
updated: 2026-10-06
type: module
tags: [module, architecture, performance, documentation]
project: massaggi-sereno
status: active
confidence: high
sources: [src/app/app.component.ts, src/app/app.routes.ts, src/app/landing-page/landing-page.component.ts, src/app/landing-page/flow-line.component.ts, src/app/landing-page/treatments.component.ts, src/app/landing-page/contact.component.ts]
---

# Catalogo componenti

Catalogo operativo dei componenti presenti nella landing. La presenza nel sorgente non prova accettazione dei contenuti, QA visuale o integrazioni esterne.

## Shell e routing

### `AppComponent`

- **Scopo:** shell minima che espone `RouterOutlet`.
- **Input/output:** nessun input/output pubblico.
- **Vincoli:** standalone e `OnPush`; non deve assorbire logica della landing.
- **Fonte:** `src/app/app.component.ts`.

### Route root

- **Scopo:** caricare lazy `LandingPageComponent` sulla route `/` e redirigere wildcard a `/`.
- **Input/output:** contratto Angular Router.
- **Vincoli:** non esistono altre route applicative nel sorgente corrente.
- **Fonte:** `src/app/app.routes.ts`.

## Landing

### `LandingPageComponent`

- **Scopo:** composizione della pagina e animazioni scroll-led.
- **Composizione:** `ContactComponent`, `FlowLineComponent`, `TreatmentsComponent`.
- **Input/output:** nessun contratto pubblico; stato interno di contesto GSAP.
- **Vincoli:** import dinamico di GSAP/ScrollTrigger solo browser; `gsap.context().revert()` in destroy; fallback reduced-motion.
- **Fonte:** `src/app/landing-page/landing-page.component.ts`.

### `FlowLineComponent`

- **Scopo:** collegare la linea SVG al progresso di scroll.
- **Input/output:** Signal readonly `progress` nel range `0..1`, letto dal template.
- **Vincoli:** guard `isPlatformBrowser`, listener passivo, RAF singolo, rimozione listener e cancellazione frame in destroy.
- **Fonte:** `src/app/landing-page/flow-line.component.ts`.

### `TreatmentsComponent`

- **Scopo:** card interattive dei trattamenti.
- **Input/output:** array readonly `Treatment` locale; Signal `expanded`; pointer events sul track.
- **Vincoli:** nessun backend; prezzi e copy sono placeholder; pointer capture deve essere rilasciato.
- **Fonte:** `src/app/landing-page/treatments.component.ts`.

### `ContactComponent`

- **Scopo:** visualizzare il form e una conferma locale.
- **Input/output:** Signal `sent`; `submit()` aggiorna solo lo stato locale.
- **Vincoli:** usa `FormsModule`; nessun payload, provider o persistenza.
- **Fonte:** `src/app/landing-page/contact.component.ts`.

## Servizi e utility

Non risultano servizi applicativi, API client o utility condivise per il perimetro corrente. Le integrazioni future dovranno essere documentate solo dopo l’introduzione nel codice e la verifica del contratto.

Pagine correlate: [[../projects/massaggi-sereno.md|progetto]], [[../current-status.md|stato]] e [[../agent-guide.md|guida agenti]].
