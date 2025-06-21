# Luca Orlandi Website

Questo progetto contiene i file HTML, CSS e JavaScript di un sito web statico.

## Modulo di contatto

Il modulo in `contact.html` utilizza il servizio [Formspree](https://formspree.io) per l'invio dei messaggi. Per renderlo operativo:

1. Crea un nuovo form su Formspree e copia l'ID assegnato (es. `xyzabcde`).
2. Sostituisci `yourFormId` nell'attributo `action` del modulo con l'ID ottenuto:
   
   ```html
   <form action="https://formspree.io/f/xyzabcde" method="POST">
   ```
3. Carica i file sul tuo hosting. Il JavaScript in `js/scripts.js` invierà i dati con `fetch` e mostrerà una notifica dell'esito.

Non sono necessarie ulteriori chiavi o configurazioni.
