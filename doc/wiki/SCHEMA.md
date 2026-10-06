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

# Schema della wiki

## Struttura obbligatoria

La wiki compatta vive in `doc/wiki/` e contiene solo:

- `index.md` — mappa dei contenuti;
- `agent-guide.md` — regole operative per gli agenti;
- `current-status.md` — stato e task aperti;
- `SCHEMA.md` — questo contratto documentale;
- `log.md` — storico sintetico append-only;
- `modules/component-catalog.md` — inventario dei componenti;
- `projects/massaggi-sereno.md` — descrizione del progetto;
- `bugs/.gitkeep` — area predisposta per bug verificati.

## Convenzioni

- File lowercase con trattini e percorsi relativi al repository.
- Ogni pagina informativa usa frontmatter YAML con `title`, `created`, `updated`, `type`, `project`, `status`, `confidence` e `sources`.
- `confidence`: `high` = confermato da codice/configurazione e verifica; `medium` = confermato dal sorgente ma non pienamente a runtime; `low` = inferito o non verificato.
- Aggiornare `index.md` e aggiungere una voce a `log.md` per ogni modifica sostanziale.
- Citare sorgenti concrete; non inserire segreti, token, password, dati personali o endpoint privati.
- Separare fatti stabili, stato temporale e storico; non copiare conversazioni o log prolissi.
- Il codice e i comandi eseguiti prevalgono sulla wiki in caso di contraddizione.

## Ordine di orientamento

1. `SCHEMA.md`
2. `index.md`
3. `current-status.md`
4. ultime 20–30 righe di `log.md`
5. pagina progetto/modulo pertinente e sorgenti.
