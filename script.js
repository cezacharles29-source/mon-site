const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");

menuToggle?.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  mobileMenu.setAttribute("aria-hidden", String(!isOpen));
});

mobileMenu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    mobileMenu.setAttribute("aria-hidden", "true");
  });
});

const revealItems = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 },
);
revealItems.forEach((item) => revealObserver.observe(item));

const heroArt = document.querySelector(".hero-art");
if (heroArt && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  window.addEventListener(
    "mousemove",
    (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * -14;
      const y = (event.clientY / window.innerHeight - 0.5) * -10;
      heroArt.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    },
    { passive: true },
  );
}

const signupForm = document.querySelector(".signup-form");
signupForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = signupForm.querySelector("input");
  const success = signupForm.querySelector(".form-success");
  const note = signupForm.querySelector(".form-note");
  if (!input.checkValidity()) {
    input.reportValidity();
    return;
  }
  note.hidden = true;
  success.hidden = false;
  input.value = "";
});
