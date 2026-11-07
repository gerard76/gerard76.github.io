# De website van Hebbeding onderhouden

Dit is de uitleg bij **hebbeding.nu**. Hij staat expres in dezelfde map als de
website zelf, zodat Claude of ChatGPT hem vanzelf leest als je om hulp vraagt.
Je hoeft hem dus nooit zelf op te sturen of erbij te zoeken.

---

## Het korte verhaal

De website bestaat uit een handjevol bestanden die op GitHub staan. Verander je
daar iets, dan staat het ongeveer een minuut later op hebbeding.nu. Er zit geen
ingewikkeld systeem tussen: wat in het bestand staat, is wat de bezoeker ziet.

Dat betekent ook dat er weinig kapot kan. Alles wat je verandert is terug te
draaien, want GitHub bewaart elke versie. Je kunt dus gerust iets proberen.

---

## Iets veranderen, de makkelijke manier

1. Ga naar de map met de website op github.com.
2. Klik op het bestand dat je wilt aanpassen (zie de lijst verderop).
3. Klik rechtsboven op het **potlood**.
4. Verander de tekst.
5. Klik op de groene knop **Commit changes** en nog een keer in het venstertje
   dat opent.

Klaar. Wacht een minuutje, ververs hebbeding.nu, en het staat er.

Zie je de verandering niet? Wacht tien minuten en ververs nog eens. Je browser
onthoudt pagina's even, en dat is bijna altijd de reden.

---

## Hulp vragen aan Claude of ChatGPT

Je hoeft niet te weten hoe HTML werkt. Je kunt gewoon vertellen wat je wilt.
Bijvoorbeeld:

> De website van mijn winkel staat op github.com, in de map gerard76.github.io.
> Ik wil de openingstijden aanpassen: we zijn voortaan ook op maandag open van
> 13.00 tot 17.00. Welk bestand moet ik hebben en wat moet er precies komen te
> staan?

Belangrijk daarbij:

- **Zeg erbij dat het om een gewone HTML-site gaat, zonder bouwstap.** Anders
  gaat een AI je soms adviseren om dingen te installeren. Dat is hier niet nodig
  en je moet het ook niet doen.
- **Vraag om de hele regel of het hele blok**, niet om losse stukjes. Dan kun je
  het in één keer plakken.
- **Werkt het niet of ziet het er raar uit?** Zeg dat gewoon, en plak erbij wat
  je ziet. Dan wordt het gerepareerd.

---

## De vier klusjes die echt voorkomen

### 1. Het seizoensblok wisselen

Op de voorpagina staat een blok dat met het seizoen meegaat — nu kerst. Het
bestaat uit een kop, een tekstje en drie foto's.

**De foto's.** Die heten altijd `seizoen-1.webp`, `seizoen-2.webp` en
`seizoen-3.webp`, en staan in de map `assets/img/`. Je vervangt ze door drie
bestanden met precies diezelfde namen te uploaden. In de website zelf hoef je
daarvoor niets te veranderen.

Uploaden op github.com: ga naar de map `assets/img/`, klik op **Add file** en
dan **Upload files**, sleep de drie bestanden erin en klik op **Commit changes**.
Dat ze al bestaan is goed — hij vervangt ze.

De foto's moeten `.webp` heten en rechtop staan (hoger dan breed). Heb je gewone
foto's van je telefoon? Vraag dan aan Claude of ChatGPT: *"maak van deze drie
foto's webp-bestanden van ongeveer 800 pixels breed, rechtop, en noem ze
seizoen-1, seizoen-2 en seizoen-3."* Je krijgt ze terug om te downloaden.

**De bewaarde sets.** In `assets/img/seizoenen/` staan de oude foto's — nu de
kerstset als `kerst-1.webp` tot `kerst-3.webp`. Zet je iets nieuws in de winkel,
kopieer je nieuwe foto's daar dan ook even heen onder een eigen naam
(`voorjaar-1.webp` enzovoort). Volgend jaar zet je ze zo weer terug.

**De tekst.** In `index.html` staat boven het blok uitgelegd wat je verandert:
de kop ("Nu in de winkel: kerst"), het tekstje eronder, en de drie
`alt="..."`-beschrijvingen. Die laatste vertellen wat er op de foto staat, voor
mensen die hem niet kunnen zien en voor Google. Nieuwe foto's betekent dus ook
nieuwe beschrijvingen.

### 2. Openingstijden

Die staan op drie plekken: in `index.html`, in `winkel.html`, en onderaan elke
pagina. Zoek op `11.00` om ze te vinden.

Let op: onderaan `index.html` en `winkel.html` staat ook nog een blok met
`application/ld+json` erin. Dat is de versie die Google uitleest voor in de
zoekresultaten. Die moet je ook aanpassen, anders staan er straks twee
verschillende tijden op internet. Vraag hier gerust hulp bij — het is het enige
stukje waar het echt op de puntjes aankomt.

### 3. Een merk toevoegen of weghalen

De merken staan op `themas.html`, verdeeld over vier kopjes: servies, wonen,
textiel en kleding. Ze staan ook in de beschrijving bovenaan dat bestand, de
regel met `meta name="description"` — die gebruikt Google. Verander ze op allebei
de plekken.

### 4. Gewoon een zin veranderen

Open het bestand, zoek de zin, verander hem, opslaan. Meer is het niet.

---

## Welk bestand is wat

| Bestand | Wat erin staat |
| --- | --- |
| `index.html` | De voorpagina: de fotocarrousel, het welkom, het seizoensblok, de thema's |
| `themas.html` | "Wat je bij me vindt" — de vier thema's met de merken |
| `winkel.html` | Over de winkel, openingstijden, adres, contact |
| `privacy.html` | De privacyverklaring |
| `404.html` | Wat iemand ziet bij een link die niet bestaat |
| `assets/img/` | Alle foto's en het logo |
| `assets/css/style.css` | De opmaak: kleuren, lettertypes, hoe alles eruitziet |

Het menu bovenaan staat in alle vijf de pagina's apart. Pas je het menu aan, doe
het dan overal. Dat is de prijs van een site zonder ingewikkeld systeem — en
verder heeft dat alleen maar voordelen.

---

## Waar je even moet opletten

Een paar bestanden regelen dat de site überhaupt bereikbaar is. Daar hoef je
nooit aan te komen, en als je het per ongeluk toch doet, gaat de site offline:

- `CNAME` — hierin staat `hebbeding.nu`. Haal je dit weg, dan werkt het domein
  niet meer.
- `.nojekyll`, `robots.txt`, `sitemap.xml` — regelen hoe GitHub en Google met de
  site omgaan.

En: de domeinnaam zelf, de DNS en het mailadres worden bij TransIP geregeld, niet
hier. Dat is iets voor Gerard.

---

## Als er iets stuk is

Elke wijziging is terug te draaien. Op github.com zie je bij **Commits** de hele
geschiedenis. Je kunt elke wijziging ongedaan maken met de knop **Revert**.

Weet je het niet meer? Vraag het aan Claude of ChatGPT, of aan Gerard. Er is
niets gebeurd wat niet terug te draaien is.

---

## De foto's die er nog zijn

Niet alle foto's staan op de website. Er is een archief met alle originelen van
de oude webshop en de foto's uit de winkel. Dat staat bij Gerard op de computer
en in Dropbox, niet op GitHub (het is te groot). Zoek je een bepaalde foto, dan
kan hij erbij.
