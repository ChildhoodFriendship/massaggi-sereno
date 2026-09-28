# Log della wiki Sereno

> Append-only. Formato: `## [YYYY-MM-DD] action | subject`.
> Azioni: create, update, verify, archive, lint, query.

## [2026-09-28] create | Wiki Sereno inizializzata
- Analizzata la wiki di riferimento `docs/wiki_other_project` per struttura, regole, template e workflow agent.
- Creata la struttura equivalente in `docs/wiki/` senza trasferire contenuti specifici del progetto di origine.
- Documentati progetto, architettura, moduli, catalogo componenti, runbook, stato, milestone, confini e best practice.

## [2026-09-28] update | Regole agent e schema adattati
- Mantenuti frontmatter, `[[wikilinks]]`, livelli di confidence, ordine di orientamento, manutenzione indice/log, divieto di segreti e formato handoff.
- Adattate le regole a Angular standalone, SSR/hydration, Signals, GSAP browser-only e form presentation-only.

## [2026-09-28] verify | Inventario progetto corrente
- Verificati `package.json`, `angular.json`, bootstrap browser/server, route, componenti landing, template e stili globali.
- Registrati come non verificati contenuti cliente, immagini remote, WhatsApp, provider form e browser visual QA.

## [2026-09-28] update | Motion landing
- Registrati GSAP/ScrollTrigger lazy, Flow Line SVG, reveal, parallax, image reveal, drag orizzontale e disclosure dei trattamenti.
- Evidenza sorgente: `src/app/landing-page/landing-page.component.ts`, `flow-line.component.ts`, `treatments.component.ts`.

## [2026-09-28] verify | Project gates
- `npm run build`: passato; prerender della route root e chunk lazy landing/ScrollTrigger generati.
- `npm run test -- --watch=false --browsers=ChromeHeadless`: passato, 2 test superati; resta il warning di deprecation del builder Karma.
- La verifica browser visuale resta esplicitamente non certificata quando Chromium non è disponibile.

## [2026-09-28] audit | Reference guidance parity
- Riesaminate struttura, template e guida operativa di `docs/wiki_other_project` contro `docs/wiki`.
- Reintegrate le regole condizionali per dialog/persistenza, naming `request...`/`submit...`, mapping `camelCase`/`snake_case`, lifecycle realtime, stile e access modifiers.
- Aggiunti compression pattern per handoff, `.gitignore` della wiki e placeholder `.gitkeep` per tutte le directory strutturali.
