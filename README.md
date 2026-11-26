# Pfoten & Poesie

Event-Website für **Aufgabe 3: Kulturevent-Website** (Kurs Webdesign, Kunstschule Wandsbek).

Los: Lesung mit Live-Musik · Zielgruppe Hundebesitzer:innen · Farbpalette Braun-Türkis · Stil Art déco

> Studienprojekt der Kunstschule Wandsbek, keine echte Veranstaltung.

## Seiten

| Datei | Inhalt |
| --- | --- |
| `index.html` | Startseite: Was, wann, wo, für wen |
| `programm.html` | Ablauf des Abends |
| `story.html` | Die Geschichte dahinter |
| `tickets.html` | Preise und Ticketformular |
| `infos.html` | Anfahrt, FAQ, Impressum, Bildnachweis |
| `404.html` | Eigene Fehlerseite |
| `logbuch.pdf` | KI-Logbuch |

## Ordnerstruktur

```
├── index.html
├── programm.html
├── story.html
├── tickets.html
├── infos.html
├── 404.html
├── logbuch.pdf
├── apple-touch-icon.png
├── favicon-32.png
├── css/style.css
├── js/main.js
├── fonts/   (.woff2, lokal eingebunden)
├── img/     (WebP, JPEG, PNG, GIF)
└── svg/     (Logo, Favicon, Icons, Muster)
```

## Technik

Reines HTML und CSS, jede Seite als eigene Datei. JavaScript nur für kleine Ergänzungen (Countdown, Danke-Meldung im Formular, kippende Ticketkarten). Alle Schriften, Bilder und Skripte liegen im Repository, es gibt keine externen Quellen.

## Veröffentlichen mit GitHub Pages

1. Alle Dateien dieses Ordners in die oberste Ebene eines öffentlichen Repositorys hochladen (nicht in einen Unterordner).
2. **Settings → Pages → Build and deployment**: Source „Deploy from a branch“, Branch `main`, Ordner `/ (root)`, speichern.
3. Nach ein bis zwei Minuten ist die Seite unter `https://<benutzername>.github.io/<repository>/` erreichbar.
4. Die Datei `.nojekyll` sorgt dafür, dass GitHub alle Dateien unverändert ausliefert.

## Schriften

Italiana, Cormorant Garamond, Poiret One, Big Shoulders Display und Josefin Sans, alle unter der SIL Open Font License.
