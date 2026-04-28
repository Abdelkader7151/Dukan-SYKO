(function () {
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
              '<div class="menu-card-actions">' +
                '<button type="button" class="btn btn-syko-gold btn-sm-card">Add to Cart</button>' +
                '<a href="tel:+19294414306" class="btn btn-syko-outline btn-sm-card">Call</a>' +
              "</div>" +
            "</div>" +
          "</article>"
        );
      }).join("");
    }
  }

  window.SYKO = window.SYKO || {};
  window.SYKO.initDukanPage = initDukanPage;
})();
