import Typed from 'typed.js';

const loadDynamicBannerText = () => {
    new Typed('#banner-typed-text', {
    strings: ["Teigspeisen", "Suppen", "Vorspeisen", "Hauptspeisen", "Nachspeisen", "Kultur"],
    typeSpeed: 100,
    loop: true
  });

}

export { loadDynamicBannerText };
