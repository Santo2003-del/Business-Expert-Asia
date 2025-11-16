// Contact page specific JavaScript: simple fake form submit

document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("contactForm");
  var messageBox = document.getElementById("formMessage");

  if (form && messageBox) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      messageBox.textContent = "Thank you! We have received your message.";
      messageBox.style.color = "green";

      form.reset();
    });
  }

  console.log("Contact page loaded.");
});
