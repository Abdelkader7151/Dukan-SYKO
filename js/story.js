(function () {
  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function initStoryPage() {
    const root = document.getElementById("story-timeline-list");
    if (!root || !window.siteData || !window.siteData.story) return;

    root.innerHTML = window.siteData.story.timeline.map(function (item, index) {
      return (
        '<article class="story-timeline-card" data-animate data-delay="' + (index * 60) + '">' +
          '<p class="story-timeline-year">' + escapeHtml(item.year) + '</p>' +
          '<h3 class="story-timeline-title">' + escapeHtml(item.title) + '</h3>' +
          '<p class="story-timeline-detail">' + escapeHtml(item.detail) + '</p>' +
        '</article>'
      );
    }).join("");
  }

  window.SYKO = window.SYKO || {};
  window.SYKO.initStoryPage = initStoryPage;
})();
