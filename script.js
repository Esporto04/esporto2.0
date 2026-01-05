document.getElementById("registrationForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Placeholder logic
  const message = document.getElementById("formMessage");
  message.style.color = "green";
  message.innerText = "Registration submitted! We'll contact you soon.";

  // You can integrate Google Forms or a backend service here.
});
