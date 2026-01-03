// ... (keep mobile menu, smooth scroll, navbar scroll code)

// Form Submission Feedback
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

form.addEventListener('submit', function(e) {
    status.textContent = 'Sending your message...';
    status.style.color = '#007bff';

    // Optional: Full AJAX submission (uncomment if you want no page reload)
    /*
    e.preventDefault();
    fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
    }).then(() => {
        status.textContent = 'Message sent successfully! Check your email for confirmation.';
        status.style.color = 'green';
        form.reset();
    }).catch(() => {
        status.textContent = 'Error sending message. Please try again.';
        status.style.color = 'red';
    });
    */
});

// Mobile Menu Toggle
const mobileToggle = document.getElementById('mobileMenuToggle');
const navLinks = document.querySelector('.nav-links');

mobileToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = mobileToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileToggle.querySelector('i').classList.replace('fa-times', 'fa-bars');
            }
        }
    });
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        document.querySelector('.header').classList.add('scrolled');
    } else {
        document.querySelector('.header').classList.remove('scrolled');
    }
});

// Form Feedback
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

form.addEventListener('submit', function() {
    status.textContent = 'Sending your message...';
    status.style.color = '#007bff';
});