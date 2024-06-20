document.getElementById('navbar-toggler').addEventListener('click', function() {
    document.getElementById('navbar-nav').classList.toggle('show');
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    alert(`Thank you for your message, ${name}!`);
    // Here you can add code to send the message to your email or server
});
