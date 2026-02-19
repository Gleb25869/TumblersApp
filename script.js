function openTelegram() {
  window.open("https://t.me/TumblersApp", "_blank");
}

function switchLang(lang) {
  document.body.className = "lang-" + lang;

  document.querySelectorAll("[data-en]").forEach(el => {
    el.textContent = el.dataset[lang];
  });

  localStorage.setItem("lang", lang);
}

// restore language
const savedLang = localStorage.getItem("lang");
if (savedLang) switchLang(savedLang);

// smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.9,
  }
);

cards.forEach((card) => observer.observe(card));
