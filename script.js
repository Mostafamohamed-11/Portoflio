// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Initialize EmailJS
// Initialize EmailJS
(function() {
  emailjs.init("PmTjHp7crnDNs2zEu"); // Replace with your Public Key
})();

// Select form and status element
const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

// Handle form submission
form.addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm("service_portflio", "template_wnmpv2r", form)
    .then(() => {
      status.textContent = "✅ Thanks! Your message has been sent.";
      status.style.color = "limegreen";
      form.reset();
    }, (err) => {
      status.textContent = "❌ Failed to send message. Try again.";
      status.style.color = "red";
      console.error("Error:", err);
    });
});

