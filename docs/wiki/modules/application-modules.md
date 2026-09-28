---
title: Application modules and landing boundaries
created: 2026-09-28
updated: 2026-09-28
type: module
tags: [module, architecture, integration, status]
project: massaggi-sereno
status: active
confidence: high
sources: [src/app/landing-page/landing-page.component.ts, src/app/landing-page/landing-page.component.html, src/app/landing-page/treatments.component.ts, src/app/landing-page/flow-line.component.ts, src/app/landing-page/contact.component.ts, src/styles.css]
---

# Application modules and landing boundaries

## Composition pattern

La route root carica un solo feature component lazy. `LandingPageComponent` compone le sezioni della landing e tiene l’orchestrazione GSAP; i comportamenti locali restano nei componenti dedicati.

## Sezioni applicative

- **Hero:** payoff, CTA, immagine remota, coordinate e indicatore scroll.
- **Manifesto/metodo:** messaggio editoriale e link ai trattamenti.
- **Treatments:** quattro trattamenti typed, disclosure Signal e trascinamento orizzontale Pointer Events.
- **About:** testo su Davide e immagine remota placeholder.
- **Image band:** fascia visuale con immagine remota.
- **Reviews:** singola frase placeholder, non una recensione verificata.
- **Contact:** CTA WhatsApp placeholder e form locale presentation-only.
- **Flow Line:** decorazione SVG persistente, scroll-linked e SSR-safe.

## Confini dei componenti

| Modulo | Stato posseduto | Confine |
|---|---|---|
| `LandingPageComponent` | contesto GSAP lifecycle | non gestisce dati di prenotazione o stato dei form |
| `TreatmentsComponent` | trattamento aperto, drag pointer | non persiste prezzi o prenotazioni |
| `FlowLineComponent` | progresso scroll | non modifica la pagina e pulisce listener/RAF |
| `ContactComponent` | `sent` locale | non esegue fetch e non invia dati |
| global styles | token, tipografia, reduced motion | non ospita feature state |

## Regole operative

- I dati trattamento sono readonly e typed vicino al feature finché non esiste riuso reale.
- Mantieni Signals per stato UI locale e `OnPush` per i componenti.
- Ogni nuova sezione significativa deve avere componenti standalone e stili adiacenti quando il confine lo giustifica.
- Le API browser devono avere guard SSR e cleanup esplicito.
- Nuovi link di prenotazione o dati cliente restano placeholder finché il proprietario non li fornisce e verifica.

## Flussi

### Scroll

`window scroll` → callback passiva → RAF → `progress` Signal → `FlowLineComponent` aggiorna `stroke-dashoffset`.

`AfterViewInit browser` → dynamic import GSAP/ScrollTrigger → reveal/parallax/clip-path/horizontal track → `OnDestroy` revert context.

### Trattamento

Pointer drag aggiorna `scrollLeft`; click aggiorna `expanded`; il template mostra la descrizione della card selezionata.

### Contatto

Validazione HTML/FormsModule → `submit()` → `sent.set(true)` → messaggio locale. Non esiste una submission remota verificata.

## Gap di verifica

- Mancano dati cliente approvati per prezzi, recensioni, immagini proprietarie e canale WhatsApp.
- Il browser QA desktop/mobile non è parte del codice e deve essere eseguito separatamente.
- Gli URL Unsplash e il link WhatsApp placeholder non sono contratti di produzione.

Pagine correlate: [[../architecture/system-architecture.md|architettura]], [[component-catalog.md|catalogo componenti]], [[../current-status.md|stato corrente]] e [[../token-usage.md|uso del contesto]].
