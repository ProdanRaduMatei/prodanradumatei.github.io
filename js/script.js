// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function () {
    const scrollLinks = document.querySelectorAll('header ul li a');

    scrollLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: 'smooth'
                });
            }
        });
    });

    const menuIcon = document.getElementById('menu-icon');
    const menuList = document.getElementById('menu-list');

    menuIcon.addEventListener('click', function () {
        menuList.classList.toggle('active');
        menuIcon.classList.toggle('active');
    });
});
