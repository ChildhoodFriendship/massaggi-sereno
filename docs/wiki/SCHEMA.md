---
title: Schema della wiki Sereno
created: 2026-10-06
updated: 2026-10-06
type: policy
tags: [documentation, guidance]
project: massaggi-sereno
status: active
confidence: high
sources: [Agents.md]
---

# Schema della wiki Sereno

## Scopo

Knowledge base durevole e ricercabile del progetto. Conserva fatti verificati, decisioni, architettura, workflow, stato e diagnosi senza duplicare il codice o la cronologia completa delle attività.

## Convenzioni

- File lowercase, con trattini e senza spazi.
- Ogni pagina informativa inizia con frontmatter YAML.
- Usare `[[wikilinks]]`; ogni pagina dovrebbe avere almeno due link utili in uscita quando possibile.
- Aggiornare `updated` quando una pagina cambia.
- Aggiungere ogni pagina all’indice e ogni modifica strutturale/contenutistica al log.
- Preferire evidenze: sorgenti, configurazione, test, output di build e documentazione ufficiale.
- Non salvare segreti, token, password, chiavi private, dati personali o credenziali.
- Segnalare informazioni incerte con `confidence: low` e indicare cosa le verificherebbe.
- Tenere fuori le note temporanee che non modificano la conoscenza durevole del progetto.

## Semantica di confidence

`confidence` misura la qualità dell’evidenza, non la certezza soggettiva dell’agente né la garanzia di funzionamento in produzione.

- `high` — confermato da sorgente/configurazione corrente e, quando rilevante, da un comando riuscito.
- `medium` — supportato dal sorgente ma non completamente verificato a runtime, su browser reali o con servizi esterni.
- `low` — inferito, obsoleto, contraddittorio o dipendente da evidenze mancanti.

Usare il livello più basso coerente con l’affermazione più importante della pagina.

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
sources: [path/or/url]
---
```

## Tassonomia dei tag

- `project`, `architecture`, `module`, `api`, `deployment`
- `decision`, `workflow`, `testing`, `debugging`, `performance`, `security`
- `bug`, `runbook`, `dependency`, `integration`, `legacy`, `query`
- `guidance`, `status`, `milestone`, `token-usage`, `documentation`

Aggiungere un tag qui prima di introdurne uno nuovo.

## Regole delle pagine

- Creare pagine per progetto, modulo importante, integrazione non ovvia, bug diagnosticato, procedura operativa, decisione architetturale o milestone.
- Non creare pagine per dettagli banali già chiari dal codice vicino.
- Mantenere le pagine idealmente sotto circa 200 righe.
- Conservare le contraddizioni con le relative evidenze invece di sovrascriverle senza nota.
- Le pagine di stato devono riportare data o fonte per i fatti temporali.
- Le pagine guida descrivono comportamenti ripetibili e non devono trasformare ipotesi in fatti.

## Manutenzione obbligatoria

1. Controllare `index.md` per pagine esistenti.
2. Cercare nella wiki termini correlati.
3. Leggere sorgenti, configurazione e test pertinenti.
4. Aggiornare pagina e link.
5. Aggiornare `index.md` e `log.md`.
6. Aggiungere evidenza quando cambia un comportamento.
7. Abbassare `confidence` invece di colmare lacune con supposizioni.

## Ordine di orientamento

1. `SCHEMA.md`
2. `index.md`
3. `current-status.md`
4. ultime 20–30 righe di `log.md`
5. solo dopo le pagine e i sorgenti pertinenti.
