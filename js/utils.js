(function () {
  function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  function normalizePath(pathname) {
    const cleaned = pathname.split("?")[0].split("#")[0];
    if (!cleaned || cleaned === "/") {
      return "index.html";
    }

    if (cleaned.endsWith("/")) {
      return "index.html";
    }

    return cleaned.replace(/^\//, "");
  }

  function setFooterYear() {
    const yearNode = document.getElementById("footer-year");
    if (yearNode) {
      yearNode.textContent = String(new Date().getFullYear());
    }
  }

  async function loadIncludes() {
    const includeTargets = document.querySelectorAll("[data-include]");

    await Promise.all(
      Array.from(includeTargets).map(async (target) => {
        const file = target.getAttribute("data-include");
        if (!file) return;

        const response = await fetch(file);
        if (!response.ok) {
          throw new Error("Failed to load include: " + file);
        }

        target.innerHTML = await response.text();
      })
    );
  }

  window.SYKO = window.SYKO || {};
  window.SYKO.utils = {
    clamp: clamp,
    loadIncludes: loadIncludes,
    normalizePath: normalizePath,
    setFooterYear: setFooterYear
  };
})();
