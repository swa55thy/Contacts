// script.js

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message!');
    // Here you can add additional form submission logic (e.g., send data to a server)
});