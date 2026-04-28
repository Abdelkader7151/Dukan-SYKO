(function () {
  function initRevealAnimations() {
    const animatedItems = document.querySelectorAll("[data-animate]");
    if (!animatedItems.length) return;

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          const delay = entry.target.getAttribute("data-delay");
          if (delay) {
            entry.target.style.setProperty("--syko-delay", delay + "ms");
          }
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.15 }
    );

    animatedItems.forEach(function (item) {
      observer.observe(item);
    });
  }

  function initParallax() {
    const parallaxElements = document.querySelectorAll("[data-parallax]");
    if (!parallaxElements.length) return;

    function updateParallax() {
      parallaxElements.forEach(function (element) {
        const speed = Number(element.getAttribute("data-parallax")) || 0.5;
        const yPos = window.scrollY * speed;
        element.style.transform = "translateY(" + yPos + "px)";
      });
    }

    updateParallax();
    window.addEventListener("scroll", updateParallax, { passive: true });
  }

  window.SYKO = window.SYKO || {};
  window.SYKO.initAnimations = function () {
    initRevealAnimations();
    initParallax();
  };
})();
