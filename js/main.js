document.addEventListener("DOMContentLoaded", async function () {
  if (!window.SYKO || !window.SYKO.utils) return;

  window.SYKO.utils.enableImageFallbacks();

  try {
    await window.SYKO.utils.loadIncludes();
  } catch (error) {
    console.warn("Includes failed to load, continuing page init.", error);
  }

  window.SYKO.utils.setFooterYear();

  if (typeof window.SYKO.initNav === "function") {
    window.SYKO.initNav();
  }

  if (typeof window.SYKO.initRestaurantPage === "function") {
    window.SYKO.initRestaurantPage();
  }

  if (typeof window.SYKO.initDukanPage === "function") {
    window.SYKO.initDukanPage();
  }

  if (typeof window.SYKO.initStoryPage === "function") {
    window.SYKO.initStoryPage();
  }

  if (typeof window.SYKO.initContactPage === "function") {
    window.SYKO.initContactPage();
  }

  if (typeof window.SYKO.initAnimations === "function") {
    window.SYKO.initAnimations();
  }
});
