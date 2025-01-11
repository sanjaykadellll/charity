// Toggle Navbar for Mobile
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".navbar-toggle");
    const navMenu = document.querySelector(".navbar-nav");

    toggleButton.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
});

// Smooth Scroll for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});
