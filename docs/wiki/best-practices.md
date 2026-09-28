---
title: Sereno best practices
created: 2026-09-28
updated: 2026-09-28
type: guidance
tags: [guidance, architecture, performance, testing, documentation]
project: massaggi-sereno
status: active
confidence: high
sources: [Agents.md, angular.json, package.json, src/app, src/styles.css]
---

# Best practice

- Costruisci la landing con componenti Angular standalone focalizzati; il root component deve restare composizione/routing.
- Usa TypeScript strict, dati readonly typed, Signals per stato UI locale, `OnPush` e controllo moderno `@if`/`@for`.
- Mantieni le API browser dietro guard SSR e lifecycle cleanup.
- Usa CSS/SVG/RAF/browser APIs prima di aggiungere dipendenze; GSAP è presente perché il progetto richiede animazioni scroll-led e viene caricato lazy.
- Centralizza token Sereno in `src/styles.css`; mantieni gli stili di sezione nei CSS component.
- Usa semantic headings, focus visibile, responsive breakpoints, reduced-motion fallback e dimensioni stabili per le immagini.
- Tratta contatto, booking, prezzi, ritratti, recensioni e WhatsApp come placeholder finché il proprietario non fornisce valori approvati.
- Un form pubblico non deve inviare dati finché endpoint/provider non è configurato e verificato.
- Aggiorna la wiki nello stesso cambiamento dopo una feature, refactor, decisione architetturale o milestone significativa.
- Esegui test e build reali prima di dichiarare concluso un task; non confondere build SSR con browser visual QA.

Pagine correlate: [[agent-guide.md|guida agenti]], [[boundaries.md|confini]], [[current-status.md|stato]] e [[runbooks/local-development.md|runbook]].
