---
title: Sereno component catalog
created: 2026-09-28
updated: 2026-09-28
type: module
tags: [module, architecture, integration, documentation]
project: massaggi-sereno
status: active
confidence: high
sources: [src/app/app.component.ts, src/app/landing-page/landing-page.component.ts, src/app/landing-page/treatments.component.ts, src/app/landing-page/flow-line.component.ts, src/app/landing-page/contact.component.ts]
---

# Sereno component catalog

Catalogo operativo dei componenti principali. La presenza del codice non dimostra l’approvazione del contenuto cliente o la verifica in produzione.

## Shell e routing

### AppComponent
- **Responsabilità:** espone il `RouterOutlet`.
- **Fonte:** `src/app/app.component.ts`.
- **Limite:** non contiene layout o dati della landing.

### LandingPageComponent
- **Responsabilità:** compone la pagina e inizializza le animazioni browser GSAP/ScrollTrigger.
- **Interazioni:** reveal, parallax hero, movimento orizzontale, image reveal.
- **Fonte:** `src/app/landing-page/landing-page.component.*`.
- **Limite:** nessun backend, nessun caricamento dati cliente.

## Esperienza scroll

### FlowLineComponent
- **Responsabilità:** renderizza il path SVG e visualizza il progresso globale dello scroll.
- **Implementazione:** listener passivo, `requestAnimationFrame`, Signal, cleanup in `ngOnDestroy`.
- **Fonte:** `src/app/landing-page/flow-line.component.*`.
- **Verifica:** build SSR/prerender; comportamento visuale richiede browser QA.

### Orchestrazione GSAP
- **Responsabilità:** anima selettori della landing solo in browser e fuori da reduced motion.
- **Implementazione:** import dinamici di `gsap` e `gsap/ScrollTrigger`, `gsap.context()` e revert.
- **Fonte:** `src/app/landing-page/landing-page.component.ts`.
- **Limite:** immagini remote e resa visuale dipendono dal browser/rete.

## Trattamenti

### TreatmentsComponent
- **Responsabilità:** mostra quattro trattamenti: Decontratturante, Svedese, Linfodrenaggio e Olistico.
- **Interazione:** Signal `expanded`, disclosure accessibile, drag orizzontale con Pointer Events.
- **Fonte:** `src/app/landing-page/treatments.component.*`.
- **Limite:** prezzi impostati a `da definire`; nessuna prenotazione.

## Contatto

### ContactComponent
- **Responsabilità:** raccoglie nome e messaggio nel form e mostra lo stato locale di invio.
- **Fonte:** `src/app/landing-page/contact.component.*`.
- **Limite:** il submit non trasmette dati; il link WhatsApp usa un placeholder non verificato.

## Dati e contenuto

- Le immagini attuali sono URL Unsplash remoti in `landing-page.component.html`.
- I testi su Davide, recensioni, prezzi e contatto sono contenuti provvisori o dichiaratamente non verificati.
- I token visuali sono centralizzati in `src/styles.css`; le regole di sezione sono scoped nei CSS component.

Pagine correlate: [[application-modules.md|moduli]], [[../architecture/system-architecture.md|architettura]], [[../runbooks/local-development.md|runbook]] e [[../current-status.md|stato corrente]].
