document.addEventListener('DOMContentLoaded', function () {
    const pagAtual = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.sidebar-nav .nav-link');

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === pagAtual) {
            link.classList.add('active');
        }
    });

    const sidebarToggle = document.querySelectorAll('#sidebarToggle');
    const sidebar = document.querySelector('.sidebar');

    if (sidebarToggle && sidebar) {
        // sidebarToggle.addEventListener('click', function () {
        //     sidebar.classList.toggle('open');
        // });
        sidebarToggle.forEach(toggle => {
            toggle.addEventListener('click', function () {
                sidebar.classList.toggle('open');
            });
        });
    }
});