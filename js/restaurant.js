(function () {
  const categoryOrderByChoice = {
    "Syrian Menu": [
      "Cold Mezze",
      "Hot Mezze",
      "Fresh Salads",
      "Signature Sandwiches",
      "Plates & Mains",
      "End Sweet"
    ],
    "Korean Menu": [
      "Banchan",
      "Hot Dishes",
      "Street Bites",
      "Kimbap",
      "Signature Sandwiches",
      "Plates & Mains",
      "Fresh Salads",
      "End Sweet"
    ],
    "SYKO FUSION": [
      "SYKO Starters",
      "SYKO Bites",
      "Fusion Sandwiches",
      "SYKO Plate",
      "SYKO Pizza",
      "House Specials",
      "End Sweet"
    ]
  };

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
    const quantities = {};

    function getMenuItemsForChoice() {
      return data.menuItems.filter(function (item) {
        if (activeChoice === "Syrian Menu") {
          return !item.menuChoice || item.menuChoice === "Syrian Menu";
        }

        return item.menuChoice === activeChoice;
      });
    }

    function getAvailableCategories(items) {
      const categoryOrder = categoryOrderByChoice[activeChoice] || [];
      return categoryOrder.filter(function (category) {
        if (category === "SYKO Plate") return true;
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
                '<div class="menu-card-actions cart-controls">' +
                  '<button type="button" class="btn btn-syko-primary btn-sm-card js-add-to-cart" data-key="' + escapeHtml(item.menuChoice + "|" + item.category + "|" + item.name) + '">Add to cart</button>' +
                  '<div class="qty-selector" data-key="' + escapeHtml(item.menuChoice + "|" + item.category + "|" + item.name) + '">' +
                    '<button type="button" class="qty-btn js-qty-dec" data-key="' + escapeHtml(item.menuChoice + "|" + item.category + "|" + item.name) + '">-</button>' +
                    '<span class="qty-value">' + (quantities[item.menuChoice + "|" + item.category + "|" + item.name] || 1) + '</span>' +
                    '<button type="button" class="qty-btn js-qty-inc" data-key="' + escapeHtml(item.menuChoice + "|" + item.category + "|" + item.name) + '">+</button>' +
                  "</div>" +
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

      root.querySelectorAll(".js-qty-inc").forEach(function (button) {
        button.addEventListener("click", function () {
          const key = button.getAttribute("data-key");
          quantities[key] = (quantities[key] || 1) + 1;
          render();
        });
      });

      root.querySelectorAll(".js-qty-dec").forEach(function (button) {
        button.addEventListener("click", function () {
          const key = button.getAttribute("data-key");
          const current = quantities[key] || 1;
          quantities[key] = current > 1 ? current - 1 : 1;
          render();
        });
      });

      root.querySelectorAll(".js-add-to-cart").forEach(function (button) {
        button.addEventListener("click", function () {
          button.textContent = "Added";
          setTimeout(function () {
            button.textContent = "Add to cart";
          }, 900);
        });
      });
    }

    render();
  }

  window.SYKO = window.SYKO || {};
  window.SYKO.initRestaurantPage = initRestaurantPage;
})();
