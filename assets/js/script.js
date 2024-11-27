// Gestion du formulaire de contact
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const mailtoLink = `mailto:yoopee@gmx.fr?subject=Contact from ${name}&body=${message}`;
    window.location.href = mailtoLink;
});

// Gestion des animations au scroll
document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('[data-aos]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
            }
        });
    }, { threshold: 0.1 });

    elements.forEach((element) => {
        observer.observe(element);
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const projectItems = document.querySelectorAll('.project-item');

    projectItems.forEach((item) => {
        item.addEventListener('click', () => {
            // Supprime la classe active des autres projets
            projectItems.forEach((otherItem) => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });

            // Active/désactive l'état pour le projet cliqué
            item.classList.toggle('active');
        });
    });
});


document.addEventListener('click', (event) => {
    const isProjectItem = event.target.closest('.project-item');
    if (!isProjectItem) {
        projectItems.forEach((item) => item.classList.remove('active'));
    }
});