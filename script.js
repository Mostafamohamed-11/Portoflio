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

// Project Slider Navigation
document.addEventListener('DOMContentLoaded', function() {
    const grid = document.querySelector('.grid');
    const prevBtn = document.querySelector('.nav-arrow.prev');
    const nextBtn = document.querySelector('.nav-arrow.next');
    const cards = document.querySelectorAll('.card');
    
    if (!grid || !prevBtn || !nextBtn) return;
    
    const cardWidth = 350 + 24; // card width + gap
    let currentIndex = 0;
    const maxIndex = Math.max(0, cards.length - Math.floor(grid.offsetWidth / cardWidth));
    
    function updateButtons() {
        prevBtn.disabled = currentIndex <= 0;
        nextBtn.disabled = currentIndex >= maxIndex;
    }
    
    function scrollToPosition(index) {
        const scrollPosition = index * cardWidth;
        grid.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });
        currentIndex = index;
        updateButtons();
    }
    
    prevBtn.addEventListener('click', function() {
        if (currentIndex > 0) {
            scrollToPosition(currentIndex - 1);
        }
    });
    
    nextBtn.addEventListener('click', function() {
        if (currentIndex < maxIndex) {
            scrollToPosition(currentIndex + 1);
        }
    });
    
    // Touch/swipe support for mobile
    let isDown = false;
    let startX;
    let scrollLeft;
    
    grid.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - grid.offsetLeft;
        scrollLeft = grid.scrollLeft;
    });
    
    grid.addEventListener('mouseleave', () => {
        isDown = false;
    });
    
    grid.addEventListener('mouseup', () => {
        isDown = false;
    });
    
    grid.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - grid.offsetLeft;
        const walk = (x - startX) * 2;
        grid.scrollLeft = scrollLeft - walk;
    });
    
    // Initialize
    updateButtons();
    
    // Update on resize
    window.addEventListener('resize', function() {
        const newMaxIndex = Math.max(0, cards.length - Math.floor(grid.offsetWidth / cardWidth));
        if (currentIndex > newMaxIndex) {
            scrollToPosition(newMaxIndex);
        } else {
            updateButtons();
        }
    });
});