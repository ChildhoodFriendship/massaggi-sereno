---
title: Uso del contesto — Workflow efficiente
created: 2026-09-28
updated: 2026-09-28
type: policy
tags: [guidance, token-usage, workflow, performance]
project: massaggi-sereno
status: active
confidence: high
sources: [SCHEMA.md, agent-guide.md, index.md, package.json]
---

# Uso del contesto — Workflow efficiente

L’obiettivo non è leggere meno a ogni costo, ma leggere il minimo insieme di evidenze che consenta una modifica corretta.

## Budget di orientamento

1. `SCHEMA.md`
2. `index.md`
3. `current-status.md`
4. ultime 20–30 righe di `log.md`
5. `git status --short --branch`

Non riversare nel contesto l’intero repository, `node_modules` o `dist/`. Usa la mappa per scegliere le pagine e i simboli sorgente pertinenti.

## Regole di indagine

- Cerca simboli, route, selettori o componenti prima di aprire i file.
- Leggi intervalli delimitati con `read_file`.
- Traccia definizione → chiamanti → tipi/contratti.
- Raggruppa ricerche e letture indipendenti nello stesso turno.
- Usa riepiloghi programmatici per inventari ripetitivi.
- Preferisci una fonte autorevole invece di rileggere parafrasi.
- Quando una scoperta è durevole, registrala nella pagina corretta con il percorso sorgente.
- Non incollare segreti o grandi file generati nella conversazione o nella wiki.

## Dimensione del task

| Task | Leggi prima | Smetti quando |
|---|---|---|
| Fix piccolo | stato, indice, file target, chiamanti diretti | causa e verifica sono chiare |
| Cambio modulo | stato, pagina modulo, componenti e template | flusso dati e confine sono chiari |
| Cambio trasversale | stato, architettura, simboli coinvolti | ogni confine ha un’acceptance check |
| Audit ampio | stato, milestone, ricerche mirate, inventario script | il risultato è una tabella con evidenze |

## Evita sprechi

- rileggere `package.json` dopo aver risolto la domanda sulle dipendenze;
- leggere `dist/` per capire il sorgente;
- cercare simboli applicativi in `node_modules`;
- aprire ogni file quando il task nomina un componente;
- ripetere una patch fallita senza rileggere il file corrente;
- dichiarare completato un comportamento solo perché il build passa.

## Compressione del contesto e handoff

Alla fine di un’indagine conserva un riepilogo breve con:

- fatti e percorsi sorgente;
- assunzioni e confidence;
- file che devono cambiare;
- file intenzionalmente non modificati;
- comandi ancora necessari per la verifica.

Per gli handoff usa il formato di [[agent-guide.md|guida agenti]] invece di inoltrare output grezzo; collega [[current-status.md|stato corrente]] quando cambia la confidence di una milestone.

Un agente è finito quando il cambiamento minimo è applicato, la verifica rilevante è eseguita, la wiki conserva la conoscenza durevole e il prossimo agente può trovare le evidenze dall’[[index.md|indice]].
