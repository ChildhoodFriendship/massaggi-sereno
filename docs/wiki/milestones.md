---
title: Sereno milestones
created: 2026-09-28
updated: 2026-09-28
type: status
tags: [status, milestone, project]
project: massaggi-sereno
status: active
confidence: medium
sources: [package.json, angular.json, src/app, IDEA.md]
---

# Milestone

## M0 — Foundation ✅

- [x] Workspace Angular identificato con SSR, prerender e hydration.
- [x] Bootstrap standalone, route root lazy e shell RouterOutlet.
- [x] Token Sereno e struttura base della landing.
- [x] Hero, metodo, treatments, Davide, reviews, contact e Flow Line.
- [x] Disclosure treatments con Signal e browser APIs SSR-safe.

## M0.5 — Motion direction ✅ nel codice

- [x] Landing editoriale con testo oversize e sezioni scroll-led.
- [x] GSAP e ScrollTrigger caricati lazy solo nel browser.
- [x] Reveal, parallax hero, image reveal, marquee e horizontal track.
- [x] Fallback `prefers-reduced-motion`.
- [ ] Browser QA desktop/mobile e verifica asset remoti.

## M1 — Client content ⏳

- [ ] Approvare biografia, ritratto, recensioni, prezzi e copy.
- [ ] Sostituire le immagini Unsplash con asset approvati.
- [ ] Confermare indirizzo/località e dati di contatto.

## M2 — Contact integration ⏳

- [ ] Configurare destinazione WhatsApp/prenotazione reale.
- [ ] Configurare provider form privacy-compliant.
- [ ] Verificare submission end-to-end senza esporre segreti nel frontend.

## M3 — Release confidence ⏳

- [ ] QA visuale browser desktop/mobile.
- [ ] Review accessibilità di heading, link, focus, contrasto e reduced motion.
- [ ] Aggiornare current status con evidenze di release.

Pagine correlate: [[current-status.md|stato corrente]], [[projects/massaggi-sereno.md|progetto]] e [[runbooks/local-development.md|runbook]].
