// Klapmenu voor smalle schermen. Meer JavaScript heeft deze site niet nodig.
(function () {
  var knop = document.querySelector('.menu-knop');
  var menu = document.getElementById('hoofdmenu');
  if (!knop || !menu) return;

  knop.addEventListener('click', function () {
    var open = menu.classList.toggle('open');
    knop.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  // Sluit het menu als het scherm weer breed wordt.
  window.addEventListener('resize', function () {
    if (window.innerWidth > 780) {
      menu.classList.remove('open');
      knop.setAttribute('aria-expanded', 'false');
    }
  });
})();

// Jaartal in de voettekst automatisch bijwerken.
(function () {
  var jaar = document.getElementById('jaar');
  if (jaar) jaar.textContent = new Date().getFullYear();
})();

// Zachte overgang naar een volgende pagina: de inhoud schuift omhoog weg,
// daarna laadt de nieuwe pagina (die schuift zelf weer omhoog in beeld).
// Werkt overal, ook als je de bestanden rechtstreeks vanaf de schijf opent.
(function () {
  var inhoud = document.querySelector('main');
  if (!inhoud) return;

  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  // Terugknop: haal de weg-animatie eraf, anders blijft de pagina onzichtbaar.
  window.addEventListener('pageshow', function () {
    inhoud.classList.remove('pagina-eruit');
  });

  function zelfdePagina(a, b) {
    return a.replace(/index\.html$/, '') === b.replace(/index\.html$/, '');
  }

  document.addEventListener('click', function (e) {
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

    var link = e.target.closest && e.target.closest('a');
    if (!link || !link.href) return;
    if (link.target === '_blank' || link.hasAttribute('download')) return;

    var doel;
    try { doel = new URL(link.href, location.href); } catch (err) { return; }

    if (doel.protocol !== location.protocol || doel.host !== location.host) return;
    if (!/(\.html|\/)$/.test(doel.pathname)) return;

    if (zelfdePagina(doel.pathname, location.pathname)) {
      if (doel.hash) return;                 // anker: de browser scrollt zelf
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    e.preventDefault();
    inhoud.classList.add('pagina-eruit');
    setTimeout(function () { location.href = link.href; }, 180);
  });
})();

// Carrousel op de homepagina: wisselt vanzelf van beeld, met pijlen en
// bolletjes. Staat stil zolang de muis erop staat. Zonder JavaScript
// blijft gewoon de eerste foto staan.
(function () {
  var carrousel = document.querySelector('.carrousel');
  if (!carrousel) return;

  var dias = Array.prototype.slice.call(carrousel.querySelectorAll('.carrousel__dia'));
  if (dias.length < 2) return;

  var bolRij = carrousel.querySelector('.carrousel__bolletjes');
  var rustig = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var huidig = 0;
  var timer = null;
  var WISSELTIJD = 7000;

  carrousel.classList.add('is-klaar');

  // bolletjes maken
  var bollen = dias.map(function (dia, i) {
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'carrousel__bol';
    b.setAttribute('aria-label', 'Beeld ' + (i + 1) + ' van ' + dias.length);
    b.setAttribute('aria-current', i === 0 ? 'true' : 'false');
    b.addEventListener('click', function () { toon(i); herstart(); });
    bolRij.appendChild(b);
    return b;
  });

  function toon(i) {
    huidig = (i + dias.length) % dias.length;
    dias.forEach(function (dia, n) {
      var actief = n === huidig;
      dia.classList.toggle('is-actief', actief);
      dia.setAttribute('aria-hidden', actief ? 'false' : 'true');
    });
    bollen.forEach(function (b, n) {
      b.setAttribute('aria-current', n === huidig ? 'true' : 'false');
    });
  }

  function start() {
    if (rustig || timer) return;      // animaties uit? dan niet vanzelf wisselen
    timer = setInterval(function () { toon(huidig + 1); }, WISSELTIJD);
  }
  function stop() { clearInterval(timer); timer = null; }
  function herstart() { stop(); start(); }

  carrousel.querySelector('[data-carrousel="vorige"]')
    .addEventListener('click', function () { toon(huidig - 1); herstart(); });
  carrousel.querySelector('[data-carrousel="volgende"]')
    .addEventListener('click', function () { toon(huidig + 1); herstart(); });

  // stilzetten zolang de muis erop staat of iets de aandacht heeft
  carrousel.addEventListener('mouseenter', stop);
  carrousel.addEventListener('mouseleave', start);
  carrousel.addEventListener('focusin', stop);
  carrousel.addEventListener('focusout', start);

  // en niet doortikken als het tabblad op de achtergrond staat
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) { stop(); } else { start(); }
  });

  start();
})();
