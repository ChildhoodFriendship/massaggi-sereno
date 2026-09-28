---
title: Sereno boundaries
created: 2026-09-28
updated: 2026-09-28
type: policy
tags: [project, security, integration, documentation]
project: massaggi-sereno
status: active
confidence: high
sources: [IDEA.md, package.json, src/app/landing-page/contact.component.ts, src/app/landing-page/contact.component.html, angular.json]
---

# Boundaries

## In scope

- Landing page pubblica responsive per studio di massaggi e trattamenti olistici.
- Mood caldo, beige/cream, ambra e marrone soft.
- Hero editoriale, metodo, trattamenti, sezione Davide, tracce/reviews e CTA contatto.
- Flow Line SVG, animazioni scroll-led, pannelli evidenziati, immagini e scroll orizzontale.
- Angular standalone, Signals locali, SSR/hydration e CSS component.

## Out of scope fino a nuove evidenze

- Payment processing, account utente, gestione appuntamenti o backend CRM.
- Destinazione WhatsApp reale e provider form.
- Prezzi, recensioni, fotografie/ritratto e biografia come contenuto fattuale approvato.
- Raccolta o trasmissione di dati personali.
- Certificazione visuale cross-browser senza QA eseguita.

## Dati e privacy

Il form corrente è presentation-only: `submit()` aggiorna solo uno stato Signal locale. Prima di raccogliere dati, configurare un provider esplicito, documentare il contratto e verificare la submission end-to-end. Non salvare credenziali, token o dati personali nella wiki.

Pagine correlate: [[best-practices.md|best practice]], [[architecture/system-architecture.md|architettura]], [[projects/massaggi-sereno.md|progetto]].
