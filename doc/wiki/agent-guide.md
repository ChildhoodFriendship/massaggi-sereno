---
title: Guida operativa per gli agenti
created: 2026-10-06
updated: 2026-10-06
type: guidance
tags: [guidance, workflow, testing, security, documentation]
project: massaggi-sereno
status: active
confidence: high
sources: [Agents.md, SCHEMA.md, package.json, angular.json]
---

# Guida operativa per gli agenti

Obiettivo: modifiche piccole, sicure, verificabili e riprendibili.

## Prima di agire

1. Leggere `SCHEMA.md`, `index.md`, `current-status.md` e le ultime 20–30 righe di `log.md`.
2. Eseguire `git status --short --branch`.
3. Cercare simboli e chiamanti; leggere manifest, configurazione, sorgente e test pertinenti.
4. Trattare modifiche locali preesistenti come dell’utente: non sovrascriverle, resettarle, committarle o pubblicarle.
5. Applicare il cambiamento minimo coerente con outcome, vincoli e acceptance check. Se manca evidenza runtime, non simulare il risultato.

## Convenzioni tecniche

- Angular standalone, TypeScript strict, `ChangeDetectionStrategy.OnPush` e Signals per stato UI locale.
- Componenti focalizzati con file `.ts`, `.html`, `.css` adiacenti; child component in sottocartelle dedicate quando il confine lo richiede.
- Stili globali e token in `src/styles.css`; stile di sezione nel CSS del componente.
- Template semantici, focus visibile, responsive layout, immagini con dimensioni stabili e fallback `prefers-reduced-motion`.
- API browser (`window`, `document`, RAF) e GSAP solo con guard SSR e cleanup in destroy; GSAP resta lazy/importato nel browser.
- Esplicitare gli access modifier sui nuovi membri/metodi quando coerente con il file. Usare parentesi graffe negli `if` non banali e commenti solo per logica non ovvia.
- Prima di un nuovo import o pacchetto controllare `package.json`.

### Convenzioni condizionali per future integrazioni

Se arriveranno API, dialog o persistenza, separare preparazione ed esecuzione: `requestEdit()`/`requestAdd()` preparano UI e contesto; `submitSave(data)`/`submitDelete(data)` eseguono; `loadData()`/`refreshData()` recuperano. Usare `camelCase` nel frontend e mapping esplicito per eventuali contratti `snake_case`. Un eventuale realtime deve avere un solo flusso `topic → parser → state → renderer`, con cleanup verificato.

## Contenuti e privacy

Form, WhatsApp, prezzi, immagini, recensioni, biografia e dati cliente sono placeholder finché non approvati e verificati. Il form corrente è presentation-only: non invia dati. Non inserire segreti, token, password, dati personali o endpoint privati nella wiki/codice.

## Verifica

Eseguire e riportare l’esito reale:

- `npm run test -- --watch=false --browsers=ChromeHeadless`
- `npm run build`
- smoke HTTP/browser QA desktop-mobile quando disponibili.

Build SSR/prerender e test unitari non certificano resa visuale, accessibilità, asset remoti o provider esterni.

## Manutenzione wiki e handoff

Dopo una modifica sostanziale aggiornare la pagina pertinente, `index.md` e `log.md`, indicando fonti e confidence. Il report finale deve contenere solo **Changed**, **Verified**, **Blocked/remaining**. Prima di chiudere eseguire `git diff --check` e distinguere file già sporchi da quelli modificati dall’agente.
