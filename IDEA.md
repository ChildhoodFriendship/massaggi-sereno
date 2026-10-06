Inizializzazione & Regole (Agents.md & Wiki):

    Hermes deve creare il file Agents.md nella root del progetto che punta rigorosamente alla cartella doc/wiki/ (SCHEMA.md, agent-guide.md, current-status.md).

    Prima di scrivere codice, deve leggere la wiki e aggiornarla a fine task.

Identità del Progetto ("Sereno"):

    Cliente: Davide (Studio di massaggi e trattamenti olistici).

    Mood / Vibe: Estremamente chill, calmo, rilassante, professionale ma accogliente.

    Palette Colori: Toni tenui e caldi, sfondi beige/sabbia chiaro, dettagli in giallo crema o ambra tenue, testi in marrone scuro soft.

La Core Experience (La Linea / Animazione Scroll):

    Durante lo scorrimento della pagina, l'utente sperimenta un tracciato/linea continua (stile SVG path animato) che si sviluppa fluidamente seguendo il movimento della viewport.

    Transizioni smooth, zero lag, sfruttando le performance di Angular 22 (Signals, Intersection Observer, animazioni native).

Sezioni della Landing Page:

    Hero: Payoff calmante, call-to-action fluida e comparsa della linea.

    Filosofia & Metodo: Approccio olistico di Davide.

    Trattamenti: Card interattive per i massaggi (decontratturante, svedese, olistico, ecc.) gestite con Signals.

    Chi è Davide: Sezione umana, professionale e rassicurante.

    Contatti & Booking: Form essenziale e pulsante rapido (WhatsApp/Prenotazioni).

Stack Tecnico:

    Angular 22 (Standalone Components, Signals, SSR abilitato, TypeScript rigoroso).
