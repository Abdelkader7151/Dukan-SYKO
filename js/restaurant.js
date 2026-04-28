(function () {
  const categoryOrder = [
    "Cold Appetizer",
    "Hot Appetizer",
    "Salads",
    "Sandwiches",
    "Main Course",
    "Desserts"
  ];

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function initRestaurantPage() {
    const root = document.getElementById("restaurant-menu-app");
    if (!root || !window.siteData || !window.siteData.restaurant) return;

    const data = window.siteData.restaurant;
    let activeChoice = data.menuChoices[0];
    let activeFilter = "All";

    function getMenuItemsForChoice() {
      return data.menuItems.filter(function (item) {
        if (activeChoice === "Syrian Menu") {
          return !item.menuChoice || item.menuChoice === "Syrian Menu";
        }

        return item.menuChoice === activeChoice;
      });
    }

    function getAvailableCategories(items) {
      return categoryOrder.filter(function (category) {
        return items.some(function (item) {
          return item.category === category;
        });
      });
    }

    function render() {
      const choiceItems = getMenuItemsForChoice();
      const availableCategories = getAvailableCategories(choiceItems);
      const filteredItems = activeFilter === "All"
        ? choiceItems
        : choiceItems.filter(function (item) {
            return item.category === activeFilter;
          });

      if (activeFilter !== "All" && !availableCategories.includes(activeFilter)) {
        activeFilter = "All";
        return render();
      }

      root.innerHTML =
        '<div class="menu-choice-row">' +
          data.menuChoices.map(function (choice) {
            return (
              '<button type="button" class="choice-button' + (choice === activeChoice ? ' is-active' : '') + '" data-choice="' + escapeHtml(choice) + '">' +
                '<span class="' + (choice === "Syrian Menu" ? "choice-label-syrian" : choice === "Korean Menu" ? "choice-label-korean" : "choice-label-fusion") + '">' +
                  escapeHtml(choice) +
                '</span>' +
              '</button>'
            );
          }).join("") +
        "</div>" +
        '<div class="category-filter-row">' +
          '<button type="button" class="category-button' + (activeFilter === "All" ? ' is-active' : '') + '" data-category="All">All</button>' +
          availableCategories.map(function (category) {
            return '<button type="button" class="category-button' + (category === activeFilter ? ' is-active' : '') + '" data-category="' + escapeHtml(category) + '">' + escapeHtml(category) + '</button>';
          }).join("") +
        "</div>" +
        '<p class="menu-meta">' + escapeHtml(activeChoice) + ' · ' + escapeHtml(activeFilter === "All" ? "All Categories" : activeFilter) + ' · ' + filteredItems.length + ' items</p>' +
        '<div class="menu-grid">' +
          filteredItems.map(function (item) {
            const tags = item.tags && item.tags.length
              ? '<div class="tag-list">' + item.tags.map(function (tag) {
                  return '<span class="tag-chip">' + escapeHtml(tag) + "</span>";
                }).join("") + "</div>"
              : "";

            const note = item.note ? '<p class="menu-note">' + escapeHtml(item.note) + "</p>" : "";

            return (
              '<article class="menu-card">' +
                '<div class="menu-card-head">' +
                  '<div>' +
                    '<p class="menu-category-label">' + escapeHtml(item.category) + '</p>' +
                    '<h3 class="menu-item-title">' + escapeHtml(item.name) + '</h3>' +
                  '</div>' +
                  '<p class="menu-price">' + escapeHtml(item.price) + '</p>' +
                '</div>' +
                '<p class="menu-description">' + escapeHtml(item.description) + '</p>' +
                note +
                tags +
                '<div class="menu-card-actions">' +
                  '<a href="tel:+19294414306" class="btn btn-syko-primary btn-sm-card">Order</a>' +
                  '<a href="tel:+19294414306" class="btn btn-syko-outline btn-sm-card">Call</a>' +
                '</div>' +
              '</article>'
            );
          }).join("") +
        "</div>";

      root.querySelectorAll("[data-choice]").forEach(function (button) {
        button.addEventListener("click", function () {
          activeChoice = button.getAttribute("data-choice");
          activeFilter = "All";
          render();
        });
      });

      root.querySelectorAll("[data-category]").forEach(function (button) {
        button.addEventListener("click", function () {
          activeFilter = button.getAttribute("data-category");
          render();
        });
      });
    }

    render();
  }

  window.SYKO = window.SYKO || {};
  window.SYKO.initRestaurantPage = initRestaurantPage;
})();
