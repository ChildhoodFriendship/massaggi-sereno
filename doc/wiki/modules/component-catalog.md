---
title: Catalogo componenti
created: 2026-10-06
updated: 2026-10-06
type: module
tags: [module, architecture, performance]
project: massaggi-sereno
status: active
confidence: high
sources: [src/app/app.component.ts, src/app/app.routes.ts, src/app/landing-page/landing-page.component.ts, src/app/landing-page/flow-line.component.ts, src/app/landing-page/treatments.component.ts, src/app/landing-page/contact.component.ts]
---

# Catalogo componenti

| Componente | Scopo | Input/output | Vincoli |
|---|---|---|---|
| `AppComponent` | Shell minima con `RouterOutlet`. | Nessun input/output. | Standalone, OnPush; non contiene logica di pagina. |
| `LandingPageComponent` | Composizione della landing e animazioni scroll-led. | Nessun input/output pubblico; include child component. | OnPush; importa GSAP/ScrollTrigger dinamicamente solo browser; `gsap.context().revert()` in destroy. |
| `FlowLineComponent` | Collega la linea SVG al progresso pagina. | Signal `progress` 0–1 letto dal template. | `window`/`document`/RAF protetti da guard browser; listener e frame rimossi in destroy. |
| `TreatmentsComponent` | Card trattamenti con disclosure e track trascinabile. | `treatments` readonly tipizzato; Signal `expanded`; pointer events sul container. | Nessun backend; prezzi e copy sono placeholder; pointer capture deve essere rilasciato. |
| `ContactComponent` | Presentazione del form e conferma locale. | Signal `sent`; `submit()` aggiorna solo stato locale. | `FormsModule`; nessun payload o provider esterno. |

## Flusso applicativo

`AppComponent → RouterOutlet → route lazy `/` → LandingPageComponent → FlowLine/Treatments/Contact`.

## Utility e servizi

Non risultano servizi applicativi, API client o utility condivise nel perimetro corrente della landing. Le integrazioni future devono essere catalogate qui solo dopo l’introduzione nel codice e la verifica del contratto.

## Evidenze e rischi

La presenza dei componenti conferma il codice, non l’accettazione dei contenuti, la qualità visuale o l’integrazione di servizi esterni. Vedere [`current-status.md`](../current-status.md) per i gap aperti.
