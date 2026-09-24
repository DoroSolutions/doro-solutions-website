const translations = {
  en: {
    navHome:"Home", navServices:"Services", navCourses:"Courses", navAbout:"About", navContact:"Contact",
    eyebrow:"CONTACT US", headline1:"How Can We", headline2:"Help?", script:"Let’s Talk.",
    intro:"We’re here to answer your questions and help you find the right solution.",
    emailLabel:"Send us an email",
    mobileOnline:"* Mobile & Online Services",
    mobileNotary:"* Mobile Notary Service — California",
    miniLabel:"GET IN TOUCH", touchTitle:"We’d Love to Hear From You.",
    touchText:"Have a question about our services or courses? Send us an email and we’ll get back to you as soon as possible.",
    emailButton:"Email DORO Solutions",
    responseNote:"Professional support. Clear communication. Personalized service.",
    ctaEyebrow:"READY WHEN YOU ARE", ctaTitle:"Let’s Move Forward Together.", ctaLink:"Contact Us →",
    footerTagline:"Professional Solutions. Personalized Service."
  },
  es: {
    navHome:"Inicio", navServices:"Servicios", navCourses:"Cursos", navAbout:"Nosotros", navContact:"Contacto",
    eyebrow:"CONTÁCTANOS", headline1:"¿Cómo Podemos", headline2:"Ayudarte?", script:"Hablemos.",
    intro:"Estamos aquí para responder tus preguntas y ayudarte a encontrar la solución adecuada.",
    emailLabel:"Envíanos un email",
    mobileOnline:"* Servicios Móviles y en Línea",
    mobileNotary:"* Servicio de Notario Móvil — California",
    miniLabel:"CONTÁCTANOS", touchTitle:"Nos Encantaría Saber de Ti.",
    touchText:"¿Tienes preguntas sobre nuestros servicios o cursos? Envíanos un email y te responderemos lo antes posible.",
    emailButton:"Email a DORO Solutions",
    responseNote:"Apoyo profesional. Comunicación clara. Servicio personalizado.",
    ctaEyebrow:"CUANDO ESTÉS LISTO", ctaTitle:"Sigamos Adelante Juntos.", ctaLink:"Contáctanos →",
    footerTagline:"Soluciones Profesionales. Servicio Personalizado."
  }
};

document.querySelectorAll(".lang").forEach(btn => {
  btn.addEventListener("click", () => {
    const lang = btn.dataset.lang;
    document.documentElement.lang = lang;
    document.querySelectorAll(".lang").forEach(b => b.classList.toggle("active", b === btn));
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.dataset.i18n;
      if (translations[lang][key]) el.textContent = translations[lang][key];
    });
  });
});

const menu = document.querySelector(".main-nav");
const toggle = document.querySelector(".menu-toggle");
toggle.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
  toggle.textContent = open ? "×" : "☰";
});
