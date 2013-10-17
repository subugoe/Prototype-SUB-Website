---
layout: index
title: Prototyp SUB-Website
---

# Various SUB-Website Prototypes

---

## [2012 responsified Version der SUB-Website von 2012](2012responsified.html)

> *__"It's not important that you like the design I'm going to make for you. [...] It's a bonus if you like it, but the main objectives are that your business needs are met and that your customers like it."__* <span style="font-size: 80%">(<a href="http://sixrevisions.com/project-management/clients-dont-have-to-like-your-work/">Wes McDowell @ Six Revisions</a>)</span>

Sinn und Zweck dieses Prototyps ist die Erfahrbarmachung, was passiert, wenn die SUB-Website auf unterschiedlichen Geraeten angezeigt wird.

Dieser Prototyp ist keine Klick-Demo und auch nicht Abbild von Photoshop-Designs. Entsprechend sind Dinge wie z. B. die Suche nicht funktional umgesetzt und an vielen Stellen ist die visuelle Umsetzung nicht pixel-perfect.

### Grundannahme

Die Inhalte der SUB-Website lassen sich besser nutzen, wenn die Website auf verschiedenen Geraeten unterschiedlich erscheint.

Beispielhaft: Groessere Links und Button auf Geraeten, die mittels Touch bedient werden, kompakte Anzeige auf Notebooks, grosszuegige Darstellung auf Desktops etc.

### Ziele

1. SUB-Website mit der visuellen Erscheinung entsprechend dem Stand von 2012, jedoch adaptiert fuer unterschiedliche Anzeigeformen - Smartphone/Tablet/Notebook/Desktop.
2. Bisher nicht bediente Szenarien ermoeglichen; z. B. Anzeige von werkzeugartigen Funktionen; Nutzung von Digitalisaten etc.
3. Aufgreifen verschiedener Aspekte modernen Webdesigns
4. Praktischer Einsatz zeitgemaesser Techniken und Werkzeuge im Kontext Frontend-Design/-Entwicklung
5. Einen Ausgangspunkt schaffen, von dem aus die Vorlage fuer einen Relaunch der SUB-Website erstellt werden kann. Von hier ab iterative (und <abbr title="Buzzword-Bingo anyone">agile</abbr>) Entwicklung.
6. Nachnutzbarkeit

### Massnahmen zu Zielerreichung

* Vollstaendige Neuerstellung des HTML/CSS-Codes
* Festlegung auf __unterschiedliche Anzeigegroessen__: XS, S, M. L, XL, XXL
	* Uebersetzbar als: Smartphone Portrait (XS), Smartphone quer (S), Tablet Portrait (M), Tablet quer (L), Notebook (XL) und Desktop (XXL)
* __Keine Festlegung auf spezifische Geraeteformen__ und damit verbundene Aufloesungen (verfuegbare Pixel), z. B. iPhone/iPad exklusiv, sondern jeweils volle Nutzung der gebotenen Geraetebreite (in Pixeln)
* Einsatz von: CSS-Framework <b><a href="">inuit</a></b>, CSS-Logik <b><a href="">BEM</a></b>, CSS-Preprocessor <b><a href="">Sass</a></b>/<b><a href="">Compass</a></b>
* Umschaltung in einen __Werkzeugmodus__ mit reduzierter Oberflaeche und damit verbunden mehr Platz fuer die Anzeige von z. B. Digitalisaten
* Nutzung der Dateiversionsverwaltung (Git) bei __<a href="">Github</a>__ (Code-/Result-Hosting) inkl. dem Publishing-Framework __<a href="">Jekyll</a>__

### Naechste Schritte

* Bekanntmachung und Einholen von Rueckmeldung an un bei verschiedenen Interessengruppen innerhalb der SUB
* Weitere Iterationen erstellen
* Usertests
* Entscheidung ob und in welcher Form der Prototyp fuer eine Ueberarbeitung der SUB-Website dient
* Ueberfuehrung des Prototyps in sauberes HTML/CSS als Grundlage für ein TYPO3-Template

### Feedback

Feedback an <a href="mailto:windisch@sub.uni-goettingen.de">windisch@sub.uni-goettingen.de</a>

### Weitere Informationen

Der Code und Entwicklungsstand ist wie der Live-Prototype auch bei Github gehostet: [Ob der Live-Prototyp den Entwicklungsstand entspricht kann hier geprueft werden.](https://github.com/subugoe/Prototype-SUB-Website/network) Master = Entwicklungssstand, gh-pages = Live-Prototyp