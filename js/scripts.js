<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript is loaded and running!");

    // Initialize particles.js
    particlesJS.load('particles-js', 'js/particles.json', function() {
        console.log('particles.js loaded - callback');
    });

    // Smooth scrolling for navigation
    const links = document.querySelectorAll('nav ul li a');
    for (const link of links) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
            setActiveLink(this);
        });
    }

    // Set active link
    function setActiveLink(activeLink) {
        links.forEach(link => link.classList.remove('active'));
        activeLink.classList.add('active');
    }
});
=======
document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript is loaded and running!");

    // Initialize particles.js
    particlesJS.load('particles-js', 'js/particles.json', function() {
        console.log('particles.js loaded - callback');
    });

    // Smooth scrolling for navigation
    const links = document.querySelectorAll('nav ul li a');
    for (const link of links) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
            setActiveLink(this);
        });
    }

    // Set active link
    function setActiveLink(activeLink) {
        links.forEach(link => link.classList.remove('active'));
        activeLink.classList.add('active');
    }
});
>>>>>>> 6b02f49391834f472f1960bdd6ffae9984b74a26
