// Simple form validation (for future enhancement)
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent actual form submission for now

      const name = form.querySelector('input[type="text"]').value.trim();
      const email = form.querySelector('input[type="email"]').value.trim();
      const message = form.querySelector('textarea').value.trim();

      if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return;
      }

      // You can connect to an email service later
      alert('Thanks! Your message has been received.');
      form.reset();
    });
  }
});
