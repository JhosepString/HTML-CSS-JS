document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.remove("bg-transparent");
      navbar.classList.add("bg-black/70", "backdrop-blur-md", "shadow-md");
    } else {
      navbar.classList.remove("bg-black/70", "backdrop-blur-md", "shadow-md");
      navbar.classList.add("bg-transparent");
    }
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  const footer = document.getElementById("footer");

  // efecto navbar al hacer scroll
  
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.remove("bg-transparent");
      navbar.classList.add("bg-black/70", "backdrop-blur-md", "shadow-md");
    } else {
      navbar.classList.remove("bg-black/70", "backdrop-blur-md", "shadow-md");
      navbar.classList.add("bg-transparent");
    }
  });

  // efecto footer con IntersectionObserver

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          footer.classList.remove("opacity-0", "translate-y-6");
          footer.classList.add("opacity-100", "translate-y-0");
        }
      });
    },
    { threshold: 0.2 } // cuando se vea al menos 20% del footer
  );

  observer.observe(footer);
});