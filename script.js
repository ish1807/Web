document.addEventListener('DOMContentLoaded', function() {
  // Form validation
  const contactForm = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');

  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    
    if (validateEmail(email) && validatePhone(phone)) {
      formMessage.textContent = 'Form submitted successfully!';
      formMessage.style.color = 'green';
    } else {
      formMessage.textContent = 'Please enter a valid email and phone number.';
      formMessage.style.color = 'red';
    }
  });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  function validatePhone(phone) {
    const re = /^\d{10}$/;
    return re.test(String(phone));
  }

  // Dynamic content loading
  const loadContentBtn = document.getElementById('loadContentBtn');
  const dynamicContent = document.getElementById('dynamicContent');

  loadContentBtn.addEventListener('click', function() {
    dynamicContent.innerHTML = '<p>New dynamic content loaded!</p>';
  });
});
