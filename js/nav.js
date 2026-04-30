(function () {
  function initNav() {
    const header = document.querySelector(".site-header");
    if (!header) return;

    const toggleButton = header.querySelector(".mobile-menu-btn");
    const closeButton = header.querySelector(".mobile-close-btn");
    const overlay = header.querySelector(".mobile-menu-overlay");
    const panel = header.querySelector(".mobile-menu-panel");
    const links = header.querySelectorAll("[data-nav-link]");
    const scrollTopLinks = header.querySelectorAll("[data-scroll-top]");
    const currentPath = window.SYKO.utils.normalizePath(window.location.pathname);
    const hero = document.getElementById("s-hero");

    function syncScrolledState() {
      header.classList.toggle("scrolled", window.scrollY > 40);
    }

    function openMenu() {
      // Prevent multiple rapid toggles
      if (header.classList.contains("menu-open")) return;
      
      header.classList.add("menu-open");
      if (toggleButton) toggleButton.setAttribute("aria-expanded", "true");
      if (panel) panel.hidden = false;
      if (overlay) overlay.hidden = false;
      document.body.classList.add("menu-open");
      
      // Focus first link for accessibility
      const firstLink = panel ? panel.querySelector(".mobile-nav-link") : null;
      if (firstLink) {
        setTimeout(() => firstLink.focus(), 50);
      }
    }

    function closeMenu() {
      if (!header.classList.contains("menu-open")) return;
      
      header.classList.remove("menu-open");
      if (toggleButton) toggleButton.setAttribute("aria-expanded", "false");
      if (panel) panel.hidden = true;
      if (overlay) overlay.hidden = true;
      document.body.classList.remove("menu-open");
    }

    function toggleMenu(event) {
      event.preventDefault();
      event.stopPropagation();
      if (header.classList.contains("menu-open")) {
        closeMenu();
      } else {
        openMenu();
      }
    }

    function smoothScrollTop(event) {
      if (currentPath === "index.html") {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        closeMenu();
      }
    }

    // Set active nav link
    links.forEach(function (link) {
      const href = link.getAttribute("href");
      if (href === currentPath || (currentPath === "index.html" && href === "index.html")) {
        link.classList.add("is-active");
      }
      link.addEventListener("click", function () {
        closeMenu();
      });
    });

    scrollTopLinks.forEach(function (link) {
      link.addEventListener("click", smoothScrollTop);
    });

    // Use both click and touchstart for faster response on mobile
    if (toggleButton) {
      toggleButton.addEventListener("click", toggleMenu);
      toggleButton.addEventListener("touchstart", toggleMenu, { passive: false });
    }

    if (closeButton) {
      closeButton.addEventListener("click", closeMenu);
      closeButton.addEventListener("touchstart", closeMenu);
    }

    if (overlay) {
      overlay.addEventListener("click", closeMenu);
      overlay.addEventListener("touchstart", closeMenu);
    }

    window.addEventListener("scroll", syncScrolledState, { passive: true });
    window.addEventListener("resize", function () {
      if (window.innerWidth >= 768) {
        closeMenu();
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeMenu();
      }
    });

    // Hero header visibility observer
    if (hero) {
      const observer = new IntersectionObserver(
        function (entries) {
          const entry = entries[0];
          header.classList.toggle("in-hero", entry.isIntersecting && window.scrollY <= 40);
        },
        { threshold: 0.2 }
      );
      observer.observe(hero);

      window.addEventListener(
        "scroll",
        function () {
          if (window.scrollY > 40) {
            header.classList.remove("in-hero");
          }
        },
        { passive: true }
      );
    }

    syncScrolledState();
  }

  window.SYKO = window.SYKO || {};
  window.SYKO.initNav = initNav;
})();