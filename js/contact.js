(function () {
  function initContactPage() {
    const form = document.getElementById("contact-form");
    const status = document.getElementById("contact-form-status");
    if (!form || !status) return;

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      if (!form.checkValidity()) {
        form.classList.add("was-validated");
        status.textContent = "Please fill in all required fields correctly.";
        status.classList.remove("is-success");
        status.classList.add("is-error");
        return;
      }

      form.classList.add("was-validated");
      status.textContent = "Thanks. Your message is ready to send from this form design.";
      status.classList.remove("is-error");
      status.classList.add("is-success");
      form.reset();
      form.classList.remove("was-validated");
    });
  }

  window.SYKO = window.SYKO || {};
  window.SYKO.initContactPage = initContactPage;
})();
