(function () {
  const dukanQuantities = {};

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function initDukanPage() {
    if (!window.siteData || !window.siteData.dukan) return;

    const categoriesRoot = document.getElementById("dukan-categories");
    const featuredRoot = document.getElementById("dukan-featured-grid");
    const data = window.siteData.dukan;

    if (categoriesRoot) {
      categoriesRoot.innerHTML = data.categories.map(function (category) {
        return '<div class="category-chip">' + escapeHtml(category) + "</div>";
      }).join("");
    }

    if (featuredRoot) {
      featuredRoot.innerHTML = data.featuredItems.map(function (item) {
        return (
          '<article class="market-card">' +
            '<div class="market-card-image-wrap">' +
              '<img src="' + escapeHtml(item.image) + '" alt="' + escapeHtml(item.name) + '" class="market-card-image">' +
            "</div>" +
            '<div class="market-card-body">' +
              '<div class="market-card-top">' +
                '<p class="market-card-title">' + escapeHtml(item.name) + '</p>' +
                '<p class="market-card-price">' + escapeHtml(item.price) + '</p>' +
              "</div>" +
              '<p class="market-card-tag">' + escapeHtml(item.tag) + '</p>' +
              '<div class="menu-card-actions cart-controls">' +
                '<button type="button" class="btn btn-syko-gold btn-sm-card js-add-to-cart" data-key="' + escapeHtml(item.name) + '">Add to cart</button>' +
                '<div class="qty-selector" data-key="' + escapeHtml(item.name) + '">' +
                  '<button type="button" class="qty-btn js-qty-dec" data-key="' + escapeHtml(item.name) + '">-</button>' +
                  '<span class="qty-value">' + (dukanQuantities[item.name] || 1) + '</span>' +
                  '<button type="button" class="qty-btn js-qty-inc" data-key="' + escapeHtml(item.name) + '">+</button>' +
                "</div>" +
              "</div>" +
            "</div>" +
          "</article>"
        );
      }).join("");

      featuredRoot.querySelectorAll(".js-qty-inc").forEach(function (button) {
        button.addEventListener("click", function () {
          const key = button.getAttribute("data-key");
          dukanQuantities[key] = (dukanQuantities[key] || 1) + 1;
          initDukanPage();
        });
      });

      featuredRoot.querySelectorAll(".js-qty-dec").forEach(function (button) {
        button.addEventListener("click", function () {
          const key = button.getAttribute("data-key");
          const current = dukanQuantities[key] || 1;
          dukanQuantities[key] = current > 1 ? current - 1 : 1;
          initDukanPage();
        });
      });

      featuredRoot.querySelectorAll(".js-add-to-cart").forEach(function (button) {
        button.addEventListener("click", function () {
          const itemName = button.getAttribute("data-key");
          const quantity = dukanQuantities[itemName] || 1;

          const item = data.featuredItems.find(function (i) {
            return i.name === itemName;
          });

          if (item && window.SYKO && window.SYKO.ShoppingCart) {
            window.SYKO.ShoppingCart.addItem({
              id: itemName,
              name: item.name,
              price: item.price,
              quantity: quantity,
              source: "dukan"
            });

            button.textContent = "Added!";
            setTimeout(function () {
              button.textContent = "Add to cart";
            }, 900);
          }
        });
      });
    }
  }

  window.SYKO = window.SYKO || {};
  window.SYKO.initDukanPage = initDukanPage;
})();
