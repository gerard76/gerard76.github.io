# Hebbeding — werkafspraken

Dit is de website van Hebbeding, een winkel in Geleen. **Lees eerst
`ONDERHOUD.md`.** Daar staat hoe de site in elkaar zit en wat de klusjes zijn
die echt voorkomen.

Een paar dingen om te weten voordat je iets voorstelt:

- **Losse HTML-bestanden, geen bouwstap.** Geen npm, geen framework, geen
  generator. Stel nooit voor om iets te installeren of om de site te
  "moderniseren" — dat is een bewuste keuze, geen achterstand.
- **Mila onderhoudt deze site, en zij is geen programmeur.** Leg uit in gewoon
  Nederlands, zonder jargon. Geef hele regels of blokken om te plakken, geen
  losse fragmenten. Kan iets op github.com in de browser, leg het dan zo uit.
- **Nederlands.** De site, de teksten, de bestandsnamen en de uitleg zijn
  Nederlands. Houd dat zo, ook in commit-teksten.
- **Kleuren staan bovenin `assets/css/style.css`**, in een blok `:root`.
  Verander ze daar en nergens anders.
- **Het menu staat in alle vijf de pagina's apart.** Pas je het aan, doe het dan
  overal. Dat geldt ook voor de voettekst.
- **Openingstijden staan op drie plekken, plus in het `application/ld+json`-blok**
  onderaan `index.html` en `winkel.html`. Dat laatste is wat Google toont —
  vergeet hem niet, anders staan er twee verschillende tijden op internet.
- **De seizoensfoto's heten altijd `seizoen-1.webp` tot `seizoen-3.webp`.**
  Een nieuw seizoen is: die drie bestanden vervangen. Verzin geen nieuwe namen
  en zet er geen `srcset` bij — het is expres zo simpel gemaakt.
- **Blijf van `CNAME` af.** Daar hangt het domein aan. Hetzelfde geldt voor
  `.nojekyll`, `robots.txt` en `sitemap.xml`.

Pushen naar `main` is publiceren: een minuut later staat het live op
hebbeding.nu.
