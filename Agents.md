# Sereno Studio — agent boundaries

Questo workspace segue come fonte di riferimento `docs/wiki/`.

## Orientamento obbligatorio

Prima di modificare codice o architettura:

1. leggi `docs/wiki/SCHEMA.md`;
2. leggi `docs/wiki/index.md`;
3. leggi `docs/wiki/current-status.md`;
4. leggi le ultime 20–30 righe di `docs/wiki/log.md`;
5. consulta poi la pagina di progetto, architettura, modulo o runbook pertinente.

La wiki corrente deve restare distinta da eventuali cartelle wiki di esempio o di altri progetti, che sono soltanto fonti di riferimento strutturale e non fonti di fatti sul progetto Sereno.

## Regole operative

- Tratta codice e configurazione verificati come autorità principale; non trasformare inferenze in fatti.
- Mantieni Angular standalone, Signals per stato locale, `OnPush`, TypeScript strict, SSR-safe browser APIs e componenti focalizzati.
- Prima di modificare la repo esegui `git status`. Se ci sono modifiche locali non committate, fermati e comunicalo. Se il working tree è pulito, esegui `git fetch` e `git pull --ff-only` sul branch corrente.
- Se il pull fallisce o i branch sono divergenti, mostra lo stato e attendi: non risolvere autonomamente. Lavora su un branch `hermes/<task>`, mai direttamente su `main`.
- Dopo il preflight, cerca simboli e chiamanti e leggi manifest/configurazione pertinenti.
- Non sovrascrivere modifiche locali, non fare commit, push o reset senza richiesta esplicita.
- Non inserire segreti, token, password, dati personali o endpoint privati nella wiki o nel codice.
- Per animazioni browser/scroll proteggi `window`, `document`, RAF e GSAP con guard SSR e cleanup.
- Considera il form, WhatsApp, immagini, recensioni, prezzi e contenuti cliente come placeholder finché non risultano approvati e verificati.
- Dopo ogni cambiamento sostanziale aggiorna la pagina wiki pertinente in `docs/wiki/`, `index.md` e `log.md`, includendo evidenze e livello di confidence.

## Gate di verifica

Esegui i comandi realmente disponibili e riporta il risultato effettivo:

- `npm run test -- --watch=false --browsers=ChromeHeadless`
- `npm run build`
- smoke HTTP e browser QA quando l’ambiente li rende disponibili.

Il build SSR/prerender non sostituisce il controllo visuale desktop/mobile o la verifica di provider e asset remoti.

La documentazione operativa è in `docs/wiki/SCHEMA.md`, `docs/wiki/agent-guide.md` e `docs/wiki/current-status.md`.
