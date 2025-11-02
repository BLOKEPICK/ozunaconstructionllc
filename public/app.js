(() => {
  const KEY = 'oz-lang';
  const sysLang = (() => {
    const nav = (navigator.language || 'en').toLowerCase();
    return nav.startsWith('es') ? 'es' : 'en';
  })();

  let lang = localStorage.getItem(KEY) || sysLang;

  // Diccionario de textos (añade los que necesites)
  const i18n = {
    en: {
      hero_title: 'Trusted Construction & Remodeling Experts',
      hero_sub: 'High-quality workmanship for residential & commercial projects.',
      btn_call: 'Call Now',
      btn_whatsapp: 'WhatsApp',
      btn_services: 'View Services',
      btn_quote: 'Get a Quote',
      lang_toggle: 'EN / ES',
      quote_title: 'Request a Quote',
      quote_sub: "Tell us about your project and we'll get back to you with a quote.",
      quote_contact: 'Contact Now',
    },
    es: {
      hero_title: 'Expertos Confiables en Construcción & Remodelación',
      hero_sub: 'Mano de obra de alta calidad para proyectos residenciales y comerciales.',
      btn_call: 'Llamar Ahora',
      btn_whatsapp: 'WhatsApp',
      btn_services: 'Ver Servicios',
      btn_quote: 'Solicitar Cotización',
      lang_toggle: 'ES / EN',
      quote_title: 'Solicitar Cotización',
      quote_sub: 'Cuéntanos sobre tu proyecto y te responderemos con una cotización.',
      quote_contact: 'Contactar Ahora',
    }
  };

  function apply(next) {
    lang = next; // 🔧 ACTUALIZA el idioma actual
    localStorage.setItem(KEY, lang);
    document.documentElement.lang = lang;

    // Compatibilidad con tu enfoque anterior (.t-en / .t-es)
    document.querySelectorAll('.t-en').forEach(el => {
      el.style.display = lang === 'en' ? '' : 'none';
    });
    document.querySelectorAll('.t-es').forEach(el => {
      el.style.display = lang === 'es' ? '' : 'none';
    });

    // Nuevo: Traducción por claves data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const attr = el.getAttribute('data-i18n-attr'); // para placeholders/aria-label, etc.
      const value = i18n[lang]?.[key];
      if (!value) return;
      if (attr) el.setAttribute(attr, value);
      else el.textContent = value;
    });
  }

  // Inicializa
  apply(lang);

  // Toggle por click (funciona SIEMPRE)
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-lang-switch]');
    if (!btn) return;
    apply(lang === 'es' ? 'en' : 'es');
  });
})();
