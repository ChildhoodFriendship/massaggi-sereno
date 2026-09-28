---
title: Sereno — Guida per gli agenti
created: 2026-09-28
updated: 2026-09-28
type: guidance
tags: [guidance, workflow, documentation]
project: massaggi-sereno
status: active
confidence: high
sources: [SCHEMA.md, current-status.md, token-usage.md, package.json, angular.json, Agents.md]
---

# Sereno — Guida per gli agenti

Questa è l’intesa operativa per gli agenti che lavorano su `massaggi-sereno`. Ogni intervento deve essere piccolo, sicuro, verificabile e riprendibile.

## 1. Orientarsi prima di agire

1. Leggi [[SCHEMA.md|SCHEMA]], [[index.md|indice]], [[current-status.md|stato corrente]] e le ultime 20–30 righe di [[log.md|log]].
2. Esegui `git status --short --branch` prima di modificare.
3. Individua simboli e usi con ricerche mirate.
4. Leggi sorgente, configurazione e test pertinenti prima di decidere la forma della modifica.
5. Tratta il diff già presente come lavoro dell’utente: non sovrascriverlo, resettarlo o committarlo senza richiesta esplicita.

## 2. Eseguire le richieste di default

Una domanda sul repository è una richiesta operativa, salvo che l’utente chieda esplicitamente solo brainstorming. Ispeziona il sorgente, applica il cambiamento minimo utile e verifica con il comando appropriato.

Se manca un’evidenza runtime necessaria per una correzione sicura, aggiungi solo log diagnostici mirati e riconoscibili, esegui la validazione disponibile e chiedi i log. Non introdurre comportamenti speculativi per simulare un risultato.

## 3. Ordine delle fonti

1. Sorgente e configurazione corrente, verificati dall’esecuzione.
2. Output di build, test e smoke check.
3. Documentazione esplicita del progetto.
4. Wiki con `confidence: medium` o `low`.
5. Inferenza dell’agente, sempre dichiarata come tale.

La presenza di un componente prova che il codice esiste, non che il contenuto finale, il provider esterno o il percorso utente siano accettati in produzione.

## 4. Disciplina delle modifiche

- Tocca solo i file necessari.
- Mantieni Angular standalone, Signals locali, `OnPush`, TypeScript strict, SSR-safe browser APIs e controllo moderno del template.
- Non creare commit, push o riscritture della storia.
- Non inserire credenziali, token, password o endpoint privati nella wiki o nel codice.
- Controlla il manifest prima di aggiungere import o dipendenze.
- Mantieni componenti significativi in file adiacenti `.ts`, `.html`, `.css` e usa sottocartelle quando introduci nuovi child component.
- Dichiarare access modifiers espliciti sui metodi nuovi quando lo stile circostante lo consente.
- Per animazioni legate allo scroll, proteggi `window`, `document`, `requestAnimationFrame` e librerie browser con guard SSR e cleanup.
- Per moduli pubblici, il form attuale è presentation-only: non trasmettere dati personali finché un provider non è configurato e verificato.

### Convenzioni condizionali per moduli futuri

Se in futuro Sereno introdurrà dialog, persistenza o API, mantieni separati preparazione UI ed esecuzione:

- `requestEdit()` prepara il contesto e apre l’editing.
- `requestAdd()` prepara i dati iniziali e apre l’aggiunta.
- `submitSave(data)` riceve una struttura pronta e salva.
- `requestDelete()` prepara conferma/validazione; `submitDelete(data)` esegue la cancellazione.
- `loadData()` o `refreshData()` recuperano dati.

Non fare ricostruire form o popup a `submitSave()`/`submitDelete()`. Usa `camelCase` nel frontend, conserva eventuali campi `snake_case` dei contratti con mapping esplicito, mantieni risultati tipizzati e un solo percorso canonico di persistenza. Preferisci nomi come `loadData()`, `refreshData()`, `parseResponse()` e `buildPayload()` a nomi vaghi.

Se in futuro apparirà un’integrazione realtime, traccia prima il flusso `topic → parser → state → renderer → mode guard`, cerca lifecycle, subscription, handler e refresh già esistenti e non mantenere due funzioni proprietarie dello stesso comportamento. Verifica transizioni, cambio contesto e distruzione con cleanup esplicito.

### Organizzazione e stile

- Metti ogni nuovo child component in una sottocartella dedicata quando il confine lo richiede.
- Mantieni import, indentazione, spaziatura e template coerenti con lo stile corrente.
- Aggiungi un commento conciso sopra funzioni o variabili non autoesplicative, non commenti ridondanti.
- Se un futuro backend richiede costanti endpoint, usa `ENDPOINT_<PURPOSE>` in maiuscolo.
- Usa access modifier espliciti (`private`, `protected`, `public`) su metodi e, quando lo stile lo consente, sui membri.

## 5. Gate di verifica

Esegui i controlli più stretti prima dei gate completi:

- `npm run test -- --watch=false --browsers=ChromeHeadless`
- `npm run build`
- smoke HTTP su `http://localhost:4200/` quando è disponibile un server.

Per modifiche visive, la verifica browser desktop/mobile va dichiarata solo se realmente eseguita. Il build SSR/prerender non prova il comportamento visuale o la disponibilità delle immagini remote.

## 6. Manutenzione della wiki

Dopo una modifica sostanziale:

1. Aggiorna pagina progetto, architettura, modulo, runbook o stato.
2. Ripara i `[[wikilinks]]` utili.
3. Aggiorna `index.md` se aggiungi, rinomini o archivi pagine.
4. Aggiungi una voce concisa a `log.md` con file e verifica.
5. Riduci `confidence` o annota una domanda aperta se la verifica è incompleta.

## 7. Formato handoff

- **Scope:** file e comportamento toccati.
- **Evidence:** comandi, test o percorsi sorgente.
- **Current state:** completato, bloccato o parzialmente verificato.
- **Remaining risk:** contenuto cliente, immagini remote, browser, provider o backend.
- **Next action:** un solo passo concreto.

Pagine correlate: [[current-status.md|stato corrente]], [[modules/application-modules.md|moduli]] e [[token-usage.md|uso del contesto]].
