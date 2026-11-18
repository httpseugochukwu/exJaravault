// JaraVault website interactions
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".current-year").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
      toggle.textContent = isOpen ? "×" : "☰";
    });
  }

  // Replace this with the real inbox for JaraVault before publishing.
  const BUSINESS_EMAIL = "info@jaravault.com";
  const form = document.querySelector("#contact-form");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      if (BUSINESS_EMAIL === "info@jaravault.com") {
        document.querySelector("#form-status").textContent =
          "Please add your real business email in script.js before using this form.";
        return;
      }

      const data = new FormData(form);
      const subject = encodeURIComponent(`JaraVault enquiry: ${data.get("subject")}`);
      const body = encodeURIComponent(
        `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`
      );
      window.location.href = `mailto:${BUSINESS_EMAIL}?subject=${subject}&body=${body}`;
      document.querySelector("#form-status").textContent =
        "Your email app should open with your message ready to send.";
    });
  }
});
