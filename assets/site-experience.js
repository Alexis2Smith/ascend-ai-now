(function () {
  var nav = document.querySelector('[data-site-nav]');
  if (nav) {
    var toggle = nav.querySelector('[data-menu-toggle]');
    var links = nav.querySelector('[data-menu-links]');

    function closeMenu(restoreFocus) {
      if (!toggle || !links) return;
      toggle.setAttribute('aria-expanded', 'false');
      links.classList.remove('is-open');
      if (restoreFocus) toggle.focus();
    }

    if (toggle && links) {
      toggle.addEventListener('click', function () {
        var isOpen = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', String(!isOpen));
        links.classList.toggle('is-open', !isOpen);
      });
      links.addEventListener('click', function (event) {
        if (event.target.closest('a')) closeMenu(false);
      });
      document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
          closeMenu(true);
        }
      });
    }

    function updateNav() {
      nav.classList.toggle('is-scrolled', window.scrollY > 30);
    }
    updateNav();
    window.addEventListener('scroll', updateNav, { passive: true });
  }

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var revealItems = document.querySelectorAll('[data-reveal]');
  if (!reduceMotion && revealItems.length) {
    document.documentElement.classList.add('has-motion');
    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
      revealItems.forEach(function (item) { observer.observe(item); });
    } else {
      revealItems.forEach(function (item) { item.classList.add('is-revealed'); });
    }
  }
})();
