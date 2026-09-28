# Schema della wiki del progetto

## Scopo

Una knowledge base durevole e ricercabile per il progetto software. Conserva fatti, decisioni, architettura, workflow, milestone e conoscenze di debugging così che i contributori non debbano riscoprire il contesto.

## Convenzioni

- Nomi file: minuscolo, trattini, nessuno spazio.
- Ogni pagina inizia con frontmatter YAML.
- Usa `[[wikilinks]]`; ogni pagina dovrebbe avere almeno due link utili in uscita quando possibile.
- Aggiorna `updated` quando una pagina cambia.
- Aggiungi ogni pagina a `index.md`.
- Registra ogni azione strutturale o di contenuto in `log.md`.
- Preferisci evidenze: file sorgente, comandi, test, log e documentazione ufficiale.
- Non salvare segreti, token, password, chiavi private o credenziali di produzione.
- Marca le informazioni incerte con `confidence: low` e spiega come verificarle.
- Tieni fuori dalle pagine durevoli le note temporanee che non cambiano la conoscenza del progetto.

### Semantica di confidence

- `high` — confermato dal codice/configurazione corrente e, quando rilevante, da un comando riuscito.
- `medium` — supportato dal codice o dalla pianificazione, ma non completamente verificato a runtime.
- `low` — dedotto, obsoleto, contraddittorio o dipendente da evidenze mancanti; la pagina deve indicare cosa manca.

Usa il livello più basso che descrive correttamente la principale affermazione della pagina.

## Frontmatter

```yaml
---
title: Titolo della pagina
created: YYYY-MM-DD
updated: YYYY-MM-DD
type: project | architecture | module | api | decision | workflow | bug | runbook | concept | query | guidance | status | policy
tags: [project, architecture]
project: massaggi-sereno
status: active | superseded | resolved | open | archived
confidence: high | medium | low
sources: [path/relativo/o/url]
---
```

## Tassonomia dei tag

- `project`, `architecture`, `module`, `api`, `database`, `deployment`
- `decision`, `workflow`, `testing`, `debugging`, `performance`, `security`
- `bug`, `runbook`, `dependency`, `integration`, `legacy`, `query`
- `guidance`, `status`, `milestone`, `token-usage`, `documentation`

Aggiungi qui un tag prima di usarne uno nuovo.

## Regole delle pagine

- Crea pagine per progetto, modulo importante, integrazione non ovvia, bug diagnosticato, procedura operativa, decisione architetturale o stato di milestone.
- Non creare pagine per dettagli banali già evidenti dal codice vicino.
- Mantieni le pagine idealmente sotto circa 200 righe; separa i deep dive quando serve.
- Conserva le contraddizioni invece di sovrascriverle senza nota.
- Le pagine di stato possono contenere fatti temporali, ma ogni fatto deve avere una data o una fonte.
- Le pagine guida descrivono comportamenti ripetibili degli agenti e non devono trasformare assunzioni non verificate in fatti.

## Manutenzione obbligatoria

Quando aggiungi o aggiorni una pagina:

1. Controlla se esiste già in `index.md`.
2. Cerca nella wiki termini correlati.
3. Leggi codice, configurazione e test pertinenti.
4. Aggiorna pagina e link.
5. Aggiorna `index.md` e `log.md`.
6. Se è cambiato un comportamento, includi le evidenze di verifica.
7. Se un fatto è incerto, abbassa `confidence` invece di colmare il vuoto con una supposizione.

## Ordine di orientamento degli agenti

1. `SCHEMA.md`
2. `index.md`
3. `current-status.md`
4. ultime 20–30 righe di `log.md`
5. solo dopo le pagine e i sorgenti pertinenti
