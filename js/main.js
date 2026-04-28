document.addEventListener("DOMContentLoaded", async function () {
  try {
    await window.SYKO.utils.loadIncludes();
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
  } catch (error) {
    console.error(error);
  }
});
