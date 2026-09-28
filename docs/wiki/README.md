# Sereno Studio — LLM Wiki

Questa cartella è la base di conoscenza durevole del progetto `massaggi-sereno`. È scritta per persone e coding agent: i fatti sono collegati alle evidenze del repository, lo stato corrente è separato dall’architettura stabile e le procedure operative restano vicine al progetto.

## Da dove iniziare

1. Leggi [`SCHEMA.md`](SCHEMA.md) prima di aggiungere o modificare una pagina.
2. Consulta [`index.md`](index.md) per trovare progetto, architettura, moduli, runbook o stato.
3. Leggi [`current-status.md`](current-status.md) per lo snapshot verificato.
4. Leggi [`agent-guide.md`](agent-guide.md) per il workflow operativo.
5. Consulta [`token-usage.md`](token-usage.md) per indagini ampie o handoff.

## Struttura

- `projects/` — scopo, comandi, vincoli ed evidenze del progetto.
- `architecture/` — forma del sistema e confini runtime.
- `modules/` — inventario delle sezioni e dei componenti.
- `decisions/` — decisioni architetturali durevoli.
- `runbooks/` — procedure ripetibili di sviluppo e verifica.
- `bugs/` — diagnosi durevoli di bug con causa e verifica.
- `raw/` — catture immutabili di fonti; non modificare le catture.
- `templates/` — modelli per pagine future.

## Regole di manutenzione

- Usa riferimenti relativi al repository; non salvare segreti o credenziali.
- Mantieni sincronizzati `index.md` e `log.md` dopo ogni modifica alla wiki.
- Aggiorna `updated` nel frontmatter ogni volta che una pagina cambia.
- Segnala l’incertezza con `confidence: low` e indica come verificarla.
- Non sostituire silenziosamente un fatto contraddetto: conserva entrambe le affermazioni e collega le evidenze.

La wiki descrive il repository osservato in un momento preciso. Codice, configurazione, output di build e comandi verificati hanno precedenza sulle inferenze della wiki.
