document.addEventListener('DOMContentLoaded', function() {
    const pagAtual = window.location.pathname.split('/').pop() || 'index.html';
    
    const navLinks = document.querySelectorAll('.sidebar-nav .nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        
        if (link.getAttribute('href') === pagAtual) {
            link.classList.add('active');
        }
    });

    const filterForm = document.getElementById('adoptionFilterBar');
    if (filterForm) {
        filterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const species = document.getElementById('filterSpecies').value;
            const size = document.getElementById('filterSize').value;
            const name = document.getElementById('filterName').value.trim().toLowerCase();
            document.querySelectorAll('#adoptionAnimalsList .animal-card').forEach(card => {
                const match = (!species || card.dataset.species === species)
                    && (!size || card.dataset.size === size)
                    && (!name || card.dataset.name.toLowerCase().includes(name));
                card.closest('.col-12').style.display = match ? '' : 'none';
            });
        });
    }
});

