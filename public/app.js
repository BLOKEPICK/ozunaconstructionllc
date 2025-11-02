(function() {
  const LS_KEY = 'oz-lang';
  function detectLang() {
    const stored = localStorage.getItem(LS_KEY);
    if (stored) return stored;
    const nav = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
    if (nav.startsWith('es')) return 'es';
    return 'en';
  }
  function applyLang(lang) {
    document.documentElement.setAttribute('lang', lang);
    const enList = document.querySelectorAll('.t-en');
    const esList = document.querySelectorAll('.t-es');
    enList.forEach(n => n.style.display = (lang === 'en') ? '' : 'none');
    esList.forEach(n => n.style.display = (lang === 'es') ? '' : 'none');
    const switchers = document.querySelectorAll('[data-lang-switch]');
    switchers.forEach(btn => {
      btn.textContent = (lang === 'es') ? 'English' : 'Español';
    });
  }
  function setLang(lang) {
    localStorage.setItem(LS_KEY, lang);
    applyLang(lang);
  }
  const lang = detectLang();
  applyLang(lang);
  window.ozLang = { set: setLang, get: () => document.documentElement.getAttribute('lang') || 'en' };
  document.addEventListener('click', (e) => {
    const el = e.target.closest('[data-lang-switch]');
    if (!el) return;
    const next = (window.ozLang.get() === 'es') ? 'en' : 'es';
    setLang(next);
  }, { passive: true });
})();
