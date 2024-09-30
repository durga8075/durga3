// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
  // Smooth Scrolling for Navigation Links
  const navLinks = document.querySelectorAll('.nav-menu a');

  navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault(); // Prevent default anchor click behavior

          const targetId = this.getAttribute('href').substring(1); // Get target section id
          const targetSection = document.getElementById(targetId);

          if (targetSection) {
              // Scroll to the target section smoothly
              window.scrollTo({
                  top: targetSection.offsetTop - 70, // Adjust offset for fixed navbar
                  behavior: 'smooth'
              });
          }
      });
  });

  // Active Navigation Link Highlighting on Scroll
  const sections = document.querySelectorAll('section');
  const navItems = document.querySelectorAll('.nav-menu li a');

  window.addEventListener('scroll', () => {
      let current = '';

      sections.forEach(section => {
          const sectionTop = section.offsetTop - 80;
          if (pageYOffset >= sectionTop) {
              current = section.getAttribute('id');
          }
      });

      navItems.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href').substring(1) === current) {
              link.classList.add('active');
          }
      });
  });

  // Optional: Add 'active' class to the first nav link on load
  if (navItems.length > 0) {
      navItems[0].classList.add('active');
  }

  // Contact Form Validation
  const contactForm = document.querySelector('.contact-section form');

  contactForm.addEventListener('submit', function(e) {
      const name = contactForm.querySelector('input[name="name"]');
      const email = contactForm.querySelector('input[name="email"]');
      const message = contactForm.querySelector('textarea[name="message"]');

      let isValid = true;
      let errorMessage = '';

      // Simple validation checks
      if (name.value.trim() === '') {
          isValid = false;
          errorMessage += 'Please enter your name.\n';
      }

      if (email.value.trim() === '') {
          isValid = false;
          errorMessage += 'Please enter your email.\n';
      } else if (!validateEmail(email.value.trim())) {
          isValid = false;
          errorMessage += 'Please enter a valid email address.\n';
      }

      if (message.value.trim() === '') {
          isValid = false;
          errorMessage += 'Please enter your message.\n';
      }

      if (!isValid) {
          e.preventDefault(); // Prevent form submission
          alert(errorMessage);
      }
  });

  // Email Validation Function
  function validateEmail(email) {
      // Simple email regex pattern
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email.toLowerCase());
  }

  // Optional: Responsive Navbar Toggle (Uncomment if you add a hamburger menu)
  /*
  const navbar = document.querySelector('.navbar');
  const navMenu = document.querySelector('.nav-menu');
  const toggleButton = document.createElement('button');
  toggleButton.classList.add('nav-toggle');
  toggleButton.innerHTML = '&#9776;'; // Hamburger icon

  navbar.appendChild(toggleButton);

  toggleButton.addEventListener('click', () => {
      navMenu.classList.toggle('nav-active');
  });
  */
});
