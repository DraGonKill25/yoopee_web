document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const mailtoLink = `mailto:yoopee@gmx.fr?subject=Contact from ${name}&body=${message}`;
    window.location.href = mailtoLink;
});

