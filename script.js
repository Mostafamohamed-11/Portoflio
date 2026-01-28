/* ================= Smooth Scroll ================= */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

/* ================= Typing Effect ================= */
const typingEl = document.getElementById("typing");

if (typingEl) {
  const roles = [
    "Software Tester",
    "QA Engineer",
    "Bug Hunter",
    "Quality Advocate"
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function type() {
    const current = roles[roleIndex];
    typingEl.textContent = deleting
      ? current.substring(0, charIndex--)
      : current.substring(0, charIndex++);

    if (charIndex === current.length + 1) deleting = true;
    if (charIndex === 0 && deleting) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }

    setTimeout(type, deleting ? 70 : 120);
  }

  type();
}

/* ================= EmailJS ================= */
(function () {
  emailjs.init("PmTjHp7crnDNs2zEu");
})();

const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();

    emailjs.sendForm(
      "service_portflio",
      "template_wnmpv2r",
      form
    ).then(() => {
      status.textContent = "Message sent successfully!";
      status.style.color = "limegreen";
      form.reset();
    }).catch(() => {
      status.textContent = "Failed to send message.";
      status.style.color = "red";
    });
  });
}

// Scroll Animation
const items = document.querySelectorAll('.timeline-item');

function revealTimeline() {
  const triggerBottom = window.innerHeight * 0.85;
  items.forEach(item => {
    const top = item.getBoundingClientRect().top;
    if(top < triggerBottom) {
      item.classList.add('show');
    }
  });
}

const certificates = document.querySelectorAll('.certificate-img');

certificates.forEach(img => {
  const popup = document.getElementById(img.dataset.target);

  // Track whether the mouse is on image or popup
  let isHovering = false;

  function showPopup() {
    popup.classList.add('show');
    isHovering = true;
  }

  function hidePopup() {
    isHovering = false;
    // Delay a little to allow moving from image to popup
    setTimeout(() => {
      if (!isHovering) {
        popup.classList.remove('show');
      }
    }, 50); // 50ms delay, adjust if needed
  }

  // Hover over image
  img.addEventListener('mouseenter', showPopup);
  img.addEventListener('mouseleave', hidePopup);

  // Hover over popup
  popup.addEventListener('mouseenter', () => {
    isHovering = true;
    popup.classList.add('show');
  });
  popup.addEventListener('mouseleave', hidePopup);
});


const projects = document.querySelectorAll('.project-img');

projects.forEach(img => {
  const popup = document.getElementById(img.dataset.target);

  // Track whether the mouse is on image or popup
  let isHovering = false;

  function showPopup() {
    popup.classList.add('show');
    isHovering = true;
  }

  function hidePopup() {
    isHovering = false;
    // Delay to allow moving from image to popup
    setTimeout(() => {
      if (!isHovering) {
        popup.classList.remove('show');
      }
    }, 50);
  }

  // Hover over image
  img.addEventListener('mouseenter', showPopup);
  img.addEventListener('mouseleave', hidePopup);

  // Hover over popup
  popup.addEventListener('mouseenter', () => {
    isHovering = true;
    popup.classList.add('show');
  });

  popup.addEventListener('mouseleave', hidePopup);
});
window.addEventListener('scroll', () => {
  if (document.querySelector('.certificate-popup.show') || document.querySelector('.project-popup.show')) {
    document.body.classList.add('scrolling');
    setTimeout(() => {
      document.body.classList.remove('scrolling');
    }, 100); // Adjust delay if needed
  }
});