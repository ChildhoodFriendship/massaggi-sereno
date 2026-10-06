---
title: Log della wiki Sereno
created: 2026-10-06
updated: 2026-10-06
type: documentation
tags: [documentation, workflow]
project: massaggi-sereno
status: active
confidence: high
sources: [SCHEMA.md, index.md]
---

# Log della wiki Sereno

> Append-only. Formato: `## [YYYY-MM-DD] action | subject`.
> Azioni: create, update, verify, archive, lint, query.

## [2026-10-06] create | Wiki corrente ricostruita dal modello di riferimento

- Analizzata la wiki di riferimento per struttura, frontmatter, confidence, wikilinks, manutenzione, workflow agenti e gate.
- Rimosse le informazioni specifiche del progetto di riferimento e riscritti progetto, stato e catalogo sulla base del repository `massaggi-sereno`.
- La struttura mantiene solo le pagine effettivamente previste dalla wiki di riferimento corrente: schema, indice, guida, stato, log, progetto, componenti e area bug.

## [2026-10-06] update | Preflight Git e vincoli Sereno

- Aggiunte alla guida le regole richieste: `git status`, stop su modifiche locali, `git fetch`, `git pull --ff-only`, gestione dei branch divergenti e branch `hermes/<task>`.
- Mantenuti i limiti SSR, browser-only motion, privacy, placeholder cliente e distinzione tra build e QA visuale.

## [2026-10-06] verify | Progetto corrente

- Verificati `package.json`, `angular.json`, bootstrap browser/server, routing, componenti landing, configurazione SSR e stili globali.
- `npm run test -- --watch=false --browsers=ChromeHeadless`: passato, 2 test.
- `npm run build`: passato, 1 route prerenderizzata.
- QA visuale browser, provider esterni e contenuti cliente restano non verificati.
