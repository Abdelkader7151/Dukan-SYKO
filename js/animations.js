(function () {
  function initRevealAnimations() {
    const animatedItems = document.querySelectorAll("[data-animate]");
    if (!animatedItems.length) return;

    /* threshold 0: long single-column blocks (restaurant menu, dukan grid) often have
       less than 15% of their total height in the viewport on mobile, so threshold 0.15
       never fired and [data-animate] stayed opacity:0. */
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
      { threshold: 0, rootMargin: "0px 0px 8% 0px" }
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
