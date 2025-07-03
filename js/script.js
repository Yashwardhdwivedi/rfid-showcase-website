document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", function (e) {
      const name = form.querySelector("input[type='text']").value.trim();
      const email = form.querySelector("input[type='email']").value.trim();
      const message = form.querySelector("textarea").value.trim();

      if (!name || !email || !message) {
        e.preventDefault();
        alert("Please fill in all fields before submitting.");
      }
    });
  }
});

