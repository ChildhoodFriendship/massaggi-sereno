---
title: Sereno Studio system architecture
created: 2026-09-28
updated: 2026-09-28
type: architecture
tags: [architecture, integration, performance, security]
project: massaggi-sereno
status: active
confidence: high
sources: [src/main.ts, src/main.server.ts, src/app/app.config.ts, src/app/app.config.server.ts, src/app/app.routes.ts, src/app/app.component.ts, src/app/landing-page/landing-page.component.ts, src/app/landing-page/flow-line.component.ts, angular.json]
---

# Sereno Studio system architecture

## Context

Il progetto è una singola landing Angular standalone, renderizzata con SSR/prerender e idratata nel browser. La route pubblica è lazy-loaded. Il comportamento di scroll è diviso tra un componente Flow Line con Signal e una regia GSAP nel componente landing.

## Componenti

| Componente | Responsabilità | Tecnologia | Evidenza |
|---|---|---|---|
| Bootstrap browser | Avvia `AppComponent` con configurazione client | Angular 22 | `src/main.ts` |
| Bootstrap server | Avvia l’app con server rendering | Angular SSR | `src/main.server.ts`, `app.config.server.ts` |
| Router | Carica la landing alla root e reindirizza il wildcard | Router lazy component | `src/app/app.routes.ts` |
| App shell | Espone il punto di inserimento della route | Standalone `OnPush` | `src/app/app.component.ts` |
| Landing page | Compone sezioni, immagini e orchestrazione GSAP | Standalone `OnPush`, dynamic import | `landing-page.component.*` |
| Flow Line | Disegna il percorso SVG e aggiorna il progresso scroll | Signal, RAF, guard SSR | `flow-line.component.*` |
| Treatments | Card espandibili e drag orizzontale | Signal, Pointer Events | `treatments.component.*` |
| Contact | Form presentation-only e stato di invio locale | FormsModule, Signal | `contact.component.*` |

## Runtime flow

1. `main.ts` esegue il bootstrap browser con router, zone event coalescing e client hydration.
2. La root route carica `LandingPageComponent`.
3. Il template compone `FlowLineComponent`, `TreatmentsComponent` e `ContactComponent`.
4. In browser e con motion consentito, il lifecycle importa GSAP e ScrollTrigger e registra reveal, parallax, immagini e movimento orizzontale.
5. La Flow Line aggiorna il progresso tramite scroll passivo e `requestAnimationFrame`.
6. Il form aggiorna solo `sent`; nessun payload viene trasmesso.

## Confini dati e controllo

- **Routing:** il router decide la feature; la landing possiede la composizione.
- **Browser/SSR:** `window`, `document`, RAF e GSAP sono usati solo dopo guard browser/lifecycle.
- **Animazioni:** GSAP possiede le animazioni della landing; Flow Line possiede il proprio listener e cleanup.
- **Stato locale:** Signals gestiscono expanded treatment, progresso Flow Line e form inviato.
- **Contatto:** il template mostra un link WhatsApp placeholder e un form locale; non esiste un provider configurato.
- **Asset:** le fotografie hero/about/band arrivano da URL Unsplash esterni; `public/` contiene solo asset statici locali attualmente presenti.

## Failure modes

- La route non raggiungibile indica un problema di bootstrap/router/build.
- Con `prefers-reduced-motion`, GSAP non viene inizializzato e le transizioni CSS vengono ridotte.
- Immagini remote non disponibili degradano la resa visuale ma non costituiscono un backend failure documentato.
- Un invio del form non implica una richiesta ricevuta: lo stato è locale e presentation-only.
- Il build può passare senza provare rendering visuale, immagini remote o destinazione WhatsApp.

## Security boundaries

- Non inserire numeri reali, credenziali, token o dati personali nella wiki o nel frontend senza configurazione e approvazione.
- Un provider di contatto va integrato con endpoint esplicito e verifica end-to-end prima di raccogliere dati.
- Le immagini e URL esterni devono essere sostituiti o approvati prima della pubblicazione finale.

Pagine correlate: [[../projects/massaggi-sereno.md|progetto]], [[../modules/application-modules.md|moduli]], [[../runbooks/local-development.md|sviluppo locale]] e [[../current-status.md|stato corrente]].
