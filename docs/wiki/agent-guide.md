---
title: Guida operativa per gli agenti
created: 2026-10-06
updated: 2026-10-06
type: guidance
tags: [guidance, workflow, testing, security, documentation]
project: massaggi-sereno
status: active
confidence: high
sources: [Agents.md, SCHEMA.md, current-status.md, package.json, angular.json]
---

# Guida operativa per gli agenti

Accordo operativo per lavorare su `massaggi-sereno`: ogni task deve essere piccolo, sicuro, verificabile e riprendibile.

## 1. Preflight obbligatorio

Prima di modificare la repository:

1. Eseguire `git status`.
2. Se esistono modifiche locali non committate, fermarsi e comunicarlo; non fare fetch, pull, branch, spostamenti o cancellazioni.
3. Se il working tree è pulito, eseguire `git fetch` e `git pull --ff-only` sul branch corrente.
4. Se pull fallisce o i branch sono divergenti, mostrare lo stato e attendere; non risolvere autonomamente.
5. Lavorare su un branch `hermes/<task>`, mai direttamente su `main`.

Un push o commit è ammesso solo quando richiesto esplicitamente dall’utente.

## 2. Orientarsi prima di agire

1. Leggere [[SCHEMA.md|SCHEMA]], [[index.md|indice]], [[current-status.md|stato corrente]] e le ultime 20–30 righe di [[log.md|log]].
2. Eseguire il preflight Git sopra indicato.
3. Cercare simboli e chiamanti con ricerche mirate.
4. Leggere sorgente, configurazione e test pertinenti.
5. Trattare modifiche locali preesistenti come dell’utente e non sovrascriverle.

Quando l’utente chiede qualcosa sul repository, eseguire il cambiamento minimo utile salvo richiesta esplicita di sola discussione. Se manca evidenza runtime, aggiungere solo diagnostica mirata; non introdurre comportamento speculativo.

## 3. Contratto del task e fonti

Definire prima outcome, scope, vincoli e acceptance check. Distinguere modifiche UI visual-only, behavior-preserving e behavior-changing.

In caso di conflitto usare questo ordine:

1. codice/configurazione corrente verificati;
2. output di build, test e runtime;
3. documentazione esplicita del progetto;
4. wiki con confidence `medium` o `low`;
5. inferenza dell’agente, sempre dichiarata.

La presenza di un componente prova che il codice esiste, non che contenuti, servizi esterni o flussi utente siano accettati in produzione.

## 4. Disciplina e convenzioni tecniche

- Toccare solo i file necessari; evitare refactor estranei.
- Mantenere Angular standalone, TypeScript strict, Signals per stato locale e `OnPush`.
- Tenere componenti focalizzati; child component in sottocartelle dedicate quando il confine lo richiede.
- Mantenere stili globali/token in `src/styles.css` e stili di sezione nei CSS dei componenti.
- Usare template semantici, focus visibile, responsive layout, dimensioni stabili per immagini e fallback `prefers-reduced-motion`.
- Esplicitare access modifier su nuovi metodi e membri quando compatibile con lo stile corrente; usare parentesi graffe negli `if`.
- Aggiungere JSDoc a nuove funzioni con `@param` e `@returns` quando applicabile.
- Controllare `package.json` prima di aggiungere import o dipendenze.
- Non inserire segreti, token, password, dati personali o endpoint privati nella wiki o nel codice.
- Non fare commit, push, reset o riscrittura della storia senza richiesta esplicita.

### Browser, SSR e animazioni

Proteggere `window`, `document`, RAF e librerie browser con guard SSR. Rimuovere listener, frame e contesti GSAP in destroy. GSAP/ScrollTrigger deve restare lazy e browser-only. Una nuova integrazione realtime futura dovrà avere un solo flusso `topic → parser → state → renderer`, con lifecycle e cleanup espliciti.

### Convenzioni condizionali per future API/form

Se verranno introdotti dialog, persistenza o API, separare preparazione ed esecuzione: `requestEdit()`/`requestAdd()` preparano contesto e UI; `submitSave(data)`/`submitDelete(data)` eseguono; `loadData()`/`refreshData()` recuperano. Usare `camelCase` nel frontend e mapping esplicito per contratti `snake_case`; mantenere un solo percorso canonico di persistenza. Per artefatti di dominio futuri, separare tipi, definitions e helper in un modulo dedicato invece di accumularli nel componente.

## 5. Verifica

Eseguire prima il controllo più stretto, poi i gate disponibili:

- `npm run test -- --watch=false --browsers=ChromeHeadless`
- `npm run build`
- smoke HTTP e QA browser desktop/mobile quando disponibili.

Riportare solo risultati realmente osservati. Build SSR/prerender e test unitari non certificano resa visuale, accessibilità, risorse remote o provider esterni.

## 6. Manutenzione wiki e handoff

Dopo ogni modifica sostanziale aggiornare pagina pertinente, indice e log; indicare fonti e confidence. Prima della consegna eseguire `git status` e `git diff --check`.

Formato handoff:

- **Changed:** file e comportamento modificati;
- **Verified:** comandi e risultato reale;
- **Blocked/remaining:** warning, rischi e verifiche manuali residue.

Pagine correlate: [[current-status.md|stato corrente]], [[projects/massaggi-sereno.md|progetto]] e [[modules/component-catalog.md|catalogo componenti]].
